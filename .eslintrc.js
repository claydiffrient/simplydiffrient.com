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
    "prettier/prettier": "error"
  },
  settings: {
    react: {
      version: "16"
    }
  }
};
