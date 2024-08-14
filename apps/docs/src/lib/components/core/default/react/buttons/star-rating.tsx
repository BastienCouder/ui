"use client";

import React from "react";
import type { LucideIcon, LucideProps } from "lucide-react";
import { StarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const starStyles = {
  base: "h-6 w-6 transition-transform duration-300 hover:scale-110",
  variants: {
    variant: {
      default: "fill-yellow-500 text-yellow-500",
      primary: "text-primary fill-primary",
      secondary: "text-secondary fill-secondary",
      success: "text-success fill-success",
      warning: "text-warning fill-warning",
      danger: "text-danger fill-danger",
    },
    size: {
      sm: "h-4 w-4",
      md: "h-6 w-6",
      lg: "h-8 w-8",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
};

interface StarRatingProps {
  numStars?: number;
  icon?: LucideIcon;
  disabled?: boolean;
  wrapperProps?: React.HTMLAttributes<HTMLDivElement>;
  iconProps?: LucideProps;
  showcase?: boolean;
  defaultValue?: number;
  variant?: keyof (typeof starStyles)["variants"]["variant"];
  size?: keyof (typeof starStyles)["variants"]["size"];
}

function StarRating({
  numStars = 5,
  icon: IconComponent = StarIcon,
  disabled = false,
  showcase = false,
  iconProps = {},
  wrapperProps = {},
  defaultValue = 0,
  variant,
  size,
}: StarRatingProps) {
  const [value, setValue] = React.useState<number>(defaultValue);

  const { className: wrapperClassName, ...restWrapperProps } = wrapperProps;
  const { className: iconClassName, ...restIconProps } = iconProps;

  const appliedVariant = variant || starStyles.defaultVariants.variant;
  const appliedSize = size || starStyles.defaultVariants.size;

  const variantClassName =
    starStyles.variants.variant[
      appliedVariant as keyof typeof starStyles.variants.variant
    ];
  const sizeClassName =
    starStyles.variants.size[
      appliedSize as keyof typeof starStyles.variants.size
    ];

  const handleMouseEnter = (index: number) => {
    if (!showcase && !disabled) {
      setValue(index + 1);
    }
  };

  return (
    <div
      className={cn("flex items-center cursor-pointer gap-1", wrapperClassName)}
      {...restWrapperProps}
    >
      {Array.from({ length: numStars }, (_, i) => {
        const isRated = i < value;
        const styledIconProps: LucideProps = {
          onMouseEnter: () => handleMouseEnter(i),
          className: cn(
            starStyles.base,
            sizeClassName,
            {
              "opacity-50 pointer-events-none": disabled,
              "!fill-bg !border-bg": !isRated,
            },
            variantClassName,
            iconClassName,
          ),
          ...restIconProps,
        };
        return (
          <div key={i}>
            <IconComponent {...styledIconProps} />
          </div>
        );
      })}
    </div>
  );
}

export { StarRating };
