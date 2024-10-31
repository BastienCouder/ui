"use client";

import React from "react";
import type { LucideIcon, LucideProps } from "lucide-react";
import { StarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const starStyles = {
  base: "h-6 w-6 transition-transform duration-300 hover:scale-110",
  variants: {
    variant: {
      default: "text-yellow-500 fill-yellow-500",
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
  onChange?: (value: number) => void;
  onClick?: (value: number) => void;
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
  onChange,
  onClick,
}: StarRatingProps): JSX.Element {
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

  const handleClick = (index: number) => {
    if (!disabled) {
      const newValue = index + 1;
      setValue(newValue);

      if (onChange) {
        onChange(newValue);
      }

      if (onClick) {
        onClick(newValue);
      }
    }
  };

  return (
    <div
      className={cn("flex items-center cursor-pointer gap-1", wrapperClassName)}
      {...restWrapperProps}
    >
      {Array.from({ length: numStars }, (_, i) => {
        const isRated = i < Math.floor(value);
        const fractionalPart =
          i === Math.floor(value) ? value % 1 : i < value ? 1 : 0;

        return (
          <div
            key={i}
            className={cn(
              "relative",
              {
                "pointer-events-none": disabled,
              },
              sizeClassName,
            )}
            onMouseEnter={() => handleMouseEnter(i)}
            onClick={() => handleClick(i)}
          >
            <IconComponent
              className={cn(
                starStyles.base,
                "fill-gray-300 text-gray-300",
                iconClassName,
              )}
              {...restIconProps}
            />
            {(isRated || fractionalPart > 0) && (
              <div
                className="absolute top-0 left-0 overflow-hidden"
                style={{ width: `${fractionalPart * 100}%` }}
              >
                <IconComponent
                  className={cn(
                    starStyles.base,
                    "text-yellow-500",
                    variantClassName,
                    iconClassName,
                  )}
                  {...restIconProps}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export { StarRating };
