module.exports = {
  plugins: ['prettier'],
  "extends": ["plugin:prettier/recommended"],
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  rules: {
    'prettier/prettier': 'error'
  }
}
