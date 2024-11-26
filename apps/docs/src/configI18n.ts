import FlagFR from "./assets/locales/fr-flag";

export const locales = ["fr"] as const;

export const localeNames = {
  fr: { name: "Français", flag: FlagFR },
};

export const pathnames: any = {
  "/": "/",
};

export const localePrefix = "as-needed";

export type AppPathnames = keyof typeof pathnames;
