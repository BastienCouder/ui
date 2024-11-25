import path from "path";
import { FRAMEWORKS, Framework, getFramework } from "@/src/utils/frameworks";
import {
  Config,
  RawConfig,
  getConfig,
  resolveConfigPaths,
} from "@/src/utils/get-config";
import { getPackageInfo } from "@/src/utils/get-package-info";
import fg from "fast-glob";
import fs from "fs-extra";
import { loadConfig } from "tsconfig-paths";

type ProjectInfo = {
  framework: Framework;
  isSrcDir: boolean;
  isRSC: boolean;
  isTsx: boolean;
  tailwindConfigFile: string | null;
  tailwindCssFile: string | null;
  aliasPrefix: string | null;
};

const PROJECT_SHARED_IGNORE = [
  "**/node_modules/**",
  ".next",
  "public",
  "dist",
  "build",
];

// Main function to get project information
export async function getProjectInfo(cwd: string): Promise<ProjectInfo | null> {
  const [
    configFiles,
    isSrcDir,
    isTsx,
    tailwindConfigFile,
    tailwindCssFile,
    aliasPrefix,
    packageJson,
  ] = await Promise.all([
    fg.glob(
      "**/{next,vite,astro,angular,nuxt,vue}.config.*|gatsby-config.*|composer.json|angular.json",
      {
        cwd,
        deep: 3,
        ignore: PROJECT_SHARED_IGNORE,
      },
    ),
    fs.pathExists(path.resolve(cwd, "src")),
    isTypeScriptProject(cwd),
    getTailwindConfigFile(cwd),
    getTailwindCssFile(cwd),
    getTsConfigAliasPrefix(cwd),
    getPackageInfo(cwd, false),
  ]);

  const isUsingAppDir = await fs.pathExists(
    path.resolve(cwd, `${isSrcDir ? "src/" : ""}app`),
  );

  const type: ProjectInfo = {
    framework: FRAMEWORKS["manual"],
    isSrcDir,
    isRSC: false,
    isTsx,
    tailwindConfigFile,
    tailwindCssFile,
    aliasPrefix,
  };

  // Detect specific frameworks
  if (configFiles.some((file) => file.startsWith("next.config."))) {
    type.framework = isUsingAppDir
      ? FRAMEWORKS["next-app"]
      : FRAMEWORKS["next-pages"];
    type.isRSC = isUsingAppDir;
    return type;
  }

  if (configFiles.some((file) => file.startsWith("astro.config."))) {
    type.framework = FRAMEWORKS["astro"];
    return type;
  }

  if (configFiles.some((file) => file.startsWith("gatsby-config."))) {
    type.framework = FRAMEWORKS["gatsby"];
    return type;
  }

  if (configFiles.some((file) => file.startsWith("composer.json"))) {
    type.framework = FRAMEWORKS["laravel"];
    return type;
  }

  if (
    Object.keys(packageJson?.dependencies ?? {}).some((dep) =>
      dep.startsWith("@remix-run/"),
    )
  ) {
    type.framework = FRAMEWORKS["remix"];
    return type;
  }

  if (configFiles.some((file) => file.startsWith("vite.config."))) {
    type.framework = FRAMEWORKS["vite"];
    return type;
  }

  if (configFiles.some((file) => file.startsWith("angular.json"))) {
    type.framework = FRAMEWORKS["angular"];
    return type;
  }

  if (configFiles.some((file) => file.startsWith("vue.config."))) {
    type.framework = FRAMEWORKS["vue"];
    return type;
  }

  if (configFiles.some((file) => file.startsWith("nuxt.config."))) {
    type.framework = FRAMEWORKS["nuxt"];
    return type;
  }

  return type;
}

// Utility to find Tailwind CSS file
export async function getTailwindCssFile(cwd: string) {
  const files = await fg.glob(["**/*.css", "**/*.scss"], {
    cwd,
    deep: 5,
    ignore: PROJECT_SHARED_IGNORE,
  });

  if (!files.length) return null;

  for (const file of files) {
    const contents = await fs.readFile(path.resolve(cwd, file), "utf8");
    if (contents.includes("@tailwind base")) return file;
  }

  return null;
}

// Utility to find Tailwind configuration file
export async function getTailwindConfigFile(cwd: string) {
  const files = await fg.glob("tailwind.config.*", {
    cwd,
    deep: 3,
    ignore: PROJECT_SHARED_IGNORE,
  });

  return files.length > 0 ? files[0] : null;
}

// Liste des priorités des alias
const priorities = [
  "~",
  "@",
  "~~",
  "@@",
  "#shared",
  "assets",
  "public",
  "#build",
];

function getPriority(alias: string): number {
  const baseAlias = alias.split("/")[0];
  const index = priorities.indexOf(baseAlias);
  return index === -1 ? priorities.length : index;
}

function sortAliases(aliases: [string, string[]][]): [string, string[]][] {
  return aliases.sort(([aliasA], [aliasB]) => {
    return getPriority(aliasA) - getPriority(aliasB);
  });
}

export async function getTsConfigAliasPrefix(cwd: string) {
  const tsConfig = await loadConfig(cwd);

  if (tsConfig?.resultType === "failed" || !tsConfig?.paths) return null;

  const sortedAliases = sortAliases(Object.entries(tsConfig.paths));

  for (const [alias, paths] of sortedAliases) {
    if (
      paths.includes("./*") ||
      paths.includes("../*") ||
      paths.includes("./src/*") ||
      paths.includes("./app/*") ||
      paths.includes("./resources/js/*")
    ) {
      return alias.split("/")[0] ?? null;
    }
  }

  return null;
}

// Determine if the project is using TypeScript
export async function isTypeScriptProject(cwd: string) {
  const files = await fg.glob("tsconfig.*", {
    cwd,
    deep: 1,
    ignore: PROJECT_SHARED_IGNORE,
  });

  return files.length > 0;
}

// Load tsconfig.json
export async function getTsConfig() {
  try {
    const tsconfigPath = path.join("tsconfig.json");
    return await fs.readJSON(tsconfigPath);
  } catch {
    return null;
  }
}

// Get project configuration or generate a default one
export async function getProjectConfig(
  cwd: string,
  defaultProjectInfo: ProjectInfo | null = null,
): Promise<Config | null> {
  const [existingConfig, projectInfo] = await Promise.all([
    getConfig(cwd),
    defaultProjectInfo ? defaultProjectInfo : getProjectInfo(cwd),
  ]);

  if (existingConfig) return existingConfig;

  if (
    !projectInfo ||
    !projectInfo.tailwindConfigFile ||
    !projectInfo.tailwindCssFile
  ) {
    return null;
  }

  const framework = await getFramework(projectInfo.framework.name);

  const config: RawConfig = {
    $schema: "https://ui.bastiencouder.com/schema.json",
    tsx: projectInfo.isTsx,
    framework: framework ?? "react",
    tailwind: {
      config: projectInfo.tailwindConfigFile,
      css: projectInfo.tailwindCssFile,
      cssVariables: true,
    },
    aliases: {
      components: `${projectInfo.aliasPrefix}/components`,
      ui: `${projectInfo.aliasPrefix}/components/ui`,
      hooks: `${projectInfo.aliasPrefix}/hooks`,
      lib: `${projectInfo.aliasPrefix}/lib`,
      utils: `${projectInfo.aliasPrefix}/lib/utils`,
    },
  };

  return await resolveConfigPaths(cwd, config);
}
