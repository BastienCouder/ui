"use client";

import { Checkbox } from "@/registry/ui/react/checkbox";
import { Label } from "@/registry/ui/react/label";

export default function LabelDemo(): JSX.Element {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
    </div>
  );
}
