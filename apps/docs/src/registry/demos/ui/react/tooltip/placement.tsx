"use client";

import { Button } from "@/registry/ui/react/button";
import { Tooltip } from "@/registry/ui/react/tooltip";

const placements = ["top", "right", "left", "bottom"] as const;

export default function TooltipDemo(): JSX.Element {
  return (
    <div className="grid grid-cols-2 gap-2">
      {placements.map((placement) => (
        <Tooltip
          key={placement}
          content={`Tooltip on the ${placement}`}
          placement={placement}
        >
          <Button>{placement}</Button>
        </Tooltip>
      ))}
    </div>
  );
}
