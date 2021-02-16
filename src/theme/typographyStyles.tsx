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

import { css,jsx } from '@emotion/react';

const hFont = css`
  /*
    Raleway has pretty, but funny-looking numbers.
    Switch back to standard 'lining numerals' instead of default 'text figures' for
    all headers.

    Reference
      https://medium.com/newsbrewer-app/what-s-wrong-with-one-of-the-most-elegant-typefaces-raleway-662e1e7bc7f7
  */
  font-family: Raleway, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
    'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-feature-settings: 'lnum';
`;

const hMargin = css`
  margin-block-start: 0.6em;
  margin-block-end: 0.6em;
`;

const bodyFont = css`
  font-family: 'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
    'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
`;

// Export header styles as 'mixins', so they can be reused to
// style large components without using header tags. Exclude
// setting a margin.
export const h1 = css`
  font-size: ${98 / 16}rem;
  font-weight: 300;
  letter-spacing: ${-1.5 / 16}em;
  ${hFont}
`;

export const h2 = css`
  font-size: ${61 / 16}rem;
  font-weight: 300;
  letter-spacing: ${-0.5 / 16}em;
  ${hFont}
`;

export const h3 = css`
  font-size: ${49 / 16}rem;
  font-weight: 400;
  ${hFont}
`;

export const h4 = css`
  font-size: ${35 / 16}rem;
  font-weight: 400;
  letter-spacing: ${0.25 / 16}em;
  ${hFont}
`;

export const h5 = css`
  font-size: ${24 / 16}rem;
  font-weight: 400;
  ${hFont}
`;

export const h6 = css`
  font-size: ${20 / 16}rem;
  font-weight: 500;
  letter-spacing: ${0.15 / 16}em;
  ${hFont}
`;

export const subTitle1 = css`
  fontsize: ${16 / 16}rem;
  font-weight: 400;
  letterspacing: ${0.15 / 16}em;
  ${bodyFont}
`;

export const subTitle2 = css`
  fontsize: ${14 / 16}rem;
  font-weight: 500;
  letterspacing: ${0.1 / 16}em;
  ${bodyFont}
`;

export const bodyText1 = css`
  font-size: ${17 / 16}rem;
  font-weight: 400;
  letter-spacing: ${0.5 / 16}em;
  ${bodyFont}
`;

export const bodyText2 = css`
  font-size: ${15 / 16}rem;
  font-weight: 400;
  letter-spacing: ${0.25 / 16}em;
  ${bodyFont}
`;

export const button = css`
  // Ignore MUI here, uppercase looks dated
  // text-transform: uppercase;
  font-size: ${15 / 16}rem;
  font-weight: 500;
  letter-spacing: ${1.25 / 16}em;
  ${bodyFont}
`;

export const caption = css`
  font-size: ${13 / 16}rem;
  font-weight: 400;
  letter-spacing: ${0.4 / 16}em;
  ${bodyFont}
`;

export const overline = css`
  text-transform: uppercase;

  font-size: ${10 / 16}rem;
  font-weight: 400;
  letter-spacing: ${1.5 / 16}em;
  ${bodyFont}
`;

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
