"use client";

import { Label } from "@/lib/components/core/default/react/input/label";
import { Switch } from "@/lib/components/core/default/react/input/switch";

export default function SwitchDemo() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center space-x-2">
        <Switch size="sm" id="small-switch" />
        <Label htmlFor="small-switch">Small</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch size="md" id="medium-switch" />
        <Label htmlFor="medium-switch">Medium</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch size="lg" id="large-switch" />
        <Label htmlFor="large-switch">Large</Label>
      </div>
      </div>
  );
}
