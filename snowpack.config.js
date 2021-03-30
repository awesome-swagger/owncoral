// eslint-disable-next-line @typescript-eslint/no-require-imports
const httpProxy = require('http-proxy');
const proxy = httpProxy.createServer({ target: 'http://localhost:3001' });

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: {
      url: '/dist',
    },
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-typescript',
    'snowpack-plugin-svgr',
    '@snowpack/plugin-webpack',
    '@snowpack/plugin-babel',
  ],
  // https://www.snowpack.dev/guides/routing
  routes: [
    // Proxy local API routes
    {
      src: '/api/.*',
      dest: (req, res) => proxy.web(req, res),
    },
    // Enable an SPA Fallback in development
    {
      match: 'routes',
      src: '.*',
      dest: '/index.html',
    },
  ],
  optimize: {
    /* Example: Bundle your final build: */
    bundle: true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
