import { cn } from "@/lib/utils";

import { ReactNode } from "react";

interface CalloutProps {
  type: "info" | "warning" | "error";
  children: ReactNode;
  className?: string;
}

export default function Callout({ className, type, children }: CalloutProps): JSX.Element {
  const classes = cn(
    "p-4 border-l-4",
    {
      "bg-bg/10 border-primary": type === "info",
      "bg-warning/10 border-warning": type === "warning",
      "bg-error/10 border-error": type === "error",
    },
    "relative",
  );

  return <div className={classes && className}>{children}</div>;
}