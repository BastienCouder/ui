"use client";

import { Label } from "@/registry/ui/react/label";
import { Switch } from "@/registry/ui/react/switch";

export default function SwitchDemo() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center space-x-2">
        <Switch variant="neutral" id="neutral-switch" />
        <Label htmlFor="neutral-switch">Neutral</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch variant="primary" id="primary-switch" />
        <Label htmlFor="primary-switch">Primary</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch variant="secondary" id="secondary-switch" />
        <Label htmlFor="secondary-switch">Secondary</Label>
      </div>
    </div>
  );
}
