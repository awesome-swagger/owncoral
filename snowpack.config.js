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
    // Trying out esbuild (vs. webpack) production bundles
    // "@snowpack/plugin-webpack",
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-typescript',
    'snowpack-plugin-svgr',
    '@snowpack/plugin-babel',
  ],
  // https://www.snowpack.dev/guides/routing
  routes: [
    // Proxy local API routes
    {
      src: '/api/.*',
      dest: (req, res) => {
        try {
          return proxy.web(req, res);
        } catch (e) {
          console.trace(e);
        }
      },
    },
    // Enable an SPA Fallback in development
    {
      match: 'routes',
      src: '.*',
      dest: '/index.html',
    },
  ],
  // https://www.snowpack.dev/guides/optimize-and-bundle
  optimize: {
    bundle: true,
    minify: true,
    treeshake: true,
    splitting: true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    sourcemap: true,
  },
};
