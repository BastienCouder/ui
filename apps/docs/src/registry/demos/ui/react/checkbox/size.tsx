"use client";

import { Checkbox } from "@/registry/ui/react/checkbox";

export default function CheckboxDemo(): JSX.Element {
  return (
    <div className="space-y-4">
      <Checkbox size="sm">Small Checkbox</Checkbox>
      <Checkbox size="md">Medium Checkbox</Checkbox>
      <Checkbox size="lg">Large Checkbox</Checkbox>
    </div>
  );
}
