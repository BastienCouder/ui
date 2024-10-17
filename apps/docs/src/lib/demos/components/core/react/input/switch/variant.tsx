"use client";

import { Label } from "@/lib/components/core/default/react/input/label";
import { Switch } from "@/lib/components/core/default/react/input/switch";

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
