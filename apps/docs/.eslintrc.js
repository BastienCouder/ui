/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: [
    "@repo/eslint-config/next.js",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: "module"
  },
  ignorePatterns: [
    // Ignore dotfiles
    "src/registry/ui/angular/**/*",
    "src/registry/ui/vue/**/*",
    "src/registry/demos/ui/angular/**/*",
    "src/registry/demos/ui/vue/**/*",
    "src/registry/demos/hooks/**/*",
    "src/navigation.js",
  ],
  plugins: [
    "react",
    "@typescript-eslint",
    "unused-imports"
  ],
  rules: {
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      { "vars": "all", "varsIgnorePattern": "^_", "args": "after-used", "argsIgnorePattern": "^_" }
    ],
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/explicit-module-boundary-types": [
      "warn",
      { "allowedNames": ["^get*", "^set*"] }
    ],
    "react/prop-types": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react/destructuring-assignment": [
      "warn",
      "always"
    ]
  }
};