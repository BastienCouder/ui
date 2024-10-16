"use client";

import { Label } from "@/lib/components/core/default/react/input/label";
import { Button } from "@/lib/components/core/default/react/buttons/button";
import { TextField } from "@/lib/components/core/default/react/input/text-field";
import { Popover } from "@/lib/components/core/default/react/overlay/popover";

const placements = [
   "top",
   "right",
   "bottom",
   "left",
] as const;

export default function PopoverDemo() {

    const Content = () => (
        <div className="grid gap-4">
           <div className="space-y-2">
              <h4 className="font-medium leading-none">Dimensions</h4>
              <p className="text-muted-foreground text-sm">
                 Set the dimensions for the layer.
              </p>
           </div>
           <div className="grid gap-2">
              <div className="grid grid-cols-3 items-center gap-4">
                 <Label htmlFor="width">Width</Label>
                 <TextField
                    id="width"
                    defaultValue="100%"
                    className="col-span-2 h-8"
                 />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                 <Label htmlFor="maxWidth">Max. width</Label>
                 <TextField
                    id="maxWidth"
                    defaultValue="300px"
                    className="col-span-2 h-8"
                 />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                 <Label htmlFor="height">Height</Label>
                 <TextField
                    id="height"
                    defaultValue="25px"
                    className="col-span-2 h-8"
                 />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                 <Label htmlFor="maxHeight">Max. height</Label>
                 <TextField
                    id="maxHeight"
                    defaultValue="none"
                    className="col-span-2 h-8"
                 />
              </div>
           </div>
        </div>
    );

    return (
      <div className="grid grid-cols-2 gap-2">
        {placements.map((placement) => (
        <Popover key={placement} placement={placement} content={<Content />} className="w-80" >
            <Button>{placement}</Button>
        </Popover>
        ))}
    </div>
    )
}
