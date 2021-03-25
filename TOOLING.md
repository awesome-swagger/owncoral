# TOOLING

Describes how we set up Typescript (for type-checking) and Babel (for transpilation,
both for dev and production).

We're using Snowpack, slightly off the beaten path, so worth taking notes.

## Overview

Snowpack serves source files locally for development, and is also the frontend to
webpack production builds via a plugin.

Note that Snowpack wraps up a lot of magic by itself so that things generally work,
but it's not always immediately obvious how it's happening, especially if you're
used to a standard CRA or webpack tooling.

For example, we have a separate `tsconfig.json` that differs from the backend config. We only run
Typescript here for type-checking, not for building.

Snowpack is can bundle Typescript, even though we set `noEmit: true`,
because Snowpack itself runs [esbuild](https://github.com/evanw/esbuild)
(which doesn't type-check, but can turn Typescript format into standard ES6).

Snowpack runs `tsc` as type-checker via `@snowpack/plugin-typescript`.  Similarly, we use 
`@snowpack/plugin-babel` to support the new JSX syntax above, and production build is handed 
off to Webpack via `@snowpack/plugin-webpack`.

In general, the magic works well, but if you run into issues, the project's
[discussion forum](https://github.com/snowpackjs/snowpack/discussions/) is
active and helpful. Most fixes involve overriding the various Snowpack plugins' default
configuration, as we did above.

For how tooling in the rest of the project works, see
[`../../TOOLING.md`](../../TOOLING.md). 


## JSX transform

At a high level, the way the legacy JSX transform works is that when Babel sees some JSX syntax,
it turns it into a call to `React.createElement` in the transpiled output.

This is why you need to import `React` in any JSX file, even if you never reference
it directly in the source.


Hoewver, we're using the
[new JSX transform](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html),
JSX is instead turned into calls to a `_jsx` function (actually `___EmotionJSX` for us, more on 
that below).

This allows us to not have to import `React` everywhere. Since we're also
using Emotion and Typescript, there are some extra steps to get things playing
well together:

- [tsconfig.json](./tsconfig.json) takes
  ```
  "jsx": "preserve",
  "jsxImportSource": "@emotion/react",
  ```
- [.babelrc](./babelrc) specifies the new runtime ('automatic') and refers to
  emotion's `jsx`
  
- We need the additional `babel-plugin-transform-node-env-inline` plugin to make the combo
of Snowpack and Babel happy


Typescript also needs to understand what's going, so the Typescript config
basically says that when we're type-checking, we should leave the JSX tags alone (TODO: clarify 
this point, seems we should techncally use `react-jsx` instead?).

The Babel config then makes sure we're importing Emotion's version of `_jsx`,
rather than the default React transform.

TODO: Also hot-reload sibling/common packages under @app (e.g. for shared
types). References:

- https://github.com/snowpackjs/snowpack/discussions/938
- https://github.com/snowpackjs/snowpack/discussions/2536
- https://github.com/horacioh/snowpack-monorepo/tree/main
- https://github.com/edmulraney/snowpack-monorepo/tree/master/packages/typescript-config


## Debugging

If everyone's set up right, if you open 'Sources' in Chrome DevTools and look at
a `dist` file (say, `dist/App.js`), you should see something like:

`import { jsx as ___EmotionJSX } from "../_snowpack/pkg/@emotion/react.js";`

This is the Emotion JSX transform being substituted for the default React one.


References:

- https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html
- https://emotion.sh/docs/css-prop#babel-preset
