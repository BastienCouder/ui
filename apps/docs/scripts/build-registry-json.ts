import fs from "fs";
import path from "path";

// Base paths
const COMPONENTS_BASE_PATH = path.join(process.cwd(), "content/components");
const REGISTRY_BASE_PATH = path.join(process.cwd(), "public/registry");

// Helper function to delete existing registry files
const deleteRegistry = (registryPath: string) => {
  if (fs.existsSync(registryPath)) {
    fs.rmSync(registryPath, { recursive: true, force: true });
  }
};

// Helper function to parse registryDependencies as a string like 'button - label'
const extractFrontMatterManually = (fileContent: string) => {
  const frontMatterMatch = /^---\s*([\s\S]*?)\s*---/.exec(fileContent);

  if (frontMatterMatch) {
    const frontMatter = frontMatterMatch[1];
    const lines = frontMatter ? frontMatter.split("\n") : [];

    // Find the line containing registryDependencies
    const registryDependenciesLine = lines.find((line) =>
      line.trim().startsWith("registryDependencies:"),
    );

    if (registryDependenciesLine) {
      // Extract the value from the line (e.g., 'button - label')
      const dependenciesMatch = /registryDependencies:\s*['"](.*?)['"]/.exec(
        registryDependenciesLine,
      );

      if (dependenciesMatch && dependenciesMatch[1]) {
        // Split the dependencies string by ' - ' and clean up whitespace
        const registryDependencies = dependenciesMatch[1]
          .split("-")
          .map((dep) => dep.trim());

        return { registryDependencies };
      }
    }
  }

  return {};
};

// Helper function to parse component source information from <ComponentSource>
const parseComponentSource = (fileContent: string) => {
  const componentSourceMatch =
    /<ComponentSource\s+name=\{(\[.*?\])\}\s+extension=\{(\[.*?\])\}/.exec(
      fileContent,
    );

  if (componentSourceMatch && componentSourceMatch[1]) {
    const files = JSON.parse(componentSourceMatch[1].replace(/'/g, '"'));
    const extensions = componentSourceMatch[2]
      ? JSON.parse(componentSourceMatch[2].replace(/'/g, '"'))
      : [];

    return files.map((file: string, index: number) => {
      return { path: `${file}.${extensions[index]}`, type: "registry:ui" };
    });
  }

  return [];
};

// Helper function to extract dependencies from <Steps> and registryDependencies from front matter
const parseDependencies = (fileContent: string) => {
  const installCommandMatch = /```bash\r?\nnpm install (.*?)\r?\n```/.exec(
    fileContent,
  );

  const dependencies =
    installCommandMatch && installCommandMatch[1]
      ? installCommandMatch[1].split(" ").map((dep: string) => dep.trim())
      : [];

  // Extract registryDependencies manually from front matter
  const { registryDependencies } = extractFrontMatterManually(fileContent);

  return { dependencies, registryDependencies };
};

// Helper function to update or add entries in the index.json file
const updateOrCreateIndexFile = (registryPath: string, componentInfo: any) => {
  const indexFilePath = path.join(registryPath, "index.json");
  let existingData: any[] = [];

  if (fs.existsSync(indexFilePath)) {
    const existingFileContent = fs.readFileSync(indexFilePath, "utf-8");
    existingData = JSON.parse(existingFileContent);

    const existingEntryIndex = existingData.findIndex(
      (item) => item.name === componentInfo.name,
    );
    if (existingEntryIndex !== -1) {
      existingData[existingEntryIndex] = componentInfo;
    } else {
      existingData.push(componentInfo);
    }
  } else {
    existingData = [componentInfo];
  }

  fs.writeFileSync(indexFilePath, JSON.stringify(existingData, null, 2));
};

// Helper function to generate the registry data
const generateRegistryData = (basePath: string, registryPath: string) => {
  const entries = fs.readdirSync(basePath);

  entries.forEach((entry) => {
    const entryPath = path.join(basePath, entry);
    const stat = fs.statSync(entryPath);

    if (stat.isDirectory()) {
      const subRegistryPath = path.join(registryPath, entry);
      if (!fs.existsSync(subRegistryPath)) {
        fs.mkdirSync(subRegistryPath, { recursive: true });
      }

      generateRegistryData(entryPath, subRegistryPath);
    } else if (
      stat.isFile() &&
      path.extname(entry) === ".mdx" &&
      entry !== "index.mdx"
    ) {
      const fileContent = fs.readFileSync(entryPath, "utf-8");
      const name = path.basename(entry, ".mdx").replace(/ /g, "-");

      const componentFiles = parseComponentSource(fileContent);
      const { dependencies, registryDependencies } =
        parseDependencies(fileContent);

      // If no files are found, default to `ui/<name>.tsx`
      const cleanedFiles =
        componentFiles.length > 0
          ? componentFiles
          : [{ path: `ui/${name}.tsx`, type: "registry:ui" }];

      let componentInfo: any;

      if (dependencies.length > 0 && (registryDependencies?.length ?? 0) > 0) {
        componentInfo = {
          name,
          type: "registry:ui",
          dependencies,
          registryDependencies,
          files: cleanedFiles,
        };
      } else if (
        dependencies.length > 0 &&
        (registryDependencies?.length ?? 0) === 0
      ) {
        componentInfo = {
          name,
          type: "registry:ui",
          dependencies,
          files: cleanedFiles,
        };
      } else if (
        dependencies.length === 0 &&
        (registryDependencies?.length ?? 0) > 0
      ) {
        componentInfo = {
          name,
          type: "registry:ui",
          registryDependencies,
          files: cleanedFiles,
        };
      } else {
        componentInfo = {
          name,
          type: "registry:ui",
          files: cleanedFiles,
        };
      }

      updateOrCreateIndexFile(registryPath, componentInfo);
    } else if (entry === "index.mdx") {
      return;
    }
  });
};

// Main function to start the registry generation
const createRegistry = () => {
  deleteRegistry(REGISTRY_BASE_PATH);

  if (!fs.existsSync(REGISTRY_BASE_PATH)) {
    fs.mkdirSync(REGISTRY_BASE_PATH, { recursive: true });
  }

  generateRegistryData(COMPONENTS_BASE_PATH, REGISTRY_BASE_PATH);

  console.log(
    "\x1b[32m✓\x1b[0m Generated index.json files with registryDependencies (if any).",
  );
};

// Run the registry creation
createRegistry();
