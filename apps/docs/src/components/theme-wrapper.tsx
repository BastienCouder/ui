"use client";

import React, { useEffect } from "react";
import { useMounted } from "@/hooks/use-mounted";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

interface ThemeWrapperProps extends React.ComponentProps<"div"> {
  children: React.ReactNode;
  metadataColor: "react" | "angular" | "vue";
}

export function ThemeWrapper(props: ThemeWrapperProps): JSX.Element {
  const { children, metadataColor } = props;
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();
  const pathname = usePathname();

  useEffect(() => {
    if (metadataColor) {
      setTheme(metadataColor);
    }
  }, [metadataColor, setTheme]);

  useEffect(() => {
    setTheme(metadataColor);
  }, [pathname, metadataColor, setTheme]);

  const themeClass = mounted ? `${theme || "dark"}` : "dark";

  return (
    <div className={`w-full h-full ${themeClass}`}>
      {mounted ? children : null}
    </div>
  );
}
