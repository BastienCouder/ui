import path from "path";
import { initOptionsSchema } from "@/src/commands/init";
import { getPackageManager } from "@/src/utils/get-package-manager";
import { highlighter } from "@/src/utils/highlighter";
import { logger } from "@/src/utils/logger";
import { spinner } from "@/src/utils/spinner";
import { execa } from "execa";
import fs from "fs-extra";
import prompts from "prompts";
import { z } from "zod";

export async function createProject(
  options: Pick<z.infer<typeof initOptionsSchema>, "cwd" | "force" | "srcDir">,
) {
  options = {
    srcDir: false,
    ...options,
  };

  if (!options.force) {
    const { proceed } = await prompts({
      type: "confirm",
      name: "proceed",
      message: `The path ${highlighter.info(
        options.cwd,
      )} does not contain a package.json file. Would you like to start a new project?`,
      initial: true,
    });

    if (!proceed) {
      return {
        projectPath: null,
        projectName: null,
      };
    }
  }

  const { framework } = await prompts({
    type: "select",
    name: "framework",
    message: "Which framework would you like to use?",
    choices: [
      { title: "Next.js", value: "next" },
      { title: "Angular", value: "angular" },
      { title: "Nuxt.js", value: "nuxt" },
    ],
  });

  const packageManager = await getPackageManager(options.cwd);

  const { name } = await prompts({
    type: "text",
    name: "name",
    message: `What is your project named?`,
    initial: "my-app",
    format: (value: string) => value.trim(),
    validate: (value: string) =>
      value.length > 128 ? `Name should be less than 128 characters.` : true,
  });

  const projectPath = `${options.cwd}/${name}`;

  // Check if path is writable.
  try {
    await fs.access(options.cwd, fs.constants.W_OK);
  } catch (error) {
    logger.break();
    logger.error(`The path ${highlighter.info(options.cwd)} is not writable.`);
    logger.error(
      `It is likely you do not have write permissions for this folder or the path ${highlighter.info(
        options.cwd,
      )} does not exist.`,
    );
    logger.break();
    process.exit(1);
  }

  if (fs.existsSync(path.resolve(options.cwd, name, "package.json"))) {
    logger.break();
    logger.error(
      `A project with the name ${highlighter.info(name)} already exists.`,
    );
    logger.error(`Please choose a different name and try again.`);
    logger.break();
    process.exit(1);
  }

  let createSpinner;
  let args = [];

  switch (framework) {
    case "next":
      // Prompt user for Next.js specific options
      const nextOptions = await prompts([
        {
          type: "confirm",
          name: "tailwind",
          message: "Would you like to include Tailwind CSS?",
          initial: true,
        },
        {
          type: "confirm",
          name: "eslint",
          message: "Would you like to include ESLint?",
          initial: true,
        },
        {
          type: "confirm",
          name: "typescript",
          message: "Would you like to use TypeScript?",
          initial: true,
        },
        {
          type: "confirm",
          name: "app",
          message: "Would you like to use the new Next.js app directory?",
          initial: true,
        },
        {
          type: "confirm",
          name: "srcDir",
          message: "Would you like to use a src/ directory?",
          initial: false,
        },
        {
          type: "confirm",
          name: "importAlias",
          message: "Would you like to configure import alias?",
          initial: false,
        },
      ]);

      createSpinner = spinner(
        `Creating a new Next.js project. This may take a few minutes.`,
      ).start();

      args = [
        nextOptions.tailwind ? "--tailwind" : "--no-tailwind",
        nextOptions.eslint ? "--eslint" : "--no-eslint",
        nextOptions.typescript ? "--typescript" : "--no-typescript",
        nextOptions.app ? "--app" : "--no-app",
        nextOptions.srcDir ? "--src-dir" : "--no-src-dir",
        nextOptions.importAlias ? "--import-alias" : "--no-import-alias",
        `--use-${packageManager}`,
      ];

      try {
        await execa(
          "npx",
          ["create-next-app@latest", projectPath, "--silent", ...args],
          {
            cwd: options.cwd,
          },
        );
      } catch (error) {
        logger.break();
        logger.error(
          `Something went wrong creating a new Next.js project. Please try again.`,
        );
        process.exit(1);
      }

      createSpinner?.succeed("Next.js project created successfully.");
      break;

    case "angular":
      createSpinner = spinner(
        `Creating a new Angular project. This may take a few minutes.`,
      ).start();
      try {
        await execa(
          "npx",
          ["@angular/cli@latest", "new", name, "--directory", projectPath],
          {
            cwd: options.cwd,
            stdio: "inherit", // Relayer les interactions avec Angular CLI
          },
        );
      } catch (error) {
        logger.break();
        logger.error(
          `Something went wrong creating a new Angular project. Please try again.`,
        );
        process.exit(1);
      }
      createSpinner?.succeed("Angular project created successfully.");
      break;

    case "nuxt":
      createSpinner = spinner(
        `Creating a new Nuxt.js project. This may take a few minutes.`,
      ).start();
      try {
        await execa("npx", ["nuxi@latest", "init", projectPath], {
          cwd: options.cwd,
          stdio: "inherit", // Relayer les interactions avec Nuxt CLI
        });
      } catch (error) {
        logger.break();
        logger.error(
          `Something went wrong creating a new Nuxt.js project. Please try again.`,
        );
        process.exit(1);
      }
      createSpinner?.succeed("Nuxt.js project created successfully.");
      break;

    default:
      logger.error("Unsupported framework.");
      process.exit(1);
  }

  return {
    projectPath,
    projectName: name,
  };
}
