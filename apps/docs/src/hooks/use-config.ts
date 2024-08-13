import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { IconLibrary } from "@/types/icons";
import type { Theme } from "@/types/theme";

type Config = {
  setTheme: (theme: Theme) => void;
  setMode: (mode: "light" | "dark") => void;
  iconLibrary: IconLibrary;
  setIconLibrary: (iconLibrary: IconLibrary) => void;
};

export const useConfig = create<Config>()(
  persist(
    (set) => ({
      style: "default",
      mode: "dark",
      iconLibrary: "lucide",
      setTheme: (theme: Theme) => set((state) => ({ ...state, theme })),
      setMode: (mode: "light" | "dark") => set((state) => ({ ...state, mode })),
      setIconLibrary: (iconLibrary: IconLibrary) => set((state) => ({ ...state, iconLibrary })),
    }),
    {
      name: "config",
    }
  )
);
