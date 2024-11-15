"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";
import { tv } from "tailwind-variants";

const switchStyles = tv({
  base: "focus-visible:ring-ring focus-visible:ring-offset-background peer inline-flex items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  variants: {
    variant: {
      neutral:
        "data-[state=checked]:bg-foreground data-[state=unchecked]:bg-input",
      primary:
        "data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      secondary:
        "data-[state=checked]:bg-secondary data-[state=unchecked]:bg-input",
    },
    size: {
      sm: "h-4 w-8",
      md: "h-5 w-10",
      lg: "h-6 w-12",
    },
    shape: {
      rectangle: "rounded-md",
      circle: "rounded-full",
      square: "rounded-none",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
    shape: "circle",
  },
});

const thumbStyles = tv({
  base: "bg-background pointer-events-none block rounded-full shadow-lg ring-0 transition-transform",
  variants: {
    size: {
      sm: "h-3 w-3 data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0",
      md: "h-4 w-4 data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
      lg: "h-5 w-5 data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-0",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type SwitchProps = React.ComponentPropsWithoutRef<
  typeof SwitchPrimitives.Root
> & {
  variant?: "neutral" | "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  shape?: "rectangle" | "circle" | "square";
};

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  SwitchProps
>(({ className, variant, size, shape, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(switchStyles({ variant, size, shape }), className)}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb className={cn(thumbStyles({ size }))} />
  </SwitchPrimitives.Root>
));

Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
