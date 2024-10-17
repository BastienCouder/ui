import * as fs from "fs";
import * as path from "path";

// Lire le fichier existant
const filePath = path.resolve(__dirname, "icons.ts");
const fileContent = fs.readFileSync(filePath, "utf-8");

// Fonction pour extraire les importations
const extractImports = (content: string): string[] => {
  const importRegex = /import\s*{([^}]+)}\s*from\s*["'][^"']+["'];/g;
  const imports: string[] = [];
  let match;

  while ((match = importRegex.exec(content)) !== null) {
    const icons =
      match && match[1] ? match[1].split(",").map((icon) => icon.trim()) : [];
    imports.push(...icons);
  }

  return imports.sort();
};

// Fonction pour extraire les exportations
const extractExports = (content: string): string[] => {
  const exportRegex = /export\s*{([^}]+)};/g;
  const exports: string[] = [];
  let match;

  while ((match = exportRegex.exec(content)) !== null) {
    const icons =
      match && match[1] ? match[1].split(",").map((icon) => icon.trim()) : [];
    exports.push(...icons);
  }

  return exports.sort();
};

// Extraire les importations et exportations
const imports = extractImports(fileContent);
const exports = extractExports(fileContent);

// Générer le nouveau contenu trié
const sortedContent = `
import {
  ${imports.join(",\n  ")}
} from "lucide-react";
import { Loader } from "react-feather";

export {
  ${exports.join(",\n  ")}
};
`;

// Écrire le nouveau contenu dans le fichier
fs.writeFileSync(filePath, sortedContent.trim());

console.log("Le fichier icons.ts a été trié par ordre alphabétique.");
