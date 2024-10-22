import fs from "fs";
import path from "path";

// Base paths
const REGISTRY_BASE_PATH = path.join(process.cwd(), "public/registry");
const REGISTRY_UI_PATH = path.join(process.cwd(), "public/registry/ui");
const FILES_BASE_PATH = path.join(process.cwd(), "src/registry/");

// Helper function to delete existing registry files
const deleteRegistry = (registryPath: string) => {
  if (fs.existsSync(registryPath)) {
    fs.rmSync(registryPath, { recursive: true, force: true });
  }
};

// Helper function to read file content safely
const getFileContent = (filePath: string) => {
  if (fs.existsSync(filePath)) {
    return fs.readFileSync(filePath, "utf-8");
  }
  return null;
};

// Helper function to generate a JSON file for each component
const generateComponentJsonFile = (
  frameworkRegistryPath: string,
  componentInfo: any
) => {
  const componentJsonPath = path.join(
    frameworkRegistryPath,
    `${componentInfo.name}.json`
  );

  // Transform the "files" array to include file content, path, and target
  const filesWithContent = componentInfo.files.map((fileObj: any) => {
    // Check if fileObj is a string (path) or an object
    const filePath = typeof fileObj === "string" ? fileObj : fileObj.path;
    const fileName = path.basename(filePath);
    const absoluteFilePath = path.join(FILES_BASE_PATH, filePath); // Prepend src/registry/ui to file path
    const content = getFileContent(absoluteFilePath);
    const targetPath = `components/ui/${fileName}`;

    return {
      path: filePath,
      content: content || "",
      type: "registry:ui",
      target: targetPath,
    };
  });

  const componentWithFiles = {
    ...componentInfo,
    files: filesWithContent,
  };

  fs.writeFileSync(
    componentJsonPath,
    JSON.stringify(componentWithFiles, null, 2),
    "utf-8"
  );
};

// Helper function to create the index.json with the fixed config for each subdirectory
const createFixedIndexJson = (outputPath: string, frameworkName: string) => {
  const fixedIndexConfig = {
    name: frameworkName, // Use the framework name here
    type: "registry:style",
    dependencies: [
      "tailwindcss-animate",
      "class-variance-authority",
      "lucide-react",
      "tailwind-variants",
    ],
    registryDependencies: ["utils"],
    tailwind: {
      config: {
        plugins: ['require("tailwindcss-animate")'],
      },
    },
    cssVars: {},
    files: [],
  };

  const indexJsonPath = path.join(outputPath, "index.json");

  fs.writeFileSync(
    indexJsonPath,
    JSON.stringify(fixedIndexConfig, null, 2),
    "utf-8"
  );
};

// Helper function to process each framework's index.json and generate files
const processFrameworkIndexFile = (
  frameworkPath: string,
  frameworkName: string
) => {
  const indexFilePath = path.join(frameworkPath, "index.json");

  if (fs.existsSync(indexFilePath)) {
    const componentsData = JSON.parse(fs.readFileSync(indexFilePath, "utf-8"));

    componentsData.forEach((component: any) => {
      // Only process components with type 'registry:ui'
      if (component.type === "registry:ui") {
        const frameworkRegistryPath = path.join(
          REGISTRY_UI_PATH,
          frameworkName
        );

        // Ensure the directory for the framework exists
        if (!fs.existsSync(frameworkRegistryPath)) {
          fs.mkdirSync(frameworkRegistryPath, { recursive: true });
          // Create the fixed index.json for each subdirectory with its own name
          createFixedIndexJson(frameworkRegistryPath, frameworkName);
        }

        // Generate individual JSON file for each component with file content
        generateComponentJsonFile(frameworkRegistryPath, component);
      }
    });
  }
};

// Helper function to generate registry data dynamically from public/registry
const generateRegistryData = () => {
  const frameworks = fs.readdirSync(REGISTRY_BASE_PATH).filter((entry) => {
    const frameworkPath = path.join(REGISTRY_BASE_PATH, entry);
    return fs.statSync(frameworkPath).isDirectory();
  });

  frameworks.forEach((framework) => {
    const frameworkPath = path.join(REGISTRY_BASE_PATH, framework);

    // Process the framework index and create files only when necessary
    processFrameworkIndexFile(frameworkPath, framework);
  });
};

// Main function to start the registry generation
const createRegistry = () => {
  // Delete the entire 'ui' directory before starting fresh
  deleteRegistry(REGISTRY_UI_PATH);

  // Generate the registry files based on the existing index.json files
  generateRegistryData();

  console.log(
    "\x1b[32m✓\x1b[0m Generated individual component JSON files with file contents from index.json and created index.json with fixed configuration for each subdirectory."
  );
};

// Run the registry creation
createRegistry();
