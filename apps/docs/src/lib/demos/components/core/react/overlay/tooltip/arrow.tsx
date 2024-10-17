"use client";

import { Button } from "@/lib/components/core/default/react/buttons/button";
import { Tooltip } from "@/lib/components/core/default/react/overlay/tooltip";

export default function TooltipDemo() {
  return (
    <Tooltip content="This tooltip has an arrow" arrow>
      <Button>Hover me</Button>
    </Tooltip>
  );
}
