"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { File, Search } from "@/lib/icons";
import {
  Button,
  type ButtonProps,
} from "@/registry/ui/react/button";
import { cn } from "@/lib/utils";
import { docsConfig } from "@/config/docs-config";

export const SearchDocs = (props: ButtonProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return;
        }

        e.preventDefault();
        setIsOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback((command: () => unknown) => {
    setIsOpen(false);
    command();
  }, []);

  return <></>;
};
