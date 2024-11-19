"use client";

import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";

const toggleStyles = tv({
  base: "inline-flex items-center justify-center gap-2 rounded-md leading-normal text-sm font-medium ring-offset-background transition-colors disabled:cursor-default disabled:opacity-50 disabled:bg-background",
  variants: {
    variant: {
      quiet:
        "bg-transparent hover:bg-neutral/40 active:bg-neutral/20 text-foreground data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:hover:bg-primary data-[state=on]:active:bg-primary",
      outline:
        "border border-border-field bg-transparent hover:bg-neutral/40 active:bg-neutral/20 active:border-transparent text-foreground data-[state=on]:bg-primary data-[state=on]:border-transparent data-[state=on]:text-primary-foreground data-[state=on]:hover:bg-primary data-[state=on]:active:bg-primary",
      accent:
        "border border-border-field bg-transparent hover:bg-neutral/40 active:bg-neutral/20 active:border-transparent text-foreground data-[state=on]:bg-accent data-[state=on]:border-transparent data-[state=on]:hover:bg-accent data-[state=on]:active:bg-accent data-[state=on]:text-accent-foreground",
    },
    size: {
      sm: "p-1.5 w-8 h-8 [&_svg]:w-4 [&_svg]:h-4",
      md: "p-2 w-9 h-9 [&_svg]:w-4 [&_svg]:h-4",
      lg: "p-2 w-10 h-10 [&_svg]:w-5 [&_svg]:h-5",
    },
    shape: {
      rectangle: "",
      square: "",
      circle: "rounded-full",
    },
  },
  compoundVariants: [
    {
      size: "sm",
      shape: "rectangle",
      className: "px-3 w-auto",
    },
    {
      size: "md",
      shape: "rectangle",
      className: "px-4 w-auto",
    },
    {
      size: "lg",
      shape: "rectangle",
      className: "px-5 w-auto",
    },
  ],
  defaultVariants: {
    variant: "quiet",
    size: "md",
    shape: "square",
  },
});

interface ToggleProps
  extends Omit<
      React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root>,
      "prefix" | "onChange"
    >,
    VariantProps<typeof toggleStyles> {
  children: React.ReactNode;
  className?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  isDisabled?: boolean;
  defaultSelected?: boolean;
  isSelected?: boolean;
  onPressedChange?: (isSelected: boolean) => void;
}

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  ToggleProps
>((props: ToggleProps, ref: React.ForwardedRef<HTMLButtonElement>) => {
  const {
    className,
    variant,
    size,
    shape,
    prefix,
    isDisabled,
    suffix,
    defaultSelected,
    isSelected,
    onPressedChange,
    ...restProps
  } = props;

  return (
    <TogglePrimitive.Root
      ref={ref}
      disabled={isDisabled}
      className={cn(toggleStyles({ variant, size, shape, className }))}
      defaultPressed={defaultSelected}
      pressed={isSelected}
      onPressedChange={onPressedChange}
      {...restProps}
    >
      {prefix && <span className="mr-2">{prefix}</span>}
      {props.children}
      {suffix && <span className="ml-2">{suffix}</span>}
    </TogglePrimitive.Root>
  );
});

Toggle.displayName = "Toggle";

type ToggleContextValue = VariantProps<typeof toggleStyles>;
const ToggleContext = React.createContext<ToggleContextValue>({});
const useToggleContext = (): ToggleContextValue => {
  return React.useContext(ToggleContext);
};

export type { ToggleProps };
export { Toggle, toggleStyles, ToggleContext, useToggleContext };
