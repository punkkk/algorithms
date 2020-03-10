module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRegex: '((\\.|/)test)\\.ts$',
  collectCoverage: true,
  "collectCoverageFrom": [
    "src/**/{!(assignment|index|app),}.ts"
  ]
};
