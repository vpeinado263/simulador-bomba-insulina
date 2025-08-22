// eslint.config.js
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: process.cwd(),
});

export default [
  ...compat.extends("eslint:recommended", "plugin:react/recommended"),
  {
    files: ["frontend/**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "react/react-in-jsx-scope": "off", // Next.js no requiere import React
    },
  },
  {
    files: ["backend/**/*.js"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
      },
    },
    rules: {
      "no-console": "off",
    },
  },
];
