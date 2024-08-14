"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { tv, VariantProps } from "tailwind-variants";

const cardStyles = tv({
  slots: {
    root: "rounded-lg border bg-card text-card-fg shadow-sm",
    title: "text-2xl font-semibold leading-none tracking-tight",
    header: "flex flex-col space-y-1.5 p-6",
    content: "p-6 pt-0",
    description: "text-sm text-muted-foreground",
    footer: "flex items-center p-6 pt-0",
  },
  base: "inline-flex gap-2 cursor-pointer items-center justify-center whitespace-nowrap rounded-md leading-normal text-sm shrink-0 font-medium ring-offset-background transition-colors disabled:cursor-default disabled:bg-disabled disabled:text-disabled-fg",
  variants: {
    variant: {
      default:
        "bg-neutral hover:bg-neutral-hover active:bg-neutral-active text-neutral-fg",
      outline:
        "border border-border bg-transparent hover:bg-neutral/10 active:bg-neutral/20 text-fg disabled:border-disabled disabled:bg-transparent",
      success:
        "bg-success hover:bg-success-hover active:bg-success-active text-success-fg",
      warning:
        "bg-warning hover:bg-warning-hover active:bg-warning-active text-warning-fg",
      danger:
        "bg-danger hover:bg-danger-hover active:bg-danger-active text-danger-fg",
    },
    size: {
      sm: "p-4",
      md: "p-6",
      lg: "p-8",
      icon: "p-2",
    },
    shape: {
      rectangle: "",
      square: "rounded-sm",
      circle: "rounded-full",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
    shape: "rectangle",
  },
});

type CardVariants = VariantProps<typeof cardStyles>;

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CardVariants
>(({ className, variant, size, shape, ...props }, ref) => {
  const { root } = cardStyles({ variant, size, shape });
  return <div ref={ref} className={cn(root, className)} {...props} />;
});

Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CardVariants
>(({ className, variant, size, shape, ...props }, ref) => {
  const { header } = cardStyles({ variant, size, shape });
  return <div ref={ref} className={cn(header, className)} {...props} />;
});
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLDivElement> & CardVariants
>(({ className, variant, size, ...props }, ref) => {
  const { title } = cardStyles({ variant, size });
  return <h3 ref={ref} className={cn(title, className)} {...props} />;
});
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement> & CardVariants
>(({ className, variant, size, ...props }, ref) => {
  const { description } = cardStyles({ variant, size });
  return <p ref={ref} className={cn(description, className)} {...props} />;
});
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CardVariants
>(({ className, variant, size, shape, ...props }, ref) => {
  const { content } = cardStyles({ variant, size, shape });
  return <div ref={ref} className={cn(content, className)} {...props} />;
});
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CardVariants
>(({ className, variant, size, shape, ...props }, ref) => {
  const { footer } = cardStyles({ variant, size, shape });
  return <div ref={ref} className={cn(footer, className)} {...props} />;
});
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
