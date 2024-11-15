"use client";

import { usePackageManager } from "@/context/package-manager";
import { Select } from "@/registry/ui/react/select";
import React from "react";

export default function SelectPackageManager(): JSX.Element {
  const { packageManager, setPackageManager } = usePackageManager();

  const handleSelectChange = (value: string) => {
    setPackageManager(value);
  };

  return (
    <div>
      <Select
        size="sm"
        value={packageManager}
        onValueChange={handleSelectChange}
        options={[
          { label: "npm", value: "npm" },
          { label: "pnpm", value: "pnpm" },
          { label: "yarn", value: "yarn" },
        ]}
      >{packageManager}
    </Select>
    </div>
  );
}
