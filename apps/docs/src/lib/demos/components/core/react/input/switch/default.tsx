"use client";

import { Label } from "@/lib/components/core/default/react/input/label";
import { Switch } from "@/lib/components/core/default/react/input/switch";

export default function SwitchDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  );
}
