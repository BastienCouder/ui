"use client";

import { Select } from "@/registry/ui/react/select";

const variants = [ "primary" , "secondary" , "outline" , "neutral"] as const;

export default function SelectDemo(): JSX.Element {
  return (
    <div className="grid grid-cols-2 gap-2">
      {variants.map((variant) => (
       <Select className="w-[180px]" label="Fruits"
          key={variant}
          options={[
            { label: "Apple", value: "apple" },
            { label: "Banana", value: "banana" },
            { label: "Blueberry", value: "blueberry" },
            { label: "Grapes", value: "grapes" },
            { label: "Pineapple", value: "pineapple" },
          ]}
          variant={variant}
        >
        {variant}
        </Select>
      ))}
    </div>
  );
}
