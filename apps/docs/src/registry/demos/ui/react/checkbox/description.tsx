"use client";

import { Checkbox } from "@/registry/ui/react/checkbox";

export default function CheckboxDemo(): JSX.Element {
  return (
    <Checkbox description="This is additional information about the checkbox.">
      Option with description
    </Checkbox>
  );
}
