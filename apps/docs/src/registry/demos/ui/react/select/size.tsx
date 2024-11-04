"use client";

import { Select } from "@/registry/ui/react/select";

const sizes = ["sm", "md", "lg"] as const;

export default function SelectDemo(): JSX.Element {
  return (
    <div className="grid grid-cols-2 gap-2">
      {sizes.map((size) => (
        <Select
          className="w-[180px]"
          label="Fruits"
          key={size}
          options={[
            { label: "Apple", value: "apple" },
            { label: "Banana", value: "banana" },
            { label: "Blueberry", value: "blueberry" },
            { label: "Grapes", value: "grapes" },
            { label: "Pineapple", value: "pineapple" },
          ]}
          size={size}
        >
          {size}
        </Select>
      ))}
    </div>
  );
}
