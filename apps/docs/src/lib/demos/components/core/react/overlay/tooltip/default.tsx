"use client";

import { Button } from "@/lib/components/core/default/react/buttons/button";
import { Tooltip } from "@/lib/components/core/default/react/overlay/tooltip";

export default function TooltipDemo() {
  const Content = () => <p>Add to library</p>;

  return (
    <Tooltip content={<Content />}>
      <Button>Hover</Button>
    </Tooltip>
  );
}
