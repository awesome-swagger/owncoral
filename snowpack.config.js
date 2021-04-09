// eslint-disable-next-line @typescript-eslint/no-require-imports
const httpProxy = require('http-proxy');
const proxy = httpProxy.createServer({ target: 'http://localhost:3001' });

// This config is only (??) used for development (plugin-webpack maintains its own babel config),
// and applies to all source files (including e.g. shared-fullstack) via
// transpiling node_modules.
//
// Reference: https://github.com/snowpackjs/snowpack/blob/main/plugins/plugin-webpack/plugin.js
const babelConfig = {
  "presets": [
    [
      "@babel/preset-react",
      {
        "runtime": "automatic",
        "importSource": "@emotion/react"
      }
    ],
    "@babel/preset-typescript",
  ],
  "plugins": [
    "@emotion/babel-plugin",
    "@babel/plugin-syntax-import-meta",
  ]
};

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: {
      url: '/',
      static: true
    },
    src: {
      url: '/dist'
    },
  },
  plugins: [
    "@snowpack/plugin-webpack",
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-typescript',
    "snowpack-plugin-svgr",
    ["@snowpack/plugin-babel", {
      transformOptions: babelConfig
    }],
  ],
  // https://www.snowpack.dev/guides/routing
  routes: [
    // Proxy local API routes
    {
      src: '/api/.*',
      dest: (req, res) => {
        try {
          return proxy.web(req, res)
        } catch (e) {
          console.trace(e);
        }
      },
    },
    // Enable an SPA Fallback in development
    {
      "match": "routes",
      "src": ".*",
      "dest": "/index.html"
    },
  ],

  optimize: {
    /* Leave this empty (not compatible with webpack plugin) */
  },
  packageOptions: {
    "knownEntrypoints": ["@emotion/react/jsx-runtime"]
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    sourcemap: true
  },
};
