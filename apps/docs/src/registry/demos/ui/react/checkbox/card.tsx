"use client";

import { Checkbox } from "@/registry/ui/react/checkbox";

export default function CheckboxDemo(): JSX.Element {
  return (
    <Checkbox card cardClassName="border-gray-300 hover:border-gray-500">
      Card styled checkbox
    </Checkbox>
  );
}
