import React from "react";
import { CodeBlock } from "@/components/code-block";
import { cn } from "@/lib/utils";
import { previews } from "@/autogenerated/previews";
import { ScrollArea } from "@/lib/components/core/default/react/layout/scroll-area";

type PreviewsKeys = keyof typeof previews;

export interface ComponentPreviewProps {
  name: PreviewsKeys;
  className?: string;
  containerClassName?: string;
  aspect?: "default" | "page";
  defaultExpanded?: boolean;
  preview?: string;
  expandable?: boolean;
  language?: string;
}

export const ComponentPreview = ({
  name,
  className,
  containerClassName,
  aspect = "default",
  preview,
  expandable,
  language,
}: ComponentPreviewProps) => {
  // make it server component
  const component = React.useMemo(() => {
    const Component = previews[name]?.component;

    if (!Component) {
      return <p className="text-sm text-fg-muted">Component not found.</p>;
    }

    return <Component />;
  }, [name]);

  const code = React.useMemo(() => {
    const allCodeFiles = previews[name]?.code ?? [];

    if (allCodeFiles.length === 0) {
      return [];
    }

    return allCodeFiles.map((file) => ({
      ...file,
      code: file.code.replace("export default function", "function"),
    }));
  }, [name]);

  return (
    <div
      className={cn(
        "mt-2 overflow-hidden rounded-md space-y-4",
        containerClassName,
      )}
    >
      <div className="relative">
        <ScrollArea
          className={cn("flex items-center justify-center", {
            "max-h-[800px]": aspect === "default",
          })}
        >
          <div className="flex min-h-40 items-center justify-center px-4 pt-4 pb-2">
            <div
              className={cn(
                "flex w-full items-center justify-center",
                className,
              )}
            >
              {component}
            </div>
          </div>
        </ScrollArea>
      </div>
      <CodeBlock
        files={code.map((file) => ({
          fileName: file.title,
          code: file.code,
          lang: "tsx",
        }))}
        preview={preview}
        className={"w-full rounded-t-none border-x-0 border-b-0"}
        expandable={expandable}
        language={language}
      />
    </div>
  );
};