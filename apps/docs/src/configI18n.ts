import FlagFR from "./assets/locales/fr-flag";

export const locales = ["fr"] as const;

export const localeNames = {
  fr: { name: "Français", flag: FlagFR },
};

export const pathnames: any = {
  "/": "/",
  "/login": { fr: "/connexion" },
  "/register": { fr: "/inscription" },
  "/new-password": { fr: "/nouveau-mot-de-passe" },
  "/new-verfication": { fr: "/nouvelle-verification" },
  "/reset": { fr: "/réinitialiser" },
  "/courses": { fr: "/cours" },
  "/profile": { fr: "/profil" },
  "/courses/[courseId]/chapters/[chapterId]": {
    fr: "/cours/[courseId]/chapitre/[chapterId]",
  },
  "/settings": { fr: "/parametres" },
  "/dashboard/courses": { fr: "/dashboard/cours" },
  "/dashboard/courses/[courseId]": { fr: "/dashboard/cours/[courseId]" },
  "/dashboard/courses/[courseId]/chapters/[chapterId]": {
    fr: "/dashboard/cours/[courseId]/chapitre/[chapterId]",
  },
  "/dashboard/courses/[courseId]/chapters/[chapterId]/quizs/[quizId]": {
    fr: "/dashboard/cours/[courseId]/chapitres/[chapterId]/quiz/[quizId]",
  },
  "/dashboard/users": { fr: "/dashboard/utilisateurs" },
  "/cookie-policy": { fr: "/politique-de-cookies" },
  "/legal-information": { fr: "/mentions-legales" },
  "/privacy-policy": { fr: "/politiques-de-confidentialites" },
};

export const localePrefix = "as-needed";

export type AppPathnames = keyof typeof pathnames;
