const parent = require('jest.config.base')(__dirname);
module.exports = {
  ...parent,
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
};
