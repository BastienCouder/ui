"use client";

import { cn } from "@/lib/utils";
import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { Tooltip } from "@/registry/ui/react/tooltip";
import { HelpCircle } from "@/lib/icons";

const textareaStyles = tv({
  base: "w-full rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
  variants: {
    variant: {
      default:
        "bg-background hover:bg-input-background-hover focus:bg-input-background-active text-input-foreground border border-input-border",
      primary:
        "bg-primary hover:bg-primary-hover focus:bg-primary-active text-primary-foreground border border-primary-border",
      secondary:
        "bg-secondary hover:bg-secondary-hover focus:bg-secondary-active text-secondary-foreground border border-secondary-border",
      outline:
        "bg-transparent border border-input-border hover:bg-input-background-hover focus:bg-input-background-active text-input-foreground",
      quiet: "bg-transparent text-input-foreground",
    },
    size: {
      sm: "text-sm px-2 py-1",
      md: "text-base px-4 py-2",
      lg: "text-lg px-4 py-3",
    },
    shape: {
      rectangle: "rounded-md",
      square: "rounded-none",
      circle: "rounded-full",
    },
    invalid: {
      true: "border-destructive bg-background text-destructive-foreground focus-visible:ring-destructive",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
    shape: "rectangle",
  },
});

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> &
  VariantProps<typeof textareaStyles> & {
    label?: string;
    description?: string;
    isInvalid?: boolean;
    errorMessage?: string;
    contextualHelp?: React.ReactNode;
    textareaSize?: "sm" | "md" | "lg";
  };

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      description,
      className,
      isInvalid,
      errorMessage,
      contextualHelp,
      size,
      shape,
      ...props
    },
    ref,
  ) => {
    return (
      <div className={cn("w-full", className)}>
        {label ||
          (contextualHelp && (
            <label className="text-sm font-medium flex items-center gap-1 mb-1">
              {label}
              {contextualHelp && (
                <Tooltip content={contextualHelp} offset={5}>
                  <HelpCircle className="h-4 w-4" />
                </Tooltip>
              )}
            </label>
          ))}
        <textarea
          className={cn(
            textareaStyles({ invalid: isInvalid, size, shape }),
            className,
          )}
          ref={ref}
          {...props}
        />
        {isInvalid && errorMessage && (
          <p className="text-xs text-destructive mt-1">{errorMessage}</p>
        )}
        {!isInvalid && description && (
          <p className="text-xs text-muted-foreground mt-1">{description}</p>
        )}
      </div>
    );
  },
);

Textarea.displayName = "Textarea";

export { Textarea };
