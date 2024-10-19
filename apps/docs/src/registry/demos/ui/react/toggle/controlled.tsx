"use client";

import { Toggle } from "@/registry/ui/react/toggle";
import { Pin } from "@/lib/icons";
import { useState } from "react";

export default function ToggleDemo() {
  const [isSelected, setSelected] = useState(true);

  return (
    <Toggle isSelected={isSelected} onPressedChange={setSelected}>
      <Pin className="rotate-45" />
    </Toggle>
  );
}
