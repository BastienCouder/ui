import { codeToHtml } from "shiki";
import type { BundledLanguage } from "shiki";
import { CodeBlockClient, type CodeBlockRootProps } from "./client";

interface CodeBlockProps extends CodeBlockRootProps {
  files: {
    fileName: string;
    code: string;
    lang: BundledLanguage;
  }[];
  preview?: string;
  expandable?: boolean;
  language?: string;
  className?: string;
  example?: boolean;
  title?: string;
}

const CodeBlock = async ({
  files: _files,
  preview: _preview,
  ...props
}: CodeBlockProps): Promise<JSX.Element> => {
  let preview = undefined;
  if (_preview) {
    const html = await codeToHtml(_preview, {
      lang: props.language || "tsx",
      themes: {
        light: "aurora-x",
        dark: "aurora-x",
      },
    });
    preview = (
      <div
        className="[&_pre]:outline-none [&_span]:!bg-transparent"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  const files = await Promise.all(
    _files.map(async ({ fileName, code, lang }) => {
      const html = await codeToHtml(code, {
        lang: props.language || lang,
        themes: {
          light: "aurora-x",
          dark: "aurora-x",
        },
      });

      return {
        fileName,
        codeStr: code,
        code: (
          <div
            className="[&_pre]:outline-none [&_span]:!bg-transparent]"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        ),
        lang,
      };
    }),
  );

  return (
    <CodeBlockClient
      files={files}
      preview={preview}
      previewStr={_preview}
      {...props}
    />
  );
};

export { CodeBlock };
