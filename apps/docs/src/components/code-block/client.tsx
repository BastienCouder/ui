"use client";

import React, { useState } from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { Check, Copy } from "@/lib/icons";
import { Button, ButtonProps } from "@/registry/ui/react/button";
import { ScrollArea, ScrollAreaProps } from "@/registry/ui/react/scroll-area";
import { tv } from "tailwind-variants";
import { cn } from "@/lib/utils";
import { TabsContent, TabsList, TabsTrigger } from "@/registry/ui/react/tabs";

const codeBlockStyles = tv({
  slots: {
    root: "block rounded-md max-w-full",
    header: "flex items-center justify-between rounded-t-[inherit] pr-2 h-10 mb-2",
    body: "text-[0.8rem] p-4 bg-neutral/10",
    code: "text-[0.8rem]",
  },
});

interface CodeBlockClientProps {
  files: {
    fileName: string;
    code: JSX.Element;
    codeStr: string;
    lang: string;
  }[];
  preview?: JSX.Element;
  previewStr?: string;
  expandable?: boolean;
}

const CodeBlockClient = ({
  files,
  preview,
  previewStr,
  expandable = false,
  ...props
}: CodeBlockClientProps): JSX.Element => {
  const [activeTab, setActiveTab] = useState(files[0]?.fileName || "defaultKey");
  const [isExpanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!isExpanded);
  };

  return (
    <CodeBlockRoot defaultValue={activeTab} onValueChange={setActiveTab} {...props}>
      <CodeBlockHeader>
        <div className="shrink-1 flex h-full w-full flex-1 basis-0 items-end gap-2">
          {files.length > 0 && (
            <TabsList className="inline-flex h-9 items-center justify-center rounded-lg p-1 text-muted-foreground">
              {files
                .slice(0, preview && !isExpanded ? 1 : files.length)
                .map(({ fileName }, index) => (
                  <TabsTrigger
                    key={index}
                    value={fileName}
                    className="relative inline-flex items-center justify-center whitespace-nowrap px-3 py-1 text-sm font-medium ring-offset-bg transition-all"
                  >
                    {fileName}
                  </TabsTrigger>
                ))}
            </TabsList>
          )}
        </div>
        <div className="flex items-center gap-2">
          {(preview || expandable) && (
            <Button size="sm" className="h-7 text-xs" onClick={handleExpand}>
              {isExpanded ? "Collapse" : "Expand"} code
            </Button>
          )}
          <CodeBlockCopyButton
            code={
              (previewStr && !isExpanded
                ? previewStr
                : files.find(({ fileName }) => fileName === activeTab)
                    ?.codeStr) || ""
            }
          />
        </div>
      </CodeBlockHeader>
      <CodeBlockBody className={cn(isExpanded ? "max-h-[1000px]" : "max-h-[500px]")}>
        {preview && !isExpanded ? (
          <TabsContent value={files[0]?.fileName || "defaultKey"} className="!mt-0">
            {preview}
          </TabsContent>
        ) : (
          files.map(({ fileName, code }, index) => (
            <TabsContent key={index} value={fileName} className="!mt-0">
              {code}
            </TabsContent>
          ))
        )}
      </CodeBlockBody>
    </CodeBlockRoot>
  );
};

const CodeBlockRoot = TabsPrimitive.Root;

type CodeBlockHeaderProps = React.HTMLAttributes<HTMLDivElement>;
const CodeBlockHeader = ({ className, ...props }: CodeBlockHeaderProps) => {
  const { header } = codeBlockStyles();
  return <div className={header({ className })} {...props} />;
};

type CodeBlockBodyProps = ScrollAreaProps;
const CodeBlockBody = ({ className, ...props }: CodeBlockBodyProps) => {
  const { body } = codeBlockStyles();
  return (
    <ScrollArea
      variant="transparent"
      scrollbars="both"
      className={body({ className })}
      {...props}
    />
  );
};

interface CodeBlockCopyButtonProps extends ButtonProps {
  code: string;
}
const CodeBlockCopyButton = ({ code, ...props }: CodeBlockCopyButtonProps) => {
 
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };
  return (
    <Button
      size="sm"
      shape="square"
      onClick={handleCopy}
      className="h-7 w-7 [&_svg]:w-3 [&_svg]:h-3"
      {...props}
    >
      {copied ? <Check className="animate-in fade-in" /> : <Copy className="animate-in fade-in" />}
    </Button>
  );
};

export type CodeBlockRootProps = React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>;

export {
  CodeBlockClient,
  CodeBlockRoot,
  CodeBlockHeader,
  CodeBlockBody,
  CodeBlockCopyButton,
  codeBlockStyles,
};
