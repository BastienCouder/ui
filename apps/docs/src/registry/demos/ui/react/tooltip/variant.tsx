"use client";

import { Button } from "@/registry/ui/react/button";
import { Tooltip } from "@/registry/ui/react/tooltip";

const variants = ["default", "outline", "secondary"] as const;

export default function TooltipDemo() {
  return (
    <div className="grid grid-cols-2 gap-2">
      {variants.map((variant) => (
        <Tooltip
          key={variant}
          content={`This is a ${variant} tooltip`}
          variant={variant}
        >
          <Button>{variant}</Button>
        </Tooltip>
      ))}
    </div>
  );
}
