/*
Mixins defining Material Design Type system.
Based on generated code at:
https://material.io/design/typography/the-type-system.html#type-scale
using 'Raleway' and 'Nunito'


Note that we're using 'rem' units for font sizes because we'll
be defining a global scale at the root (html) tag.

If we use 'em', then multiple applications of a mixin will multiply together
(e.g. 2em in parent, 2em in descendant gets you 4em).

If we use 'px', then root scaling is ignored. So rem for all the mixins,
and individual adjustments at the tag level should use 'em'.

For other sizes (margins, letter-spacing), we use em to be relative to the
_current_ font-size.

References
- https://css-tricks.com/rems-ems/
- https://zellwk.com/blog/rem-vs-em/
- https://codepen.io/liujimj/pen/xxRgwmE
*/

import { css, jsx } from '@emotion/react';

const hFont = {
  /*
    Raleway has pretty, but funny-looking numbers.
    Switch back to standard 'lining numerals' instead of default 'text figures' for
    all headers.

    Reference
      https://medium.com/newsbrewer-app/what-s-wrong-with-one-of-the-most-elegant-typefaces-raleway-662e1e7bc7f7
  */
  fontFamily: `Raleway, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
    'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`,
  fontFeatureSettings: 'lnum',
};

const hMargin = {
  marginBlockStart: '0.6em',
  marginBlockEnd: '0.6em',
};

const bodyFont = {
  fontFamily: `'Nunito', - apple - system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 
  'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`,
};

// Export header styles as 'mixins', so they can be reused to
// style large components without using header tags. Exclude
// setting a margin.
export const h1 = {
  fontSize: `${98 / 16}rem`,
  fontWeight: 300,
  letterSpacing: `${-1.5 / 16}em`,
  ...hFont,
};

export const h2 = {
  fontSize: `${61 / 16}rem`,
  fontWeight: 300,
  letterSpacing: `${-0.5 / 16}em`,
  ...hFont,
};

export const h3 = {
  fontSize: `${49 / 16}rem`,
  fontWeight: 400,
  ...hFont,
};

export const h4 = {
  fontSize: `${35 / 16}rem`,
  fontWeight: 400,
  letterSpacing: `${0.25 / 16}em`,
  ...hFont,
};

export const h5 = {
  fontSize: `${24 / 16}rem`,
  fontWeight: 400,
  ...hFont,
};

export const h6 = {
  fontSize: `${20 / 16}rem`,
  fontWeight: 500,
  letterSpacing: `${0.15 / 16}em`,
  ...hFont,
};

export const subTitle1 = {
  fontSize: `${16 / 16}rem`,
  fontWeight: 400,
  letterSpacing: `${0.15 / 16}em`,
  ...bodyFont,
};

export const subTitle2 = {
  fontSize: `${14 / 16}rem`,
  fontWeight: 500,
  letterSpacing: `${0.11 / 16}em`,
  ...bodyFont,
};

export const bodyText1 = {
  fontSize: `${17 / 16}rem`,
  fontWeight: 400,
  letterSpacing: `${0.5 / 16}em`,
  ...bodyFont,
};

export const bodyText2 = {
  fontSize: `${15 / 16}rem`,
  fontWeight: 400,
  letterSpacing: `${0.25 / 16}em`,
  ...bodyFont,
};

export const button = {
  // Ignore MUI here, uppercase looks dated
  // text-transform: uppercase;
  fontSize: `${15 / 16}rem`,
  fontWeight: 500,
  letterSpacing: `${1.25 / 16}em`,
  ...bodyFont,
};

export const caption = {
  fontSize: `${13 / 16}rem`,
  fontWeight: 400,
  letterSpacing: `${0.4 / 16}em`,
  ...bodyFont,
};

export const overline = {
  textTransform: 'uppercase',

  fontSize: `${10 / 16}rem`,
  fontWeight: 400,
  letterSpacing: `${1.5 / 16}em`,
  ...bodyFont,
};

export const HeaderStyles = css`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    ${hMargin}
  }

  h1 {
    ${h1}
  }

  h2 {
    ${h2}
  }

  h3 {
    ${h3}
  }

  h4 {
    ${h4}
  }

  h5 {
    ${h5}
  }

  h6 {
    ${h6}
  }
`;
