"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

type TabsProps = {
  className?: string;
  children?: React.ReactNode;
  selectedKey?: number;
  onSelectionChange?: (key: number) => void;
  defaultValue?: string; 
  orientation?: "horizontal" | "vertical";
};

const Tabs = ({
  orientation = "horizontal",
  defaultValue, 
  ...props
}: TabsProps) => {
  let className = "flex";
  if (orientation === "vertical") {
    className += " flex-row";
  } else {
    className += " flex-col";
  }

  return (
    <TabsPrimitive.Root
      {...props}
      orientation={orientation}
      defaultValue={defaultValue} 
      className={cn(className)}
    />
  );
};

const TabList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> & { orientation?: "horizontal" | "vertical" }
>(({ className, orientation, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center p-1",
      className,
      orientation === "vertical" ? "flex-col border-r" : "flex-row border-b"
    )}
    {...props}
  />
));
TabList.displayName = TabsPrimitive.List.displayName;

const Tab = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      className
    )}
    {...props}
  />
));
Tab.displayName = TabsPrimitive.Trigger.displayName;

const TabContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
));
TabContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabList, Tab, TabContent };
export type { TabsProps };
