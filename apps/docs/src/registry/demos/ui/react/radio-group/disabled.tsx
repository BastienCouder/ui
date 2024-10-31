"use client";

import { RadioGroup, RadioGroupItem } from "@/registry/ui/react/radio-group";
import { Label } from "@/registry/ui/react/label";

export default function RadioGroupDemo(): JSX.Element {
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
