"use client";

import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import { type VariantProps, tv } from "tailwind-variants";

const scrollAreaStyles = tv({
  slots: {
    root: "flex flex-col h-full w-full overflow-hidden relative",
    viewport: "h-full w-full flex flex-col [&>*]:!block [&>*]:w-fit [&>*]:grow",
    scrollbar:
      "flex touch-none select-none flex-col data-[orientation=horizontal]:flex-row data-[orientation=vertical]:flex-col rounded-full m-1",
    thumb:
      "relative before:absolute before:content-[''] before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2] w-full h-full before:min-w-4 before:min-h-4 transition-colors rounded-[inherit]",
  },
  variants: {
    size: {
      sm: {
        scrollbar:
          "data-[orientation=horizontal]:h-1 data-[orientation=vertical]:w-1",
      },
      md: {
        scrollbar:
          "data-[orientation=horizontal]:h-2 data-[orientation=vertical]:w-2",
      },
      lg: {
        scrollbar:
          "data-[orientation=horizontal]:h-3 data-[orientation=vertical]:w-3",
      },
    },
    variant: {
      default: {
        scrollbar: "bg-neutral/10",
        thumb: "bg-neutral",
      },
      primary: {
        scrollbar: "bg-neutral/10",
        thumb: "bg-primary",
      },
      secondary: {
        scrollbar: "bg-neutral/10",
        thumb: "bg-secondary",
      },
      transparent: {
        scrollbar: "bg-transparent",
        thumb: "bg-transparent",
      },
    },
  },
  defaultVariants: {
    size: "md",
    variant: "default",
  },
});

interface ScrollAreaProps
  extends ScrollAreaRootProps,
    Omit<ScrollAreaViewPortProps, "dir">,
    VariantProps<typeof scrollAreaStyles> {
  scrollbars?: "vertical" | "horizontal" | "both";
  ref?: React.ForwardedRef<HTMLDivElement>;
}

const ScrollArea = ({
  children,
  scrollbars = "vertical",
  size,
  variant,
  asChild,
  type,
  scrollHideDelay,
  dir,
  ...viewportProps
}: ScrollAreaProps): JSX.Element => {
  return (
    <ScrollAreaRoot
      asChild={asChild}
      scrollHideDelay={scrollHideDelay}
      dir={dir}
      type={type}
    >
      <ScrollAreaViewPort {...viewportProps}>{children}</ScrollAreaViewPort>
      {scrollbars !== "vertical" && (
        <ScrollAreaScrollbar
          orientation="horizontal"
          size={size}
          variant={variant}
        />
      )}
      {scrollbars !== "horizontal" && (
        <ScrollAreaScrollbar
          orientation="vertical"
          size={size}
          variant={variant}
        />
      )}
      {scrollbars === "both" && <ScrollAreaCorner />}
    </ScrollAreaRoot>
  );
};

type ScrollAreaRootProps = ScrollAreaPrimitive.ScrollAreaProps;
const ScrollAreaRoot = ({
  className,
  ...props
}: ScrollAreaRootProps): JSX.Element => {
  const { root } = scrollAreaStyles();
  return (
    <ScrollAreaPrimitive.Root className={root({ className })} {...props} />
  );
};

type ScrollAreaViewPortProps = ScrollAreaPrimitive.ScrollAreaViewportProps;
const ScrollAreaViewPort = ({
  className,
  ...props
}: ScrollAreaViewPortProps): JSX.Element => {
  const { viewport } = scrollAreaStyles();
  return (
    <ScrollAreaPrimitive.Viewport
      className={viewport({ className })}
      {...props}
    />
  );
};

interface ScrollAreaScrollbarProps
  extends Omit<ScrollAreaPrimitive.ScrollAreaScrollbarProps, "variant">,
    VariantProps<typeof scrollAreaStyles> {}
const ScrollAreaScrollbar = ({
  className,
  size,
  variant,
  ...props
}: ScrollAreaScrollbarProps): JSX.Element => {
  const { scrollbar, thumb } = scrollAreaStyles({ size, variant });
  return (
    <ScrollAreaPrimitive.Scrollbar
      className={scrollbar({ className })}
      {...props}
    >
      <ScrollAreaPrimitive.Thumb className={thumb()} />
    </ScrollAreaPrimitive.Scrollbar>
  );
};

const ScrollAreaCorner = ScrollAreaPrimitive.Corner;

export type {
  ScrollAreaProps,
  ScrollAreaRootProps,
  ScrollAreaViewPortProps,
  ScrollAreaScrollbarProps,
};
export {
  ScrollArea,
  ScrollAreaRoot,
  ScrollAreaViewPort,
  ScrollAreaScrollbar,
  ScrollAreaCorner,
};
