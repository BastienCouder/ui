import fs from "fs";
import path from "path";
import { getDocTypeFromSlug } from "@/utils/docs";
import type {
  Doc,
  DocCategory,
  DocFrontmatter,
  DocMetadata,
  DocType,
} from "@/types/docs";
import { getTableOfContents } from "../utils/toc";
import { getAllMdxFiles, parseMDXFile } from "./mdx";

const getBreadcrumbs = (slug: string[]): { label: string; href: string }[] => {
  const result = slug.map((slugPart, index) => {
    const partPath = path.join(
      process.cwd(),
      "content",
      ...slug.slice(0, index + 1),
    );

    const resolvedPartPath = path.resolve(process.cwd(), partPath);

    // Ensure the resolved path is within the content directory before checking if it exists
    if (
      resolvedPartPath.startsWith(path.join(process.cwd(), "content")) &&
      fs.existsSync(resolvedPartPath) &&
      fs.lstatSync(resolvedPartPath).isDirectory()
    ) {
      // Get title from index.mdx
      const indexPath = path.join(resolvedPartPath, "index.mdx");

      if (fs.existsSync(indexPath)) {
        try {
          const fileRawContent = fs.readFileSync(indexPath, "utf-8");
          const { frontmatter } = parseMDXFile<DocFrontmatter>(fileRawContent);
          return {
            label: frontmatter.title,
            href: `/${slug.slice(0, index + 1).join("/")}`,
          };
        } catch (error) {
          console.error(`Error reading file at ${indexPath}:`, error);
          return null;
        }
      }
    } else {
      // Get title from last {slug}.mdx
      const filePath = path.join(
        process.cwd(),
        "content",
        ...slug.slice(0, index),
        `${slugPart}.mdx`,
      );

      const sanitizedPath = path.resolve(process.cwd(), filePath);

      // Ensure the sanitized path is within the content directory before checking if it exists
      if (
        sanitizedPath.startsWith(path.join(process.cwd(), "content")) &&
        fs.existsSync(sanitizedPath)
      ) {
        try {
          const fileRawContent = fs.readFileSync(sanitizedPath, "utf-8");
          const { frontmatter } = parseMDXFile<DocFrontmatter>(fileRawContent);
          return {
            label: frontmatter.title,
            href: `/${slug.slice(0, index + 1).join("/")}`,
          };
        } catch (error) {
          console.error(`Error reading file at ${sanitizedPath}:`, error);
          return null;
        }
      }
    }
    return null;
  });

  return result.filter(
    (elem): elem is { label: string; href: string } => !!elem,
  );
};

type FrameworkColor = "react" | "vue" | "angular";

const findParentColor = (slug: string[]): FrameworkColor | undefined => {
  let currentPath = path.join(process.cwd(), "content", ...slug);

  while (slug.length > 0) {
    const indexPath = path.join(currentPath, "index.mdx");
    if (fs.existsSync(indexPath)) {
      const fileRawContent = fs.readFileSync(indexPath, "utf-8");
      const { frontmatter } = parseMDXFile<DocFrontmatter>(fileRawContent);
      if (frontmatter.color) {
        return frontmatter.color;
      }
    }
    slug.pop();
    currentPath = path.join(process.cwd(), "content", ...slug);
  }

  return undefined;
};

export const getDocFromSlug = async (
  slug: string[],
  parentColor?: FrameworkColor,
): Promise<Doc | null> => {
  const breadcrumbs = getBreadcrumbs(slug);
  const type = slug[0] as DocType;
  const directoryPath = path.join(process.cwd(), "content", ...slug);
  const resolvedDirectoryPath = path.resolve(process.cwd(), directoryPath);

  if (
    resolvedDirectoryPath.startsWith(path.join(process.cwd(), "content")) &&
    fs.existsSync(resolvedDirectoryPath) &&
    fs.lstatSync(resolvedDirectoryPath).isDirectory()
  ) {
    const indexPath = path.join(resolvedDirectoryPath, "index.mdx");
    if (fs.existsSync(indexPath)) {
      const fileRawContent = fs.readFileSync(indexPath, "utf-8");
      const { content, frontmatter } =
        parseMDXFile<DocFrontmatter>(fileRawContent);

      // Trouver la couleur depuis les parents si elle n'est pas définie dans le frontmatter
      const color =
        (frontmatter.color as FrameworkColor) ||
        parentColor ||
        findParentColor(slug);

      const subfolders = fs
        .readdirSync(directoryPath)
        .filter((item) =>
          fs.lstatSync(path.join(directoryPath, item)).isDirectory(),
        );
      const categories = subfolders
        .map((subfolder) => {
          const categoryIndexPath = path.join(
            directoryPath,
            subfolder,
            "index.mdx",
          );
          if (fs.existsSync(categoryIndexPath)) {
            const fileRawContent = fs.readFileSync(categoryIndexPath, "utf-8");
            const { frontmatter } =
              parseMDXFile<DocFrontmatter>(fileRawContent);
            return {
              label: frontmatter.title,
              href: `/${[...slug, subfolder].join("/")}`,
            };
          }
        })
        .filter((item) => item) as DocCategory[];
      const toc = await getTableOfContents(content);

      return {
        metadata: {
          title: frontmatter.title,
          description: frontmatter.description,
          icon: frontmatter.icon,
          href: "",
          type,
          breadcrumbs,
          links: frontmatter.links,
          color,
        },
        rawContent: content,
        categories,
        toc,
      };
    }
  }

  const filePath = path.join(
    process.cwd(),
    "content",
    ...slug.slice(0, -1),
    `${slug[slug.length - 1]}.mdx`,
  );

  const safeFilePath = path.resolve(process.cwd(), filePath);

  // Ensure the path is within the content directory before checking if it exists
  if (
    safeFilePath.startsWith(path.join(process.cwd(), "content")) &&
    fs.existsSync(safeFilePath)
  ) {
    const fileRawContent = fs.readFileSync(safeFilePath, "utf-8");
    const { content, frontmatter } =
      parseMDXFile<DocFrontmatter>(fileRawContent);

    const color =
      (frontmatter.color as FrameworkColor) ||
      parentColor ||
      findParentColor(slug.slice(0, -1));

    const toc = await getTableOfContents(content);
    return {
      metadata: {
        title: frontmatter.title,
        description: frontmatter.description,
        icon: frontmatter.icon,
        href: "",
        type,
        breadcrumbs,
        links: frontmatter.links,
        color,
      },
      rawContent: content,
      toc,
    };
  }

  return null;
};

// getDocs() returns all docs from content folder
// getDocs("hooks") returns all docs from content/hooks folder
// getDocs("components/core") returns all docs from content/components/core folder
export const getDocs = (slug?: string, includeIndex = false): DocMetadata[] => {
  const directoryPath = path.join(
    process.cwd(),
    "content",
    ...(slug ? slug.split("/") : []),
  );

  return getAllMdxFiles(directoryPath, directoryPath, [], includeIndex).map(
    ({ fullPath, relativePath }) => {
      const safeFullPath = path.resolve(directoryPath, fullPath);

      // Ensure the path is within the content directory
      if (!safeFullPath.startsWith(process.cwd())) {
        throw new Error("Invalid file path");
      }

      const itemRawContent = fs.readFileSync(safeFullPath, "utf-8");
      const { frontmatter } = parseMDXFile<DocFrontmatter>(itemRawContent);
      return {
        ...frontmatter,
        type: getDocTypeFromSlug(slug),
        breadcrumbs: [],
        href: `${slug ? `/${slug}` : ""}/${relativePath.join("/").replace("/index", "")}`,
      };
    },
  );
};
