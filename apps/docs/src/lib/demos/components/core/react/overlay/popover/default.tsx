"use client";

import { Label } from "@/lib/components/core/default/react/input/label";
import { Button } from "@/lib/components/core/default/react/buttons/button";
import { TextField } from "@/lib/components/core/default/react/input/text-field";
import { Popover } from "@/lib/components/core/default/react/overlay/popover";

export default function PopoverDemo() {

    const Content = () => (
        <div className="flex flex-col gap-5 sm:gap-4">
            <div className="space-y-2">
                <h4 className="font-medium leading-none">Dimensions</h4>
                <p className="text-muted-foreground text-sm">
                    Set the dimensions for the layer.
                </p>
            </div>
            <div className="flex flex-col gap-4 sm:gap-2">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                    <Label htmlFor="width">Width</Label>
                    <TextField
                        id="width"
                        defaultValue="100%"
                    />
                </div>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                    <Label htmlFor="maxWidth">Max. width</Label>
                    <TextField
                        id="maxWidth"
                        defaultValue="300px"
                    />
                </div>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                    <Label htmlFor="height">Height</Label>
                    <TextField
                        id="height"
                        defaultValue="25px"
                    />
                </div>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                    <Label htmlFor="maxHeight">Max. height</Label>
                    <TextField
                        id="maxHeight"
                        defaultValue="none"
                    />
                </div>
            </div>
        </div>
    );

    return (
        <Popover
            content={<Content />} >
            <Button>Open popover</Button>
        </Popover>
    )
}
