"use client";

import { Label } from "@/registry/ui/react/label";
import { Switch } from "@/registry/ui/react/switch";

export default function SwitchDemo(): JSX.Element {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center space-x-2">
        <Switch shape="rectangle" id="rectangle-switch" />
        <Label htmlFor="rectangle-switch">Rectangle</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch shape="circle" id="circle-switch" />
        <Label htmlFor="circle-switch">Circle</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch shape="square" id="square-switch" />
        <Label htmlFor="square-switch">Square</Label>
      </div>
    </div>
  );
}
