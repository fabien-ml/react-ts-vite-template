module.exports = {
  // The root of the source code, `<rootDir>` is a token Jest substitutes
  roots: ["<rootDir>/src/"],

  // The test environment that will be used for testing, jsdom for browser environment
  testEnvironment: "jsdom",

  // Jest transformations -- this adds support for TypeScript using ts-jest
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },

  // Runs special logic, such as cleaning up components
  // when using React Testing Library and adds special
  // extended assertions to Jest
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],

  // Ignore cypress e2e test files
  testPathIgnorePatterns: ["<rootDir>/cypress/"],

  // Code coverage config
  collectCoverageFrom: ["<rootDir>/src/**/*.{ts,tsx}"],
  coverageDirectory: "<rootDir>/coverage/",
  coveragePathIgnorePatterns: ["<rootDir>/node_modules/", "(.*).d.ts$"],

  // Return proxies object for CSS modules via identity-obj-proxy
  moduleNameMapper: {
    "^.+\\.module\\.(css|scss)$": "identity-obj-proxy",
  },
};
