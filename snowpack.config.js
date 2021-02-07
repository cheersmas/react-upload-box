/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/_dist_' }
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-typescript'
  ],
  routes: [{ match: 'routes', src: '.*', dest: '/index.html' }],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {},
  devOptions: {
    port: 3000
  },
  buildOptions: {
    // update this configuration to wherever you wish to deploy your examples
    baseUrl: '/react-upload-box'
  }
};
