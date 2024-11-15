"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/ui/react/button";
import { Check, Copy } from "lucide-react";
import { usePackageManager } from "@/context/package-manager";

type BashProps = {
  children: string;
  className?: string;
};

const Bash: React.FC<BashProps> = ({ children, className }) => {
  const [copied, setCopied] = React.useState(false);
const {packageManager } = usePackageManager();

  const handleCopy = async () => {
    try {
      const textToCopy = typeof children === "string" ? children : extractText(children);

        await navigator.clipboard.writeText(packageManager + ' ' + textToCopy);
    
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1000);
    } catch (error) {
      console.error("Échec de la copie dans le presse-papiers", error);
    }
  };

  return (
    <pre className={cn("relative bg-background border p-4 rounded-lg", className)}>
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
      <div className="text-sm text-foreground/60 flex items-center">{children}</div>
    </pre>
  );
};

// Fonction utilitaire pour extraire le texte
const extractText = (node: string | React.ReactNode): string => {
  if (typeof node === "string") return node;
  if (Array.isArray(node)) return node.map(extractText).join("");
  if (React.isValidElement(node) && node.props && node.props.children)
    return extractText(node.props.children);
  return "";
};


export default Bash;
