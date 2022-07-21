const path = require('path');
module.exports = {
  // setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  // modulePaths: ['src'],
  moduleDirectories: ['node_modules'],
  transformIgnorePatterns: [],
  verbose: true,
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '@agito/chart-shared': path.join(__dirname, '../shared/es/'),
    '^@agito/chart-core': path.join(__dirname, '../core/es/'),
  },
};
