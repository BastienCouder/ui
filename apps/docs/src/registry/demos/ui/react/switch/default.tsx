"use client";

import { Label } from "@/registry/ui/react/label";
import { Switch } from "@/registry/ui/react/switch";

export default function SwitchDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  );
}
