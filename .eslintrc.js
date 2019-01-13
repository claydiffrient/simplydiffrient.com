module.exports = {
  plugins: ["prettier", "react", "security"],
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:security/recommended",
    "prettier/react"
  ],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    node: true,
    es6: true,
    jest: true
  },
  rules: {
    "prettier/prettier": "error",
    "react/prop-types": "warn",
    "react/no-unescaped-entities": "off"
  },
  settings: {
    react: {
      version: "16"
    }
  }
};
