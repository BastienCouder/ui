"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { Select } from "@/registry/ui/react/select";

export default function SelectDemo(): JSX.Element {
  const [options, setOptions] = useState<{ label: string; value: string }[]>([]);

  const fetchFruitsData = async () => {

    const fruitsData = [
      { name: "Apple", id: 1 },
      { name: "Banana", id: 2 },
      { name: "Blueberry", id: 3 },
      { name: "Grapes", id: 4 },
      { name: "Pineapple", id: 5 }
    ];
    
    const formattedOptions = fruitsData.map(fruit => ({
      label: fruit.name,
      value: fruit.id.toString() 
    }));

    setOptions(formattedOptions);
  };

  useEffect(() => {
    fetchFruitsData();
  }, []);

  return (
    <Select
      className="w-[180px]"
      label="Fruits"
      options={options}
    >
      Select a fruit
    </Select>
  );
}
