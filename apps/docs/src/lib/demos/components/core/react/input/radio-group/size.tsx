"use client";

import {
  RadioGroup,
  RadioGroupItem,
} from "@/lib/components/core/default/react/input/radio-group";
import { Label } from "@/lib/components/core/default/react/input/label";

export default function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="small">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="small" id="r1" size="sm" />
        <Label htmlFor="r1">Small</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="medium" id="r2" size="md" />
        <Label htmlFor="r2">Medium</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="large" id="r3" size="lg" />
        <Label htmlFor="r3">Large</Label>
      </div>
    </RadioGroup>
  );
}
