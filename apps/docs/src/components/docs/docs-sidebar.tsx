"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "@/lib/icons";
import { cn } from "@/lib/utils";
import type { Category as TCategory, DocsNav } from "@/types/docs-nav";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/registry/ui/react/collapsible";

export interface DocsSidebarProps {
  items: DocsNav;
}

export function DocsSidebar({ items }: DocsSidebarProps): JSX.Element | null {
  const pathname = usePathname();

  return items.length > 0 ? (
    <div className="w-full space-y-4 pb-10 pr-4 pt-4 text-sm">
      {items.map((item, index) => (
        <Category
          key={index}
          title={item.title}
          items={item.items}
          slug={item.slug}
          pathname={pathname}
        />
      ))}
    </div>
  ) : null;
}

interface CategoryProps extends TCategory {
  pathname: string;
}

const Category = ({ title, slug, items, pathname }: CategoryProps) => {
  const [open, setOpen] = React.useState(pathname.startsWith(`/${slug}`));

  React.useEffect(() => {
    setOpen(pathname.startsWith(`/${slug}`));
  }, [pathname, slug]);

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <CollapsibleTrigger className="flex items-center space-x-2 [&[data-state=open]>svg]:rotate-90">
        <ChevronRight className="h-4 w-4 shrink-0 transition-transform duration-200 text-primary" />
        <h4 className="rounded-md text-sm md:text-base font-semibold">
          {title}
        </h4>
      </CollapsibleTrigger>
      <CollapsibleContent asChild className="space-y-2 pt-2">
        <ul>
          {items.map((item, index) => {
            const [subOpen, setSubOpen] = React.useState(false);

            return (
              <li key={index}>
                {title === "Components" ? (
                  <>
                    {item.items && item.items.length > 0 && (
                      <Collapsible open={subOpen} onOpenChange={setSubOpen}>
                        {"href" in item && item.href && (
                          <div
                            className={cn(
                              "border-muted hover:text-foreground group ml-2 flex items-center gap-2 border-l pl-4 text-foreground transition-colors",
                              {
                                "border-border font-medium text-foreground":
                                  pathname === item.href,
                              },
                            )}
                          >
                            <CollapsibleTrigger className="flex items-center space-x-2 [&[data-state=open]>svg]:rotate-90">
                              <ChevronRight className="h-4 w-4 shrink-0 transition-transform duration-200 text-primary" />
                              <span className="block duration-100 group-hover:translate-x-0.5">
                                {item.title} {item.icon}
                              </span>
                            </CollapsibleTrigger>
                          </div>
                        )}
                        <CollapsibleContent
                          asChild
                          className="ml-8 mt-2 space-y-2"
                        >
                          <ul className="list-none">
                            {item.items.map((subItem, subIndex) => {
                              return (
                                <li key={subIndex}>
                                  {subItem.disabled ? (
                                    <>
                                      <span
                                        className={cn(
                                          "border-muted block cursor-not-allowed border-l py-1 pl-4 text-disabled-foreground",
                                        )}
                                      >
                                        {subItem.title}
                                        {subItem.label && (
                                          <span className="ml-2 rounded-md bg-disabled px-1.5 py-0.5 text-sm md:text-base leading-none text-disabled-foreground">
                                            {subItem.label}
                                          </span>
                                        )}
                                      </span>
                                    </>
                                  ) : (
                                    <>
                                      <Link
                                        href={subItem.href}
                                        className={cn(
                                          "border-muted text-foreground group block border-l pl-4 transition-colors",
                                          {
                                            "border-muted font-medium text-primary":
                                              pathname === subItem.href,
                                          },
                                        )}
                                      >
                                        <span className="block transition-transform duration-100 group-hover:translate-x-0.5 ">
                                          {subItem.title}
                                          {subItem.label && (
                                            <span className="ml-2 rounded-md border bg-muted px-1.5 py-0.5 text-sm md:text-base leading-none text-foreground-muted">
                                              {subItem.label}
                                            </span>
                                          )}
                                        </span>
                                      </Link>
                                    </>
                                  )}
                                </li>
                              );
                            })}
                          </ul>
                        </CollapsibleContent>
                      </Collapsible>
                    )}
                  </>
                ) : (
                  <>
                    {"href" in item && (
                      <Link
                        href={item.href}
                        className={cn(
                          "border-muted hover:text-foreground group ml-2 block border-l pl-4 text-foreground-muted transition-colors",
                          {
                            "border-border font-medium text-foreground":
                              pathname === item.href,
                          },
                        )}
                      >
                        <span
                          className={cn(
                            "block duration-100 group-hover:translate-x-0.5",
                            { "text-primary": pathname === item.href },
                          )}
                        >
                          {item.title}
                        </span>
                      </Link>
                    )}
                  </>
                )}
              </li>
            );
          })}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  );
};
