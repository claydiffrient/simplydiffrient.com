module.exports = {
  plugins: ["prettier", "react", "security"],
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:security/recommended",
    "prettier/react"
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
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
