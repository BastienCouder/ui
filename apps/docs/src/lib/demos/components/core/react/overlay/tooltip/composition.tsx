"use client";

import { Button } from "@/lib/components/core/default/react/buttons/button";
import { Tooltip, TooltipArrow, TooltipContent, TooltipTrigger } from "@/lib/components/core/default/react/overlay/tooltip";

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
   )
}
