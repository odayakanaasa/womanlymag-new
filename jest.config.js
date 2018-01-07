// jest.config.js
module.exports = {
  verbose: true,
  testPathIgnorePatterns: ['node_modules', '.cache/'],
  setupTestFrameworkScriptFile: './src/setupTests.js',
  transform: {
    '.(js|jsx)': 'babel-jest',
  },
};
