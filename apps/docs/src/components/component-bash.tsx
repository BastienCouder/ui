"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/ui/react/button";
import { Check, Copy } from "lucide-react";

type BashProps = {
  children: string;
  className?: string;
};

const Bash: React.FC<BashProps> = ({ children, className }) => {
  const [copied, setCopied] = React.useState(false);
  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <pre className={cn("relative bg-bg border p-4 rounded-lg", className)}>
      <Button
            variant="primary"
            shape="square"
            size="sm"
            className="absolute right-4 top-1/2 -translate-y-1/2 [&_svg]:w-3 [&_svg]:h-3"
            onClick={handleCopy}
          >
            {copied ? (
              <Check className="animate-in fade-in" />
            ) : (
              <Copy className="animate-in fade-in" />
            )}
          </Button>
      <div className="text-sm text-fg/60">
        {children}
      </div>
    </pre>
  );
};

export default Bash;
