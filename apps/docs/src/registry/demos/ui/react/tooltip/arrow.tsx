"use client";

import { Button } from "@/registry/ui/react/button";
import { Tooltip } from "@/registry/ui/react/tooltip";

export default function TooltipDemo() {
  return (
    <Tooltip content="This tooltip has an arrow" arrow>
      <Button>Hover me</Button>
    </Tooltip>
  );
}
