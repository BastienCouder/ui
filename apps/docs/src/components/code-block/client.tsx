"use client";

import React from "react";
import { Check, Copy } from "@/lib/icons";
import type { Key } from "react-aria-components";
import { tv } from "tailwind-variants";
import {
  Tab,
  Tabs,
  TabList,
  TabPanel,
  type TabsProps,
} from "@/lib/components/core/default/tabs";
import {
  Button,
  ButtonProps,
} from "@/lib/components/core/default/react/buttons/button";
import {
  ScrollArea,
  ScrollAreaProps,
} from "@/lib/components/core/default/react/layout/scroll-area";
import { cn } from "@/lib/utils";

const codeBlockStyles = tv({
  slots: {
    root: "block rounded-md max-w-full",
    header:
      "flex items-center justify-betweenrounded-t-[inherit] pr-2 h-10 mb-2",
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
}: CodeBlockClientProps) => {
  const [activeTab, setActiveTab] = React.useState<Key>(
    files[0]?.fileName || "defaultKey",
  );
  const [isExpanded, setExpanded] = React.useState(false);
  const handleExpand = () => {
    const prevState = isExpanded;
    if (prevState) {
      setActiveTab(files[0]?.fileName || "defaultKey");
    }
    setExpanded(!prevState);
  };
  return (
    <CodeBlockRoot
      selectedKey={activeTab}
      onSelectionChange={setActiveTab}
      {...props}
    >
      <CodeBlockHeader>
        <div className="shrink-1 flex h-full w-full flex-1 basis-0 items-end gap-2">
          {files.length > 0 && (
            <TabList className="">
              {files
                .slice(0, preview && !isExpanded ? 1 : files.length)
                .map(({ fileName }, index) => (
                  <Tab key={index} id={fileName}>
                    {fileName}
                  </Tab>
                ))}
            </TabList>
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
                    ?.codeStr)!
            }
          />
        </div>
      </CodeBlockHeader>
      <CodeBlockBody
        className={cn(isExpanded ? "max-h-[1000px]" : "max-h-[500px]")}
      >
        {preview && !isExpanded ? (
          <TabPanel id={files[0]?.fileName || "defaultKey"} className="!mt-0">
            {preview}
          </TabPanel>
        ) : (
          files.map(({ fileName, code }, index) => (
            <TabPanel key={index} id={fileName} className="!mt-0">
              {code}
            </TabPanel>
          ))
        )}
      </CodeBlockBody>
    </CodeBlockRoot>
  );
};

type CodeBlockRootProps = TabsProps;
const CodeBlockRoot = ({ className, ...props }: CodeBlockRootProps) => {
  const { root } = codeBlockStyles();
  return <Tabs className={root({ className })} {...props} />;
};

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
      variant={"primary"}
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
  const [copied, setCopied] = React.useState(false);
  const handleCopy = () => {
    void navigator.clipboard.writeText(code);
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
      {copied ? (
        <Check className="animate-in fade-in" />
      ) : (
        <Copy className="animate-in fade-in" />
      )}
    </Button>
  );
};

export type {
  CodeBlockClientProps,
  CodeBlockRootProps,
  CodeBlockHeaderProps,
  CodeBlockBodyProps,
  CodeBlockCopyButtonProps,
};

export {
  CodeBlockClient,
  CodeBlockRoot,
  CodeBlockHeader,
  CodeBlockBody,
  CodeBlockCopyButton,
  codeBlockStyles,
};
