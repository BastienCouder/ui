"use client";

import { Checkbox } from "@/registry/ui/react/checkbox";

export default function CheckboxDemo(): JSX.Element {
  return (
    <div className="space-y-4">
      <Checkbox variant="neutral">Neutral Variant</Checkbox>
      <Checkbox variant="primary">Primary Variant</Checkbox>
      <Checkbox variant="secondary">Secondary Variant</Checkbox>
    </div>
  );
}
