"use client";

import { Button } from "@/registry/ui/react/button";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/ui/react/tooltip";

export default function TooltipDemo() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button>Hover</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Add to library</p>
        <TooltipArrow />
      </TooltipContent>
    </Tooltip>
  );
}
