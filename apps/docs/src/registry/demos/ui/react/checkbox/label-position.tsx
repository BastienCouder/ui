"use client";

import { Checkbox } from "@/registry/ui/react/checkbox";

export default function CheckboxDemo(): JSX.Element {
  return (
    <div className="space-y-4">
      <Checkbox labelPosition="left">Label on the left</Checkbox>
      <Checkbox labelPosition="right">Label on the right</Checkbox>
    </div>
  );
}
