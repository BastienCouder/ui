"use client";

import { cn } from "@/lib/utils";
import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const textFieldStyles = tv({
  base: "flex flex-col gap-2 items-start w-auto",
});

const inputContainerStyles = tv({
  base: "relative w-full",
});

const inputStyles = tv({
  base: "w-full rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  variants: {
    variant: {
      default:
        "bg-bg hover:bg-input-background-hover focus:bg-input-background-active text-input-foreground border border-input-border",
      primary:
        "bg-primary hover:bg-primary-hover focus:bg-primary-active text-primary-foreground border border-primary-border",
      secondary:
        "bg-secondary hover:bg-secondary-hover focus:bg-secondary-active text-secondary-foreground border border-secondary-border",
      outline:
        "bg-transparent border border-input-border hover:bg-input-background-hover focus:bg-input-background-active text-input-foreground",
      quiet: "bg-transparent text-input-foreground",
    },
    inputSize: {
      sm: "h-8 text-sm  px-2",
      md: "h-10 text-base px-4",
      lg: "h-12 text-lg  px-4",
    },
    shape: {
      rectangle: "rounded-md",
      square: "rounded-none",
      circle: "rounded-full",
    },
    invalid: {
      true: "border-danger bg-danger-background text-danger-foreground focus-visible:ring-danger",
    },
  },
  defaultVariants: {
    variant: "default",
    inputSize: "md",
    shape: "rectangle",
  },
});

type TextFieldProps = TextFieldRootProps &
  Omit<InputProps, "children"> &
  VariantProps<typeof inputStyles> & {
    label?: string;
    description?: string;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    isInvalid?: boolean;
    errorMessage?: string;
    isLoading?: boolean;
    loaderPosition?: "prefix" | "suffix";
    placeholder?: string;
    contextualHelp?: React.ReactNode;
    inputSize?: "sm" | "md" | "lg";
  };

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      label,
      description,
      className,
      type,
      prefix,
      suffix,
      isInvalid,
      errorMessage,
      contextualHelp,
      inputSize,
      shape,
      ...props
    },
    ref,
  ) => {
    
    return (
      <div className={cn(textFieldStyles())}>
        {label && (
          <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
            {label}
            {contextualHelp && (
              <span className="ml-2">{contextualHelp}</span> 
            )}
          </label>
        )}
        <div className={cn(inputContainerStyles())}>
          {prefix && (
            <span className="absolute left-3 inset-y-0 flex items-center z-40 text-gray-400">
              {prefix}
            </span>
          )}
          <input
            type={type}
            className={cn(inputStyles({invalid: isInvalid, inputSize, shape }), className)}
            ref={ref}
            {...props}
          />
          {suffix && (
            <span className="relative right-3 inset-y-0 flex z-20 items-center  text-gray-400">
              {suffix}
            </span>
          )}
        </div>
        {isInvalid && errorMessage && (
          <p className="text-xs text-danger mt-1">{errorMessage}</p>
        )}
        {!isInvalid && description && (
          <p className="text-xs text-muted-foreground mt-1">{description}</p>
        )}
      </div>
    );
  },
);
TextField.displayName = "TextField";

type TextFieldRootProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "className"
> & {
  className?: string;
};

const TextFieldRoot = React.forwardRef<HTMLInputElement, TextFieldRootProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(textFieldStyles(className))} 
        {...props}
      />
    );
  },
);
TextFieldRoot.displayName = "TextFieldRoot";

export type { TextFieldProps, TextFieldRootProps };
export { TextField, TextFieldRoot };
