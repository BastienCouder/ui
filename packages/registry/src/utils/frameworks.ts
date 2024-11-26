export const FRAMEWORKS = {
  "next-app": {
    name: "next-app",
    label: "Next.js",
    links: {
      installation: "https://ui.bastiencouder.com/docs/installation/next",
      tailwind: "https://tailwindcss.com/docs/guides/nextjs",
    },
  },
  "next-pages": {
    name: "next-pages",
    label: "Next.js",
    links: {
      installation: "https://ui.bastiencouder.com/docs/installation/next",
      tailwind: "https://tailwindcss.com/docs/guides/nextjs",
    },
  },
  remix: {
    name: "remix",
    label: "Remix",
    links: {
      installation: "https://ui.bastiencouder.com/docs/installation/remix",
      tailwind: "https://tailwindcss.com/docs/guides/remix",
    },
  },
  vite: {
    name: "vite",
    label: "Vite",
    links: {
      installation: "https://ui.bastiencouder.com/docs/installation/vite",
      tailwind: "https://tailwindcss.com/docs/guides/vite",
    },
  },
  astro: {
    name: "astro",
    label: "Astro",
    links: {
      installation: "https://ui.bastiencouder.com/docs/installation/astro",
      tailwind: "https://tailwindcss.com/docs/guides/astro",
    },
  },
  laravel: {
    name: "laravel",
    label: "Laravel",
    links: {
      installation: "https://ui.bastiencouder.com/docs/installation/laravel",
      tailwind: "https://tailwindcss.com/docs/guides/laravel",
    },
  },
  gatsby: {
    name: "gatsby",
    label: "Gatsby",
    links: {
      installation: "https://ui.bastiencouder.com/docs/installation/gatsby",
      tailwind: "https://tailwindcss.com/docs/guides/gatsby",
    },
  },
  manual: {
    name: "manual",
    label: "Manual",
    links: {
      installation: "https://ui.bastiencouder.com/docs/installation/manual",
      tailwind: "https://tailwindcss.com/docs/installation",
    },
  },
  angular: {
    name: "angular",
    label: "Angular",
    links: {
      installation: "https://angular.io/guide/setup-local",
      tailwind: "https://tailwindcss.com/docs/guides/angular",
    },
  },
  vue: {
    name: "vue",
    label: "Vue.js",
    links: {
      installation: "https://vuejs.org/guide/quick-start.html",
      tailwind: "https://tailwindcss.com/docs/guides/vue-3-vite",
    },
  },
  nuxt: {
    name: "nuxt",
    label: "Nuxt.js",
    links: {
      installation: "https://nuxt.com/docs/getting-started/installation",
      tailwind: "https://tailwindcss.com/docs/guides/nuxtjs",
    },
  },
} as const;

export type Framework = (typeof FRAMEWORKS)[keyof typeof FRAMEWORKS];

export async function getFramework(framework: string): Promise<string | null> {
  // Extraire le nom du framework à partir de FRAMEWORKS, sinon retourner null si le framework n'existe pas
  const selectedFramework =
    FRAMEWORKS[framework as keyof typeof FRAMEWORKS] || null;

  if (!selectedFramework) {
    return null;
  }

  switch (selectedFramework.name) {
    case "next-app":
    case "next-pages":
    case "remix":
    case "gatsby":
    case "vite":
      return "react";

    case "vue":
    case "nuxt":
      return "vue";

    case "angular":
      return "angular";

    case "astro":
    case "laravel":
    case "manual":
      return "other";

    default:
      return "other";
  }
}
