"use client";

import React from "react";
import { tv } from "tailwind-variants";
import { cn } from "@/lib/utils";

const tocStyles = tv({
  variants: {
    variant: {
      neutral: "text-fg hover:text-primary-hover",
      active: "text-primary-active font-bold",
    },
    indent: {
      true: "pl-4",
      false: "",
    },
  },
  defaultVariants: {
    variant: "neutral",
  },
});

interface TableOfContentsProps extends React.ComponentPropsWithoutRef<"nav"> {
  className?: string;
}

const TableOfContents = React.forwardRef<HTMLElement, TableOfContentsProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <nav ref={ref} aria-label="table of contents" className={className} {...props}>
        <ul className={cn('m-0 list-none', 'pl-4', className)}>
          {children}
        </ul>
      </nav >
    );
  },
);
TableOfContents.displayName = " TableOfContents";

interface TableOfContentProps extends React.ComponentPropsWithoutRef<"li"> {
  isActive?: boolean;
  href?: string;
  indent?: boolean;
}

const TableOfContent = React.forwardRef<HTMLLIElement, TableOfContentProps>(
  ({ className, isActive, indent = false, children, href, ...props }, ref) => {
    const itemClasses = tocStyles({ variant: isActive ? "active" : "neutral", indent });

    return (
      <li ref={ref} className={cn('mt-0 pt-2', indent && 'ml-4', itemClasses, className)} {...props}>
        <a
          href={href}
          className={cn(
            'text-fg hover:text-primary text-sm font-medium transition-colors',
            isActive ? 'text-fg font-medium' : 'text-muted-fg',
            className,
          )}
        >
          {children}
        </a>
      </li>
    );
  },
);
TableOfContent.displayName = " TableOfContent";


interface TableOfContentsListProps
  extends React.ComponentPropsWithoutRef<'ul'> {
  indent?: boolean
}

const TableOfContentsList = React.forwardRef<
  React.ElementRef<'ul'>,
  TableOfContentsListProps
>(({ className, indent, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn('m-0 list-none', indent && 'pl-4', className)}
    {...props}
  />
))
TableOfContentsList.displayName = 'TableOfContentsList'

interface TableOfContentsTitleProps
  extends React.ComponentPropsWithoutRef<'li'> { }

const TableOfContentsTitle = React.forwardRef<
  React.ElementRef<'li'>,
  TableOfContentsTitleProps
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn('mb-2 text-sm font-medium', className)}
    {...props}
  />
))
TableOfContentsTitle.displayName = 'TableOfContentsTitle'

interface TableOfContentsItemProps
  extends React.ComponentPropsWithoutRef<'li'> {
  indent?: boolean
}

const TableOfContentsItem = React.forwardRef<
  React.ElementRef<'li'>,
  TableOfContentsItemProps
>(({ className, indent, ...props }, ref) => (
  <li
    ref={ref}
    className={cn('mt-0 pt-2', indent && 'ml-4', className)}
    {...props}
  />
))
TableOfContentsItem.displayName = 'TableOfContentsItem'

interface TableOfContentsLinkProps extends React.ComponentPropsWithoutRef<'a'> {
  isActive?: boolean
}

const TableOfContentsLink = React.forwardRef<
  React.ElementRef<'a'>,
  TableOfContentsLinkProps
>(({ className, isActive, ...props }, ref) => (
  <a
    ref={ref}
    className={cn(
      'text-foreground hover:text-primary text-sm font-medium transition-colors',
      isActive ? 'text-foreground font-medium' : 'text-muted-foreground',
      className,
    )}
    {...props}
  />
))
TableOfContentsLink.displayName = 'TableOfContentsLink'

export {
  TableOfContents,
  TableOfContent,
  TableOfContentsList,
  TableOfContentsTitle,
  TableOfContentsItem,
  TableOfContentsLink,
}
