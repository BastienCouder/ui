"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useScrolled } from "@/hooks/use-scrolled";
import { cn } from "@/lib/utils";
import { focusRing } from "@/lib/utils/styles";
import { siteConfig } from "@/config";
import { Sheet, SheetContent, SheetTrigger } from "@/registry/ui/react/sheet";
import { DocsSidebar } from "./docs/docs-sidebar";
import { docsConfig } from "@/config/docs-config";
import { MenuIcon } from "lucide-react";
import { ScrollArea } from "@/registry/ui/react/scroll-area";

const config = siteConfig.header;

export const Header: React.FC = () => {
  const { scrolled } = useScrolled({ initial: false });

  return (
    <header
      className={cn(
        "sticky top-0 z-50 flex h-14 rounded-md md:h-16",
        scrolled && "pointer-events-none",
      )}
    >
      <div className="container flex h-full max-w-screen-2xl items-center">
        {/* Desktop Nav */}
        <div className="hidden w-full items-center justify-between md:flex">
          <div className="w-[130px]">
            {/* <Link
              href="/"
              className={cn(
                focusRing(),
                "flex items-center space-x-2 rounded opacity-100 transition-[opacity,transform] duration-300 ease-out",
                scrolled && "pointer-events-none -translate-x-2 opacity-0",
              )}
              aria-hidden={scrolled}
            >
              {/* <Avatar
                src={siteConfig.global.logo}
                alt={siteConfig.global.name}
                loading="lazy"
                width={24}
                height={24}
                className="size-6 rounded-sm"
              /> 
              <div className="mt-1 font-josephin font-bold leading-normal tracking-tighter">
                {siteConfig.global.name}
              </div>
            </Link> */}
          </div>
          <div
            className={cn(
              "relative flex items-center gap-6 overflow-hidden rounded-md bg-transparent px-4 py-1 transition-[padding,background-color] duration-300 ease-out",
              scrolled &&
              "pointer-events-auto bg-background-muted shadow-md bg-neutral/70",
            )}
          >
            <Link
              href="/"
              className={cn(
                focusRing(),
                "pointer-events-none absolute -translate-x-14 rounded opacity-0 transition-[opacity,transform] duration-300 ease-out",
                scrolled && "-translate-x-10 opacity-100",
              )}
              aria-hidden={!scrolled}
              tabIndex={scrolled ? undefined : -1}
            >
              {/*}
              <Image
                src={siteConfig.global.logo}
                alt={siteConfig.global.name}
                width={20}
                height={20}
              />*/}
            </Link>
            <Nav items={config.nav.links} />
          </div>
          <div
            className={cn(
              "flex w-[130px] items-center justify-end space-x-2 opacity-100 transition-[opacity,transform] duration-300 ease-out",
              scrolled && "pointer-events-none translate-x-2 opacity-0",
            )}
            aria-hidden={scrolled}
            tabIndex={scrolled ? -1 : undefined}
          >
            {/* <Button
              href={siteConfig.links.github}
              target="_blank"
              size="sm"
              shape="square"
              variant="quiet"
              aria-label="github"
            >
              <GitHubIcon />
            </Button> */}
            {/*  <ThemeToggle />*/}
          </div>
        </div>
        {/* Mobile nav */}
        <div className="flex w-full items-center gap-4 md:hidden">
          {/* <Link
            href="/"
            className={cn(
              focusRing(),
              "flex w-full items-center space-x-2 rounded transition-opacity hover:opacity-80",
            )}
          >
            {/*}
            <Image
              src={siteConfig.global.logo}
              alt={siteConfig.global.name}
              loading="lazy"
              width={24}
              height={24}
            />*
            <div className="mt-1 font-josephin font-bold leading-normal tracking-tighter">
              {siteConfig.global.name}
            </div>
          </Link> */}
          <div className="block md:hidden py-4 absolute right-4">
            <Sheet>
              <SheetTrigger>
                <MenuIcon />
              </SheetTrigger>
              <SheetContent side="left" className="p-4">
                <ScrollArea>
                  <div>
                          <Link href={"/"}>
                            <span className="block duration-100 group-hover:translate-x-0.5">
                              Home
                            </span>
                        </Link>
                  </div>
                  <DocsSidebar items={docsConfig.nav} />
                </ScrollArea>
              </SheetContent>
            </Sheet>
          </div>
          {/* <SearchDocs className="flex-1" size="sm">
            <span className="mr-4 flex-1 text-left">Search...</span>
          </SearchDocs>*/}
        </div>
      </div>
    </header>
  );
};

interface NavItem {
  label: string;
  href?: string;
}

interface NavProps {
  items: NavItem[];
  direction?: "col" | "row";
  onNavItemClick?: () => void;
}

const Nav = (props: NavProps) => {
  const { items, direction = "row", onNavItemClick } = props;
  const pathname = usePathname();
  return (
    <>
      <nav
        className={cn("flex items-center gap-0 sm:gap-2", {
          "flex-col gap-2": direction === "col",
        })}
      >
        {items.map(
          (item, index) =>
            item.href && (
              <Link
                key={index}
                className={cn(
                  focusRing(),
                  "flex items-center justify-center gap-2 rounded px-4 py-1 text-sm font-medium text-foreground/60 transition-colors hover:text-foreground",
                  pathname.startsWith(item.href) &&
                  item.href !== "/" &&
                  "bg-background-inverse/10 text-foreground",
                  direction === "col" && "text-md w-full py-2",
                )}
                href={item.href}
                onClick={onNavItemClick}
              >
                {item.href === "/" && (
                  <Image
                    src={siteConfig.global.logo}
                    alt={siteConfig.global.name}
                    loading="lazy"
                    width={24}
                    height={24}
                  />
                )}
                <span>{item.label}</span>
              </Link>
            ),
        )}
      </nav>
    </>
  );
};
