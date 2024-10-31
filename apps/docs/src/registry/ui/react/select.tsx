"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { tv } from "tailwind-variants";

const selectStyles = tv({
  variants: {
    size: {
      sm: "h-8 px-2 text-sm",
      md: "h-10 px-3 text-base",
      lg: "h-12 px-4 text-lg",
    },
    shape: {
      rounded: "rounded-md",
      square: "rounded-none",
      circle: "rounded-full",
    },
    variant: {
      primary:
        "border-primary bg-primary text-primary-fg hover:bg-primary-hover active:bg-primary-active",
      secondary:
        "border-secondary bg-secondary text-secondary-fg hover:bg-secondary-hover active:bg-secondary-active",
      outline: "border-foreground bg-transparent text-foreground hover:bg-muted/50",
      neutral:
        "border-neutral bg-neutral text-fg hover:bg-neutral-hover active:bg-neutral-active",
    },
  },
  defaultVariants: {
    size: "md",
    shape: "rounded",
    variant: "outline",
  },
});

interface SelectProps {
  children?: React.ReactNode;
  options?: Array<{ label: string; value: string }>; // Pour utilisation comme avec `Sheet`
  label?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  shape?: "rounded" | "square" | "circle";
  variant?: "primary" | "secondary" | "outline" | "neutral";
  withRing?: boolean;
}

const Select: React.FC<SelectProps> = ({
  children,
  options,
  label,
  size = "md",
  shape = "rounded",
  variant = "outline",
  withRing = false,
  className,
  ...props
}) => {

  const wrappedChildren =
    typeof children === "string" || typeof children === "number" ? (
      <>{children}</>
    ) : (
      children
    );

  return (
    
    <SelectPrimitive.Root {...props}>
      {options ? (
        <>
          <SelectTrigger size={size} shape={shape} variant={variant} withRing={withRing} className={className}>
            {wrappedChildren}
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {label && <SelectLabel>{label}</SelectLabel>}
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
            </SelectGroup>
          </SelectContent>
        </>
      ) : (
        wrappedChildren
      )}
    </SelectPrimitive.Root>
  );
};

const SelectGroup = SelectPrimitive.Group;
const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> & {
    size?: "sm" | "md" | "lg";
    shape?: "rounded" | "square" | "circle";
    variant?: "primary" | "secondary" | "outline" | "neutral";
    withRing?: boolean;
  }
>(
  ({ className, children, size, shape, variant, withRing = false, ...props }, ref) => (
    <SelectPrimitive.Trigger
      ref={ref}
      className={cn(
        selectStyles({ size, shape, variant }),
        withRing ? "ring-offset-bg focus:ring-ring focus:ring-2 focus:ring-offset-2" : "",
        "flex w-full items-center justify-between border px-3 py-2 text-left text-sm focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDown className="w-4 h-4 shrink-0 opacity-50" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
);
SelectTrigger.displayName = "SelectTrigger";

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn("flex cursor-default items-center justify-center py-1", className)}
    {...props}
  >
    <ChevronUp className="w-4 h-4" />
  </SelectPrimitive.ScrollUpButton>
));
SelectScrollUpButton.displayName = "SelectScrollUpButton";

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn("flex cursor-default items-center justify-center py-1", className)}
    {...props}
  >
    <ChevronDown className="w-4 h-4" />
  </SelectPrimitive.ScrollDownButton>
));
SelectScrollDownButton.displayName = "SelectScrollDownButton";

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "bg-popover text-popover-foreground relative z-50 max-h-96 min-w-32 overflow-hidden rounded-md border shadow-md",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport className="p-1">{children}</SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = "SelectContent";

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)}
    {...props}
  />
));
SelectLabel.displayName = "SelectLabel";

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "focus:bg-accent focus:text-accent-foreground relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex w-3.5 h-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="w-4 h-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = "SelectItem";

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("bg-muted -mx-1 my-1 h-px", className)}
    {...props}
  />
));
SelectSeparator.displayName = "SelectSeparator";

// Exportation complète
export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
};
