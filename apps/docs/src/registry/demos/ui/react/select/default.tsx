"use client";

import * as React from "react";

import { Select } from "@/registry/ui/react/select";

export default function SelectDemo(): JSX.Element {
  return (
    <Select
      className="w-[180px]"
      label="Fruits"
      options={[
        { label: "Apple", value: "apple" },
        { label: "Banana", value: "banana" },
        { label: "Blueberry", value: "blueberry" },
        { label: "Grapes", value: "grapes" },
        { label: "Pineapple", value: "pineapple" },
      ]}
    >
      Select a fruit
    </Select>
  );
}
