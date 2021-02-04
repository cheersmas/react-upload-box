module.exports = {
  collectCoverage: true,
  coverageReporters: ['json', 'html'],
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.json'
    }
  },
  moduleDirectories: ['node_modules', __dirname, 'src'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': 'identity-obj-proxy'
  },
  preset: 'ts-jest/presets/js-with-babel',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom'
};
