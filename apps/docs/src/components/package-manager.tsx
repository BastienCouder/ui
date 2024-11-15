"use client";

import { usePackageManager } from "@/context/package-manager";
import React, { useEffect, useState } from "react";

export default function PackageManager(): JSX.Element {
  const { packageManager } = usePackageManager();
  const [install, setInstall] = useState<string>("install");

  useEffect(() => {
    switch (packageManager) {
      case "npm":
        setInstall("npm install");
        break;
      case "yarn":
        setInstall("yarn add");
        break;
      case "pnpm":
        setInstall("pnpm add");
        break;
      default:
        setInstall("install");
        break;
    }
  }, [packageManager]);

  return <div>{install}</div>;
}
