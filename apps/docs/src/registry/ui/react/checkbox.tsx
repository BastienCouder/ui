"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { tv } from "tailwind-variants";

const checkedStyles = tv({
  base: "ring-offset-background focus-visible:ring-ring peer shrink-0 rounded-sm border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  variants: {
    variant: {
      neutral:
        "border-foreground data-[state=checked]:bg-foreground data-[state=checked]:text-background",
      primary:
        "border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      secondary:
        "border-secondary data-[state=checked]:bg-secondary data-[state=checked]:text-secondary-foreground",
    },
    size: {
      sm: "h-4 w-4",
      md: "h-4 w-4",
      lg: "h-5 w-5",
    },
    shape: {
      rectangle: "rounded-sm",
      square: "rounded-none",
      circle: "rounded-full",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
    shape: "rectangle",
  },
});

const textStyles = tv({
  variants: {
    size: {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type CheckboxProps = React.ComponentPropsWithoutRef<
  typeof CheckboxPrimitive.Root
> & {
  children?: React.ReactNode;
  labelPosition?: "left" | "right";
  description?: string;
  disabled?: boolean;
  card?: boolean;
  cardClassName?: string;
  readOnly?: boolean;
  defaultChecked?: boolean;
  variant?: "neutral" | "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  shape?: "rectangle" | "square" | "circle";
};

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(
  (
    {
      className,
      children,
      variant,
      size,
      shape,
      labelPosition = "right",
      description,
      disabled = false,
      card = false,
      cardClassName,
      readOnly = false,
      defaultChecked = false,
      ...props
    },
    ref,
  ) => {
    const [checked, setChecked] = React.useState(defaultChecked);

    const handleCardClick = () => {
      if (!disabled && !readOnly) {
        setChecked(!checked);
        props.onCheckedChange?.(!checked);
      }
    };

    const content = (
      <div
        className={cn(
          "flex items-center",
          labelPosition === "left" ? "flex-row-reverse" : "flex-row",
          disabled && "opacity-50 cursor-not-allowed",
        )}
      >
        <CheckboxPrimitive.Root
          ref={ref}
          className={cn(checkedStyles({ variant, size, shape }), className)}
          disabled={disabled}
          checked={checked}
          onCheckedChange={(checked) =>
            !readOnly &&
            setChecked(checked === "indeterminate" ? false : checked)
          }
          {...props}
        >
          <CheckboxPrimitive.Indicator
            className={cn("flex items-center justify-center text-current")}
          >
            <Check className="w-4 h-4" />
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
        <div className={cn("ml-2", labelPosition === "left" ? "mr-2" : "ml-2")}>
          {children && (
            <span className={cn(textStyles({ size }))}>{children}</span>
          )}
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>
      </div>
    );

    if (card) {
      return (
        <div
          onClick={handleCardClick}
          className={cn(
            "inline-block p-4 border rounded-lg cursor-pointer transition-colors",
            "data-[state=checked]:bg-neutral/20",
            cardClassName,
          )}
          style={{ width: "auto" }}
          data-state={checked ? "checked" : "unchecked"}
        >
          {content}
        </div>
      );
    }

    return content;
  },
);

Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
