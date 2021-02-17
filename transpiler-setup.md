# transpiler-setup

Describes how we set up Typescript (for type-checking) and Babel (for transpilation,
both for dev and production).

We're using Snowpack, slightly off the beaten path, so worth taking notes.

## Overview

We're using the new JSX transform, which means that instead of jsx tags being
turned into `React.createElement` calls, they're instead turned into `_jsx`
(actually `___EmotionJSX` for us, more below).

This allows us to not have to import `React` everywhere. Since we're also
using Emotion and Typescript, there are some extra steps:

- [tsconfig.json](./tsconfig.json) takes
  ```
  "jsx": "preserve",
  "jsxImportSource": "@emotion/react",
  ```
- [.babelrc](./babelrc) specifies the new runtime ('automatic') and refers to
  emotion's `jsx`
  
- We need the additional `babel-plugin-transform-node-env-inline` plugin to make the combo
of Snowpack and Babel happy
  
## Debugging

If everyone's set up right, if you open 'Sources' in Chrome DevTools and look at
a `dist` file (say, `dist/App.js`), you should see something like:

`import { jsx as ___EmotionJSX } from "../_snowpack/pkg/@emotion/react.js";`

This is is the Emotion JSX transform being substituted for the default React one.


References:

- https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html
- https://emotion.sh/docs/css-prop#babel-preset
