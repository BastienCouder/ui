import { promises as fs } from "fs";
import path from "path";
import { preFlightInit } from "@/src/preflights/preflight-init";
import { addComponents } from "@/src/utils/add-components";
import * as ERRORS from "@/src/utils/errors";
import {
  DEFAULT_COMPONENTS,
  DEFAULT_TAILWIND_CONFIG,
  DEFAULT_TAILWIND_CSS,
  DEFAULT_UTILS,
  getConfig,
  rawConfigSchema,
  resolveConfigPaths,
  type Config,
} from "@/src/utils/get-config";
import { getProjectConfig, getProjectInfo } from "@/src/utils/get-project-info";
import { handleError } from "@/src/utils/handle-error";
import { highlighter } from "@/src/utils/highlighter";
import { logger } from "@/src/utils/logger";
import { spinner } from "@/src/utils/spinner";
import { updateTailwindContent } from "@/src/utils/updaters/update-tailwind-content";
import { Command } from "commander";
import prompts from "prompts";
import { z } from "zod";
import { getFramework } from "../utils/frameworks";

export const initOptionsSchema = z.object({
  cwd: z.string(),
  components: z.array(z.string()).optional(),
  yes: z.boolean(),
  defaults: z.boolean(),
  force: z.boolean(),
  silent: z.boolean(),
  isNewProject: z.boolean(),
  srcDir: z.boolean().optional(),
});

export const init = new Command()
  .name("init")
  .description("initialize your project and install dependencies")
  .argument(
    "[components...]",
    "the components to add or a url to the component.",
  )
  .option("-y, --yes", "skip confirmation prompt.", true)
  .option("-d, --defaults,", "use default configuration.", false)
  .option("-f, --force", "force overwrite of existing configuration.", false)
  .option(
    "-c, --cwd <cwd>",
    "the working directory. defaults to the current directory.",
    process.cwd(),
  )
  .option("-s, --silent", "mute output.", false)
  .option(
    "--src-dir",
    "use the src directory when creating a new project.",
    false,
  )
  .action(async (components, opts) => {
    try {
      const options = initOptionsSchema.parse({
        cwd: path.resolve(opts.cwd),
        isNewProject: false,
        components,
        ...opts,
      });

      await runInit(options);

      logger.log(
        `${highlighter.success(
          "Success!",
        )} Project initialization completed.\nYou may now add components.`,
      );
      logger.break();
    } catch (error) {
      logger.break();
      handleError(error);
    }
  });

export async function runInit(
  options: z.infer<typeof initOptionsSchema> & {
    skipPreflight?: boolean;
  },
) {
  let projectInfo;
  if (!options.skipPreflight) {
    const preflight = await preFlightInit(options);
    if (preflight.errors[ERRORS.MISSING_DIR_OR_EMPTY_PROJECT]) {
      // const { projectPath } = await createProject(options);
      // if (!projectPath) {
      //   process.exit(1);
      // }
      // options.cwd = projectPath;
      // options.isNewProject = true;
      logger.log(`${highlighter.error("Error!")} No package.json found.`);
      logger.break();
      process.exit(1);
    }
    projectInfo = preflight.projectInfo;
  } else {
    projectInfo = await getProjectInfo(options.cwd);
  }

  const projectConfig = await getProjectConfig(options.cwd, projectInfo);

  const framework = await getFramework(
    projectInfo?.framework.name ? projectInfo?.framework.name : "react",
  );

  const config = projectConfig
    ? await promptForMinimalConfig(projectConfig, options, framework ?? "react")
    : await promptForConfig(await getConfig(options.cwd), framework ?? "react");

  if (!options.yes) {
    const { proceed } = await prompts({
      type: "confirm",
      name: "proceed",
      message: `Write configuration to ${highlighter.info(
        "components.json",
      )}. Proceed?`,
      initial: true,
    });

    if (!proceed) {
      process.exit(0);
    }
  }

  // Write components.json.
  const componentSpinner = spinner(`Writing components.json.`).start();
  const targetPath = path.resolve(options.cwd, "components.json");
  await fs.writeFile(targetPath, JSON.stringify(config, null, 2), "utf8");
  componentSpinner.succeed();

  // Add components.
  const fullConfig = await resolveConfigPaths(options.cwd, config);
  const components = ["index", ...(options.components || [])];
  await addComponents(components, fullConfig, {
    // Init will always overwrite files.
    overwrite: true,
    silent: options.silent,
    isNewProject:
      options.isNewProject || projectInfo?.framework.name === "next-app",
  });

  // If a new project is using src dir, let's update the tailwind content config.
  // TODO: Handle this per framework.
  if (options.isNewProject && options.srcDir) {
    await updateTailwindContent(
      ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
      fullConfig,
      {
        silent: options.silent,
      },
    );
  }

  return fullConfig;
}

async function promptForConfig(
  defaultConfig: Config | null = null,
  framework: string,
) {
  logger.info("");

  const options = await prompts([
    ...(framework === "vue"
      ? [
          {
            type: "text" as const,
            name: "tailwindCss",
            message: `Where is your ${highlighter.info("global CSS")} file?`,
            initial: defaultConfig?.tailwind.css ?? DEFAULT_TAILWIND_CSS,
          },
        ]
      : framework === "angular"
        ? [
            {
              type: "text" as const,
              name: "tailwindCss",
              message: `Where is your ${highlighter.info("styles.css")} file?`,
              initial: "src/styles.css",
            },
          ]
        : []),
    {
      type: "toggle",
      name: "tailwindCssVariables",
      message: `Would you like to use ${highlighter.info("CSS variables")} for theming?`,
      initial: defaultConfig?.tailwind.cssVariables ?? true,
      active: "yes",
      inactive: "no",
    },
    {
      type: "text",
      name: "tailwindConfig",
      message: `Where is your ${highlighter.info("tailwind.config.js")} located?`,
      initial: defaultConfig?.tailwind.config ?? DEFAULT_TAILWIND_CONFIG,
    },
    {
      type: "text",
      name: "components",
      message: `Configure the import alias for ${highlighter.info("components")}:`,
      initial: defaultConfig?.aliases["components"] ?? DEFAULT_COMPONENTS,
    },
    {
      type: "text",
      name: "utils",
      message: `Configure the import alias for ${highlighter.info("utils")}:`,
      initial: defaultConfig?.aliases["utils"] ?? DEFAULT_UTILS,
    },
  ]);

  // Définition des alias spécifiques selon le framework
  let aliases;
  switch (framework) {
    case "vue":
      aliases = {
        utils: options.utils,
        components: options.components,
        composables: options.components.replace(/\/components$/, "composables"), // Alias spécifique à Vue
        lib: options.components.replace(/\/components$/, "lib"),
      };
      break;
    case "angular":
      aliases = {
        utils: options.utils,
        components: options.components,
        services: options.components.replace(/\/components$/, "services"), // Alias spécifique à Angular
        modules: options.components.replace(/\/components$/, "modules"), // Alias spécifique à Angular
      };
      break;
    case "react":
    default:
      aliases = {
        utils: options.utils,
        components: options.components,
        lib: options.components.replace(/\/components$/, "lib"),
        hooks: options.components.replace(/\/components$/, "hooks"), // Alias spécifique à React
      };
  }

  return rawConfigSchema.parse({
    $schema: "https://ui.bastiencouder.com/schema.json",
    framework: framework,
    tailwind: {
      config: options.tailwindConfig,
      css: options.tailwindCss,
      cssVariables: options.tailwindCssVariables,
    },
    aliases,
  });
}

async function promptForMinimalConfig(
  defaultConfig: Config,
  opts: z.infer<typeof initOptionsSchema>,
  framework: string,
) {
  let cssVariables = defaultConfig.tailwind.cssVariables;

  if (!opts.defaults) {
    const options = await prompts([
      {
        type: "toggle",
        name: "tailwindCssVariables",
        message: `Would you like to use ${highlighter.info(
          "CSS variables",
        )} for theming?`,
        initial: defaultConfig?.tailwind.cssVariables,
        active: "yes",
        inactive: "no",
      },
    ]);

    cssVariables = options.tailwindCssVariables;
  }

  return rawConfigSchema.parse({
    $schema: defaultConfig?.$schema,
    framework: framework,
    tailwind: {
      ...defaultConfig?.tailwind,
      cssVariables,
    },
    aliases: defaultConfig?.aliases,
  });
}
