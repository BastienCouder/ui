"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
  CircleIcon,
  FileIcon,
  LaptopIcon,
  MoonIcon,
  SunIcon,
  ChevronRightIcon,
  ChevronDownIcon,
} from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";
import { Button } from "@/registry/ui/react/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/registry/ui/react/command";
import { docsConfig } from "@/config/docs-config";
import type { Item, SubCategory } from "@/types/docs-nav";

// Type guard to check if the object is of type Item
function isItem(obj: Item | SubCategory): obj is Item {
  return (obj as Item).href !== undefined;
}

export function CommandMenu({ ...props }) {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const { setTheme } = useTheme();

  // State to manage which subcategory is open
  const [openSubCategory, setOpenSubCategory] = React.useState<string | null>(
    null,
  );

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
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  // Function to toggle subcategory (like Angular or React) submenu open/close state
  const toggleSubCategory = (subCategoryTitle: string) => {
    setOpenSubCategory((prev) =>
      prev === subCategoryTitle ? null : subCategoryTitle,
    );
  };

  return (
    <>
      <Button
        variant="outline"
        className={cn(
          "bg-bg text-fg relative h-8 w-full justify-start rounded-lg text-sm font-normal shadow-none",
        )}
        onClick={() => setOpen(true)}
        {...props}
      >
        <span className="hidden lg:inline-flex -ml-1">
          Search documentation...
        </span>
        <span className="inline-flex lg:hidden">Search...</span>
        <kbd className="bg-mneutral pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          {/* Top-Level: Components */}
          {docsConfig.nav.map((group) => (
            <CommandGroup key={group.title} heading={group.title}>
              {group.items.map((item) => {
                // Check if the item has sub-items
                const hasSubItems = item.items && item.items.length > 0;

                return (
                  <React.Fragment key={item.title}>
                    <CommandItem
                      onSelect={() => {
                        if (hasSubItems) {
                          toggleSubCategory(item.title);
                        } else {
                          runCommand(() => router.push((item as Item).href));
                        }
                      }}
                      // Prevent closing the dialog on category click if there are sub-items
                      onMouseDown={(e) => hasSubItems && e.preventDefault()}
                    >
                      {/* Only show Chevron icon if there are sub-items */}
                      {hasSubItems &&
                        (openSubCategory === item.title ? (
                          <ChevronDownIcon className="mr-2 w-3 h-3" />
                        ) : (
                          <ChevronRightIcon className="mr-2 w-3 h-3" />
                        ))}
                      {item.title}
                    </CommandItem>

                    {/* Submenu for Angular/React/Vue */}
                    {hasSubItems &&
                      openSubCategory === item.title &&
                      item.items?.map((subItem) => (
                        <CommandItem
                          key={subItem.href}
                          className="ml-4"
                          value={subItem.title}
                          onSelect={() => {
                            // Only close the command and redirect on subitem selection
                            runCommand(() => router.push(subItem.href));
                          }}
                        >
                          <CircleIcon className="mr-2 w-3 h-3" />
                          {subItem.title}
                        </CommandItem>
                      ))}
                  </React.Fragment>
                );
              })}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
}
