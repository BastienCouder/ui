"use client";

import { Button } from "@/registry/ui/react/button";
import { Tooltip } from "@/registry/ui/react/tooltip";

export default function TooltipDemo(): JSX.Element {
  return (
    <Tooltip content="This tooltip appears after a delay" delay={300}>
      <Button>Hover me</Button>
    </Tooltip>
  );
}
