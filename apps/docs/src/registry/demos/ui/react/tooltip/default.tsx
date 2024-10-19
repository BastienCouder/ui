"use client";

import { Button } from "@/registry/ui/react/button";
import { Tooltip } from "@/registry/ui/react/tooltip";

export default function TooltipDemo() {
  const Content = () => <p>Add to library</p>;

  return (
    <Tooltip content={<Content />}>
      <Button>Hover</Button>
    </Tooltip>
  );
}
