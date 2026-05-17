import nextConfig from "eslint-config-next";
import tseslint from "typescript-eslint";

const config = [
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
      "@typescript-eslint/no-unused-vars": "off",
      "no-console": "off",
      "react/no-unescaped-entities": "off",
      "react/no-children-prop": "off",
      "no-case-declarations": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-empty-interface": "off",
      "@typescript-eslint/no-inferrable-types": "off",
      "@typescript-eslint/no-var-requires": "off",
      "react-hooks/set-state-in-effect": "off",
      "react-hooks/refs": "off",
      "react-hooks/exhaustive-deps": "off",
      "react-hooks/static-components": "off",
      "@next/next/no-page-custom-font": "off",
      "@typescript-eslint/no-var-requires": "off"
    }
  }
];

export default config;
