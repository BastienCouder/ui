"use client";

import { Button } from "@/registry/ui/react/button";
import { Tooltip } from "@/registry/ui/react/tooltip";

export default function TooltipDemo(): JSX.Element {
  return (
    <Tooltip content="This tooltip is 20px away" offset={20}>
      <Button>Hover me</Button>
    </Tooltip>
  );
}
