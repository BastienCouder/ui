"use client";

import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { cn } from "@/lib/utils";

interface PopoverProps {
  children: React.ReactNode | string;
  content?: React.ReactNode;
  placement?: "top" | "right" | "bottom" | "left";
  offset?: number;
  shouldFlip?: boolean;
  arrow?: boolean;
  className?: string;
  flexContent?: "start" | "center" | "end";
  open?: any;
  onOpenChange?: any;
}

const Popover: React.FC<PopoverProps> = ({
  children,
  content,
  className,
  placement = "bottom",
  offset = 10,
  shouldFlip = true,
  arrow = false,
  flexContent = "center",
  ...props
}) => {
  const wrappedChildren =
    typeof children === "string" || typeof children === "number" ? (
      <>{children}</>
    ) : (
      children
    );

  return (
    <PopoverPrimitive.Root {...props}>
      {content ? (
        <>
          <PopoverTrigger asChild>{wrappedChildren}</PopoverTrigger>
          <PopoverContent
            placement={placement}
            offset={offset}
            shouldFlip={shouldFlip}
            arrow={arrow}
            flexContent={flexContent}
            className={className}
          >
            {content}
          </PopoverContent>
        </>
      ) : (
        wrappedChildren
      )}
    </PopoverPrimitive.Root>
  );
};

const PopoverTrigger = PopoverPrimitive.Trigger;

interface PopoverContentProps
  extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> {
  placement?: "top" | "right" | "bottom" | "left";
  offset?: number;
  shouldFlip?: boolean;
  arrow?: boolean;
  flexContent?: "start" | "center" | "end";
}

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  PopoverContentProps
>(
  (
    {
      className,
      placement = "bottom",
      offset = 10,
      shouldFlip = false,
      arrow = false,
      flexContent = "center",
      ...props
    },
    ref,
  ) => (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        ref={ref}
        side={placement}
        sideOffset={offset}
        avoidCollisions={shouldFlip}
        className={cn(
          "flex z-50 w-full px-4 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out",
          flexContent === "start" && "justify-start",
          flexContent === "center" && "justify-center",
          flexContent === "end" && "justify-end",
          className,
        )}
        {...props}
      >
        {props.children}
        {arrow && (
          <PopoverPrimitive.Arrow className="fill-current text-popover" />
        )}
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Portal>
  ),
);

PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverTrigger, PopoverContent };
