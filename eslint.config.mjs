import nextConfig from "eslint-config-next";
import tseslint from "typescript-eslint";

export default [
  ...nextConfig,
  {
    files: ["**/*.ts", "**/*.tsx"],
    plugins: {
      "@typescript-eslint": tseslint.plugin
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        sourceType: 'module'
      }
    },
    rules: {
      "no-unused-vars": "off",
      "no-undef": "off",
      "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
      "no-console": "warn",
      "react/no-unescaped-entities": "off",
      "react/no-children-prop": "off",
      "no-case-declarations": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-non-null-assertion": "warn",
      "@typescript-eslint/no-empty-function": "warn",
      "@typescript-eslint/no-empty-interface": "warn",
      "@typescript-eslint/no-inferrable-types": "warn",
      "@typescript-eslint/no-var-requires": "off",
      "react-hooks/set-state-in-effect": "warn",
      "react-hooks/refs": "warn"
    }
  }
];
