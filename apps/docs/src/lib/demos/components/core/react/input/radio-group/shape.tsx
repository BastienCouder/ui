"use client";

import {
  RadioGroup,
  RadioGroupItem,
} from "@/lib/components/core/default/react/input/radio-group";
import { Label } from "@/lib/components/core/default/react/input/label";

export default function RadioGroupDemo() {
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
