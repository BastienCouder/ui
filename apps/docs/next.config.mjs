/** @type {import("next").NextConfig} */
const config = {
    transpilePackages: ['next-mdx-remote','shiki'],
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "avatars.githubusercontent.com",
        },
        {
          protocol: "https",
          hostname: "images.unsplash.com",
        },
      ],
    },
  };
  
  export default config;
  