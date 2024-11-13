import { cn } from "@/lib/utils";

import { ReactNode } from "react";

interface CalloutProps {
  type: "info" | "warning" | "error";
  children: ReactNode;
  className?: string;
}

export default function Callout({ className, type, children }: CalloutProps): JSX.Element {

  return <div className={cn(
    "p-4 border-l-4",
    {
      "bg-neutral/20 border-primary": type === "info",
      "bg-warning/20 border-warning": type === "warning",
      "bg-danger/20 border-danger": type === "error",
    },
    "relative",className)}>{children}</div>;
}