"use client";

import { Button } from "@/lib/components/core/default/react/buttons/button";
import { Tooltip } from "@/lib/components/core/default/react/overlay/tooltip";

const placements = [
    "top",
    "right",
    "bottom",
    "left",
] as const;

export default function TooltipDemo() {
    return (
        <div className="grid grid-cols-2 gap-2">
        {placements.map((placement) => (
            <Tooltip key={placement} content={`Tooltip on the ${placement}`} placement={placement}>
                <Button>{placement}</Button>
            </Tooltip>
        ))}
    </div>
    );
  }
  