const babelOptions = {
  presets: ["@babel/react", "@babel/env", "babel-preset-gatsby"],
  plugins: [
    "@babel/plugin-proposal-optional-chaining",
    "@babel/plugin-transform-async-to-generator",
  ],
};

module.exports = require("babel-jest").createTransformer(babelOptions);
