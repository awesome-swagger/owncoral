# chakra

Themes for Chakra, mirroring [Chakra source repo structure](https://github.com/chakra-ui/chakra-ui/blob/main/packages/theme/src/).


## On style

We've implemented some aspects of [Material Design](https://material.io/design),
namely [Typography](./textStyles.ts) and [colors](foundations/colors.tsx).

We went a bit overboard on the colors and generated our own
[perceptually uniform palettes](https://observablehq.com/d/9156fe7f1051dca3) (using the OKLab 
color space).


## Usage

### Overview

Chakra has an extremely well-thought-out [theming system](https://chakra-ui.com/docs/theming/theme)
, and it's highly recommended that you familiarize yourself with it, as it will save you time 
and energy in making sure components have a beautiful, consistent appearance.

We've customized Chakra's default themes by tweaking styles to correspond more closely to Google 
Material Design guidelines. For example, [./textStyles.ts](./textStyles.ts) contains typography 
styles, which you can use like:

```js
<Text textStyle='caption'>This is a caption</Text>
```

We also extended Chakra's color system with `primary` (Coral-like) and `secondary` 
(ultramarine-like) color swatches. These should be the two main colors that we
use throughout the interface. For example, you can get a colored heading by:

```js
<Heading colorScheme='primary' variant='colored'>Colored Heading</Heading>
```

Please use color in a [meaningful way](https://material.io/design/color/the-color-system.html), to
draw the user's attention and to distinguish highlighted and active elements from other ones.


### Customization

Most new Chakra components that you use will need a slight bit of tweaking. If you use a new
component for the first time and don't see it customized here, consider doing so.

When you find yourself repeating the same styling props again and again, consider eliminating
the duplicate code by applying techniques in the following order:

1.  Extract styling props into the top level of the page component first. For example, instead of

    ```js
    const MyPage = () => <Box>
        <Box bgColor='primary.500' />
        <Box bgColor='primary.500' />
        <Box bgColor='primary.500' />
    </Box>
    ```
    
    do the obvious thing and extract out the color

2.  If you're repeating the same styling across components, consider adding the style to 
    [layerStyles.ts](./layerStyles.ts). This is just a bundle of styling props that can be applied
    to any Chakra component.
   
3.  If you find yourself repeatedly styling a built-in Chakra component, it's time to add to 
    [components](./components). Here you can define default props and styles for any built-in
    Chakra component. You can also define a 'variant', e.g.:
    
    ```js
    <Text variant='colored' colorScheme='primary'>Hello World!</Text>
    ```
    
    Here, the default `Text` component has no colors attached, but we defined a
    [custom variant](./components/text.ts) that correctly applies any `colorScheme` in both
    Light and Dark modes.
    
    The [Advanced Themeing](https://chakra-ui.com/docs/theming/advanced) Chakra docs have more
    details; you should also look at our existing themed components.
    
    Another great reference is the
    [default theme source code](https://github.com/chakra-ui/chakra-ui/tree/main/packages/theme/src),
    which shows exactly how the default theme works.
    

4.  If you're styling a big composite component that has no clear primary child component, it
    may be easiest to just style on your custom component. This often generates the most
    boilerplate and is the least reusable though, so see if one of the options above 
    (particularly using a `layerStyle`) might be simpler.
    
    In general prefer small and modular 'mix-in'-like bundles over deep hierarchies.
