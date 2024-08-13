/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@repo/eslint-config/next.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  ignorePatterns: [
    // Ignore dotfiles
    "src/lib/components/core/default/angular/**/*",
    "src/lib/components/core/default/vue/**/*",
    "src/lib/demos/components/core/angular/**/*",
    "src/lib/demos/components/core/vue/**/*",
    "src/lib/demos/hooks/**/*",
    "src/navigation.js",
  ],
};
