"use client";

import { Label } from "@/registry/ui/react/label";
import { Switch } from "@/registry/ui/react/switch";

export default function SwitchDemo(): JSX.Element {
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
