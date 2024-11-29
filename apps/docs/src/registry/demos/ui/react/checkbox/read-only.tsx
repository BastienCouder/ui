"use client";

import { Checkbox } from "@/registry/ui/react/checkbox";

export default function CheckboxDemo(): JSX.Element {
  return (
    <Checkbox readOnly defaultChecked>
      Read-Only Option
    </Checkbox>
  );
}
