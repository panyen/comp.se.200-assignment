module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+\\.js$": "babel-jest",
  },
  coverageProvider: 'babel',
  collectCoverage: true,
  collectCoverageFrom: ['src/toolsWeUsed/*.js'], 
};
