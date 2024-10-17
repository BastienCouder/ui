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
        <RadioGroupItem value="default" id="r1" disabled />
        <Label htmlFor="r1">Default (disabled)</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
    </RadioGroup>
  );
}
