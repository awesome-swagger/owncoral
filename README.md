# franklin-web

This is a React-based web single-page application (SPA). We use
[Snowpack](https://www.snowpack.dev/) as development server and [Chakra-UI](https://chakra-ui.com/)
as the main component library.

## Best Practices

### Library Docs

We choose our frontend tools for having excellent docs, tutorials, and community
support. To maximize your effectiveness, get to know and love the docs for:
- [React](https://reactjs.org/docs/getting-started.html)
- [Chakra-UI](https://chakra-ui.com/docs/principles)

In addition, we have a subscription to [Chakra UI Pro](https://pro.chakra-ui.com/components), a
library of larger pre-built components that can be used as a quick reference. Bug Jimmy for access.

If you're new to these libraries, I (Jimmy) highly recommend just doing the
[React Tutorial](https://reactjs.org/tutorial/tutorial.html), which is excellent, and also making
small proof-of-concepts in [CodeSandbox](https://codesandbox.io/). This lets you easily
learn the libraries themselves, outside the context of our codebase.


### Components

Get to know the standard Chakra components, which offer
[syntactic niceties](https://chakra-ui.com/docs/features/style-props) for styling and generally
useful defaults for behavior and styling.

Of course, sometimes we do need to build our own components. Generally, we use a
[forwardRef](https://chakra-ui.com/guides/as-prop#option-1-using-forwardref-from-chakra-uireact)
to wrap the most specific-possible Chakra component (e.g. don't use a `Box` if you're just
going to turn it into a `Flex`).

Make sure you also use [ref forwarding](https://reactjs.org/docs/forwarding-refs.html) when
wrapping other React libraries.

Note: forwarding refs only makes sense when:

1. There's one clear 'wrapped' component
2. Your wrapper component is reusable—don't bother ref forwarding a top-level page component,
   for example


### Styling 101

Chakra-UI is a well-designed UI component library with good theming and styling support.

It's built on top of [Emotion](https://emotion.sh/docs/introduction) which encourages a CSS-in-JS
approach: don't bother naming CSS classes, style right in the component.

Here's an [idiomatic example](https://github.com/tyrell-chris/franklin-web/blob/d306aded13c357341178ce29c1cfa4cc577a6404/src/pages/login/index.tsx#L34)
of that approach.

Emotion offers a `css` prop on every DOM element for applying styles directly. In addition,
Chakra-UI encourages use of [style props](https://chakra-ui.com/docs/features/style-props) right 
on the component, while also offering easy responsive styling.

If it feels like there are a million ways to accomplish styling, that's because there are.

#### Rules of thumb

Try to apply styles in this order:

1. Is it just for this DOM element/component? Use a style prop, or the
   [`sx`](https://chakra-ui.com/docs/features/the-sx-prop) prop.
2. Is this a non-Chakra element? You can use `css` as a one-off, although most of the time, you
   should make a `Box` instead (especially for a responsive style).
3. Are you setting color or font styles? You should probably use the Chakra theme.
   Styles can be set on the [component](./src/theme/components)
   or [globally](./src/theme/foundations). For colors, mostly stick to the `primary`
   or `secondary` [color swatches](./src/theme/foundations/colors.ts).
   
   See our [theme README](./src/theme/README.MD) for more suggestions.
4. Lastly, you can apply global CSS through a Chakra
   [layer style](https://chakra-ui.com/docs/features/text-and-layer-styles), or in 
   [AppRootStyle.tsx](src/AppRootStyle.tsx). You shouldn't need this very often. 

One last thing: Prefer using `rem` or `em` for font sizes, and `rem` or a space number for most 
small sizes (e.g. `<Box m={2}>Tomato</Box>`). By default, the number `4` means `1rem`.

Try to only use pixel sizes for long distances. This is because we set a global responsive 
`font-size`, and `rem` scales with that while `px` does not. 


## Boilerplate Below...

> ✨ Bootstrapped with Create Snowpack App (CSA).

## Available Scripts

### npm start

Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### npm run build

Builds a static copy of your site to the `build/` folder.
Your app is ready to be deployed!

**For the best production performance:** Add a build bundler plugin like "@snowpack/plugin-webpack" to your `snowpack.config.js` config file.

### npm test

Launches the application test runner.
Run with the `--watch` flag (`npm test -- --watch`) to run in interactive watch mode.
