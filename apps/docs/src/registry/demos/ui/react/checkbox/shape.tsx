"use client";

import { Checkbox } from "@/registry/ui/react/checkbox";

export default function CheckboxDemo(): JSX.Element {
  return (
    <div className="space-y-4">
      <Checkbox shape="rectangle">Rectangle Shape</Checkbox>
      <Checkbox shape="square">Square Shape</Checkbox>
      <Checkbox shape="circle">Circle Shape</Checkbox>
    </div>
  );
}
