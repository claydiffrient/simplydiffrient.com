module.exports = {
  transform: {
    "^.+\\.(j|t)sx?$": "<rootDir>/jest-preprocess.js",
  },
  testRegex: "/.*(__tests__\\/.*)|(.*(test|spec))\\.jsx?$",
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": "identity-obj-proxy",
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
  },
  testPathIgnorePatterns: ["node_modules", ".cache"],
  transformIgnorePatterns: ["node_modules/(?!(gatsby)/)"],
  globals: {
    __PATH_PREFIX__: "",
  },
  snapshotSerializers: ["@emotion/jest/serializer"],
  testURL: "http://localhost",
  setupFiles: [
    "<rootDir>/loadershim.js",
    "<rootDir>/node_modules/regenerator-runtime/runtime",
  ],
  setupFilesAfterEnv: ["<rootDir>/setup-test-env.js"],
};
