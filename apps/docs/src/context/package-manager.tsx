"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface PackageManagerContextType {
  packageManager: string;
  setPackageManager: (value: string) => void;
}

const PackageManagerContext = createContext<
  PackageManagerContextType | undefined
>(undefined);

export const PackageManagerProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [packageManager, setPackageManager] = useState<string>("npm");

  return (
    <PackageManagerContext.Provider
      value={{ packageManager, setPackageManager }}
    >
      {children}
    </PackageManagerContext.Provider>
  );
};

export const usePackageManager = (): PackageManagerContextType => {
  const context = useContext(PackageManagerContext);
  if (!context) {
    throw new Error(
      "usePackageManager must be used within a PackageManagerProvider",
    );
  }
  return context;
};
