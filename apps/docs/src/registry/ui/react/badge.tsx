import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";

const badgeVariants = tv({
  base: "inline-flex items-center gap-1 rounded-md text-xs font-semibold transition-colors shrink-0 whitespace-nowrap",
  variants: {
    variant: {
      neutral: "bg-neutral text-fg",
      outline: "border text-fg",
      primary: "bg-primary text-primary-fg",
      success: "bg-success text-success-fg",
      danger: "bg-danger text-danger-fg",
      warning: "bg-warning text-warning-fg",
      accent: "bg-accent text-accent-fg",
    },
    size: {
      sm: "h-5 px-2.5 [&_svg]:w-3 [&_svg]:h-3",
      md: "h-6 px-3 [&_svg]:w-3.5 [&_svg]:h-3.5",
      lg: "h-7 px-4 text-sm [&_svg]:w-4 [&_svg]:h-4",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "sm",
  },
});

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  icon?: React.ReactNode;
}

function Badge({
  children,
  className,
  variant,
  size,
  icon,
  ...props
}: BadgeProps): JSX.Element {
  return (
    <span
      role="presentation"
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    >
      {icon && <span>{icon}</span>}
      <span>{children}</span>
    </span>
  );
}

export { Badge, badgeVariants };
