"use client";

import { RadioGroup, RadioGroupItem } from "@/registry/ui/react/radio-group";
import { Label } from "@/registry/ui/react/label";

export default function RadioGroupDemo(): JSX.Element {
  return (
    <RadioGroup defaultValue="circle">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="rectangle" id="r1" shape="rectangle" />
        <Label htmlFor="r1">Rectangle</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="square" id="r2" shape="square" />
        <Label htmlFor="r2">Square</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="circle" id="r3" shape="circle" />
        <Label htmlFor="r3">Circle</Label>
      </div>
    </RadioGroup>
  );
}
