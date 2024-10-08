"use client";

import { Checkbox } from "@/lib/components/core/default/react/input/checkbox";
import { Label } from "@/lib/components/core/default/react/input/label";

export default function LabelDemo() {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
    </div>
  );
}
