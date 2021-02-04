// NODE_ENV=test - Needed by "@snowpack/web-test-runner-plugin"
process.env.NODE_ENV = 'test';

module.exports = {
  // TODO: fix this in eslint configuration
  plugins: [require('@snowpack/web-test-runner-plugin')()] // eslint-disable-line
};
