"use client";

import {
  RadioGroup,
  RadioGroupItem,
} from "@/lib/components/core/default/react/input/radio-group";
import { Label } from "@/lib/components/core/default/react/input/label";

export default function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="default">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1" variant="neutral" />
        <Label htmlFor="r1">Neutral</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="primary" id="r2" variant="primary" />
        <Label htmlFor="r2">Primary</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="secondary" id="r3" variant="secondary" />
        <Label htmlFor="r3">Secondary</Label>
      </div>
    </RadioGroup>
  );
}
