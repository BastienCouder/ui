"use client";

import { Select } from "@/registry/ui/react/select";

const shapes = [ "rounded" , "square" , "circle" ] as const;

export default function SelectDemo(): JSX.Element {
  return (
    <div className="grid grid-cols-2 gap-2">
      {shapes.map((shape) => (
       <Select className="w-[180px]" label="Fruits"
          key={shape}
          options={[
            { label: "Apple", value: "apple" },
            { label: "Banana", value: "banana" },
            { label: "Blueberry", value: "blueberry" },
            { label: "Grapes", value: "grapes" },
            { label: "Pineapple", value: "pineapple" },
          ]}
          shape={shape}
        >
        {shape}
        </Select>
      ))}
    </div>
  );
}
