import React from "react";
import { ChevronRight, ChevronDown } from "lucide-react";
import { tv } from "tailwind-variants";
import { cn } from "@/lib/utils";

const breadcrumbStyles = tv({
  variants: {
    variant: {
      neutral: "text-fg hover:text-primary-hover",
      active: "text-primary-active font-bold",
    },
    size: {
      sm: "text-sm [&_svg]:w-4 [&_svg]:h-4",
      md: "text-base [&_svg]:w-4.5 [&_svg]:h-4.5",
      lg: "text-lg [&_svg]:w-5 [&_svg]:h-5",
    },
  },
  defaultVariants: {
    variant: "neutral",
    size: "sm",
  },
});

const Breadcrumbs = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav"> & {
    orientation?: "horizontal" | "vertical";
    separatorIcon?: React.ReactNode;
    className?: string;
    listClassName?: string;
  }
>(
  (
    {
      orientation = "horizontal",
      separatorIcon,
      children,
      className,
      listClassName,
      ...props
    },
    ref,
  ) => {
    const defaultSeparatorIcon =
      orientation === "vertical" ? (
        <ChevronDown size={18} />
      ) : (
        <ChevronRight size={18} />
      );
    const effectiveSeparatorIcon = separatorIcon || defaultSeparatorIcon;

    return (
      <nav ref={ref} aria-label="breadcrumb" className={className} {...props}>
        <ol
          className={`flex ${orientation === "horizontal" ? "flex-row items-center gap-2 py-2" : "flex-col gap-2"} ${listClassName}`}
        >
          {React.Children.map(children, (child, index) =>
            React.cloneElement(child as React.ReactElement, {
              isLast: index === React.Children.count(children) - 1,
              separatorIcon: effectiveSeparatorIcon,
              orientation,
            }),
          )}
        </ol>
      </nav>
    );
  },
);
Breadcrumbs.displayName = "Breadcrumbs";

const Breadcrumb = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<"li"> & {
    href?: string;
    isLast?: boolean;
    separatorIcon?: React.ReactNode;
    orientation?: "horizontal" | "vertical";
    disabled?: boolean;
    className?: string;
    itemClassName?: string;
    variant?: "neutral";
    size?: "sm" | "md" | "lg";
  }
>(
  (
    {
      className,
      itemClassName,
      href,
      isLast,
      separatorIcon,
      orientation = "horizontal",
      disabled = false,
      variant,
      size,
      ...props
    },
    ref,
  ) => {
    const variantToUse = isLast ? "active" : variant;
    const itemClasses = breadcrumbStyles({ variant: variantToUse, size });

    const Comp: any = href && !disabled ? "a" : "span";

    return (
      <li
        ref={ref}
        className={cn(
          `flex items-center ${orientation === "vertical" ? "flex-col" : "flex-row"} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`,
          className,
        )}
      >
        <Comp
          href={href}
          {...props}
          className={cn(
            `flex items-center gap-2 ${href && !disabled ? "transition-colors hover:text-foreground" : "font-normal text-foreground"} ${
              disabled ? "pointer-events-none text-disabled-fg" : ""
            }`,
            itemClasses,
            itemClassName,
          )}
        >
          {props.children}
        </Comp>
        {!isLast && separatorIcon && (
          <div
            className={cn(
              `flex items-center ${orientation === "vertical" ? "mt-2 flex justify-center w-full" : "ml-2"}`,
              itemClasses,
            )}
          >
            {separatorIcon}
          </div>
        )}
      </li>
    );
  },
);
Breadcrumb.displayName = "Breadcrumb";

export { Breadcrumbs, Breadcrumb };
