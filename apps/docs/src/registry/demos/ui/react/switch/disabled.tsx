"use client";

import { Label } from "@/registry/ui/react/label";
import { Switch } from "@/registry/ui/react/switch";

export default function SwitchDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Switch disabled id="disabled-switch" />
      <Label htmlFor="disabled-switch">Disabled</Label>
    </div>
  );
}
