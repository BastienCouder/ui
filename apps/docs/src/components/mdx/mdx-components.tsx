import React from "react";
import NavLink from "next/link";
import { InfoIcon, Package } from "lucide-react";
import { type MDXRemote } from "next-mdx-remote/rsc";
import {
  ComponentPreview,
  type ComponentPreviewProps,
} from "@/components/component-preview";
import { ComponentSource } from "@/components/component-source";
import { DocsList, type DocsListProps } from "@/components/docs/docs-list";
import { slugify } from "@/utils/string";
import { cn } from "@/lib/utils";
import { Code } from "../code";
import {
  Tabs,
  TabsTrigger,
  TabsContent,
  TabsList,
} from "@/registry/ui/react/tabs";
import Bash from "../component-bash";
import Callout from "../callout";
import { ComponentCode } from "../component-code";
import SelectPackageManager from "../select-package-manager";
import PackageManager from "../package-manager";

export const Link = ({
  className,
  href,
  ref: _,
  children,
  ...props
}: React.ComponentProps<"a">): JSX.Element => {
  const classes = cn("font-medium underline underline-offset-4", className);

  if (href?.startsWith("/")) {
    return (
      <NavLink {...props} href={href} className={classes}>
        {children}
      </NavLink>
    );
  }

  return (
    <a
      rel="noopener noreferrer"
      target="_blank"
      {...props}
      href={href}
      className={classes}
    >
      {children}
    </a>
  );
};

function createHeading(level: number, className?: string) {
  const Component = ({
    children,
    ...props
  }: React.HTMLAttributes<HTMLHeadingElement>) => {
    const slug = slugify(children as string);
    return React.createElement(
      `h${level}`,
      { id: slug, className, ...props },
      [
        React.createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
        }),
      ],
      children
    );
  };

  Component.displayName = `Heading${level}`;
  return Component;
}

export const components: React.ComponentPropsWithoutRef<
  typeof MDXRemote
>["components"] = {
  h1: createHeading(1, "font-heading mt-2 scroll-m-20 text-4xl font-bold"),
  h2: createHeading(
    2,
    "text-primary font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0"
  ),
  h3: createHeading(
    3,
    "text-primary  font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
  ),
  h4: createHeading(
    4,
    "text-primary font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight"
  ),
  h5: createHeading(
    5,
    "text-primary mt-8 scroll-m-20 text-lg font-semibold tracking-tight"
  ),
  h6: createHeading(
    6,
    "text-primary mt-8 scroll-m-20 text-base font-semibold tracking-tight"
  ),
  a: Link,
  p: ({ className, ...props }) => (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-4", className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }) => (
    <ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
  ),
  ol: ({ className, ...props }) => (
    <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
  ),
  li: ({ className, ...props }) => (
    <li className={cn("mt-2", className)} {...props} />
  ),
  blockquote: ({ className, ...props }) => (
    <blockquote
      className={cn(
        "mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground",
        className
      )}
      {...props}
    />
  ),
  img: ({ className, alt, ...props }) => (
    <img
      className={cn("mx-auto max-w-md rounded-md border", className)}
      alt={alt}
      {...props}
    />
  ),
  hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,
  pre: ({ className, ...props }) => (
    <Code
      className={cn("w-full [&:not(:first-child)]:mt-4", className)}
      {...props}
    />
  ),
  code: (props) => <Code inline lang="typescript" {...props} />,
  Step: ({ className, ...props }: React.ComponentProps<"h3">) => (
    <h3
      className={cn(
        "font-heading mt-8 scroll-m-20 text-base font-semibold tracking-tight before:text-secondary",
        className
      )}
      {...props}
    />
  ),
  Steps: ({ ...props }: React.ComponentProps<"div">) => (
    <div
      className="[&>h3]:step mb-12 ml-4 border-l pl-8 [counter-reset:step]"
      {...props}
    />
  ),
  table: ({ className, ...props }) => (
    <div className="my-6 w-full overflow-y-auto rounded-md">
      <table className={cn("w-full", className)} {...props} />
    </div>
  ),
  thead: ({ className, ...props }) => (
    <thead className={cn("bg-neutral/20", className)} {...props} />
  ),
  tr: ({ className, ...props }) => (
    <tr className={cn("m-0 border-t p-0 text-sm", className)} {...props} />
  ),
  th: ({ className, ...props }) => (
    <th
      className={cn(
        "border px-2 py-2 text-left font-bold sm:px-4 [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  td: ({ className, children, ...props }) => (
    <td
      className={cn(
        "border px-2 py-2 text-left sm:px-4 [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    >
      <div className="flex flex-wrap items-center gap-2">{children}</div>
    </td>
  ),
  ComponentSource: ({ name, ...rest }: { name: string }) => (
    <ComponentSource
      name={name}
      className="w-full [&:not(:first-child)]:mt-4"
      {...rest}
    />
  ),
  ComponentPreview: (props: ComponentPreviewProps) => (
    <ComponentPreview
      containerClassName="[&:not(:first-child)]:mt-4"
      {...props}
    />
  ),
  ComponentCode: (props) => (
    <ComponentCode className="w-full [&:not(:first-child)]:mt-4" {...props} />
  ),
  DocsList: (props: DocsListProps) => (
    <DocsList
      {...props}
      className="mt-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
    />
  ),
  ColorBadge: ({
    className,
    children,
    ...props
  }: React.ComponentProps<"div">) => (
    <div
      className="inline-flex items-center space-x-1.5 rounded border bg-muted px-2 py-0.5 font-mono text-sm"
      {...props}
    >
      <div className={cn("h-3.5 w-3.5 rounded-full border", className)} />
      <span>{children}</span>
      <InfoIcon size={15} />
    </div>
  ),
  Link: ({ className, ...props }: React.ComponentProps<typeof Link>) => (
    <Link
      className={cn("font-medium underline underline-offset-4", className)}
      {...props}
    />
  ),
  LinkedCard: ({ className, ...props }: React.ComponentProps<typeof Link>) => (
    <Link
      className={cn(
        "bg-card text-card-foreground hover:bg-muted/50 flex w-full flex-col items-center rounded-xl border p-6 shadow transition-colors sm:p-10",
        className
      )}
      {...props}
    />
  ),
  Callout: ({
    type: _type = "info",
    className,
    ...props
  }: React.ComponentPropsWithoutRef<typeof Callout>) => (
    <Callout type={_type} className={cn("w-full", className)} {...props} />
  ),
  Bash: ({
    className,
    ...props
  }: React.ComponentPropsWithoutRef<typeof Bash>) => (
    <Bash className={cn("flex w-full", className)} {...props}>
      {props.children}
    </Bash>
  ),
  BashCommand: ({ ...props }: React.ComponentPropsWithoutRef<typeof Bash>) => (
    <span className={"text-sm font-bold text-foreground"} {...props} />
  ),
  Tabs: ({
    className,
    ...props
  }: React.ComponentPropsWithoutRef<typeof Tabs>) => (
    <Tabs className={cn("w-full mt-4", className)} {...props} />
  ),
  SelectPackageManager: () => <SelectPackageManager />,
  PackageManager: () => <PackageManager />,
  TabsList,
  TabsTrigger: ({ className, ...props }) => (
    <TabsTrigger className={cn("text-base", className)} {...props} />
  ),
  TabsContent: ({ className, ...props }) => (
    <TabsContent className={cn("mt-8", className)} {...props} />
  ),
};
