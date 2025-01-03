"use client";

import React from "react";
import { Check, Copy } from "@/lib/icons";
import { tv } from "tailwind-variants";
import { Button } from "@/registry/ui/react/button";
import { ScrollArea } from "@/registry/ui/react/scroll-area";

const codeStyles = tv({
  base: "relative rounded-md bg-background border border-secondary",
  variants: {
    variant: {
      classic: "text-xs p-4",
      inline: "px-2 py-0.5",
    },
  },
});

interface CodeClientProps extends React.HTMLAttributes<HTMLDivElement> {
  inline?: boolean;
  code: string;
}
const CodeClient = ({
  className,
  inline = false,
  children,
  code,
}: CodeClientProps): JSX.Element => {
  const [copied, setCopied] = React.useState(false);
  const handleCopy = () => {
    void navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  if (inline) {
    return (
      <span className={codeStyles({ variant: "inline" })}>{children}</span>
    );
  }

  return (
    <div className={className}>
      <ScrollArea scrollbars="both" className="max-h-[600px]">
        <div className={codeStyles({ variant: "classic" })}>
          {children}
          <Button
            variant="quiet"
            shape="square"
            size="sm"
            className="absolute right-2 top-2 [&_svg]:w-3 [&_svg]:h-3"
            onClick={handleCopy}
          >
            {copied ? (
              <Check className="animate-in fade-in" />
            ) : (
              <Copy className="animate-in fade-in" />
            )}
          </Button>
        </div>
      </ScrollArea>
    </div>
  );
};

export { CodeClient };
