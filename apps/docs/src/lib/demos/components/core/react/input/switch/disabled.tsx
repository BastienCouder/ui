"use client";

import { Label } from "@/lib/components/core/default/react/input/label";
import { Switch } from "@/lib/components/core/default/react/input/switch";

export default function SwitchDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Switch disabled id="disabled-switch" />
      <Label htmlFor="disabled-switch">Disabled</Label>
    </div>
  );
}
