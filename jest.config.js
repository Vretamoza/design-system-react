// jest.config.mjs
export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '\\.css$': 'jest-transform-stub', // Add CSS transformer
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],  // Add this line to specify the setup file
};
