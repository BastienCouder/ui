import { cn } from "@/lib/utils";
import { Card } from "@/registry/ui/react/card";
import React from "react";

interface BannerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Banner({
  children,
  className,
}: BannerProps): JSX.Element {
  return (
    <div className={cn(className)}>
      <Card className="h-14 flex items-center">{children}</Card>
    </div>
  );
}
