const babelOptions = {
  presets: ["@babel/react", "@babel/env"],
  plugins: [
    "@babel/plugin-proposal-optional-chaining",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-transform-async-to-generator"
  ]
};

module.exports = require("babel-jest").createTransformer(babelOptions);
