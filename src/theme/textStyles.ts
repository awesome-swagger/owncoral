/*
Mixins for defining font styles. See full typography set here:

https://www.figma.com/file/UqsFod3JLcsbhPmXAZMPxQ/Coral---Team-Library?node-id=0%3A1

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

// Gilroy + system fonts
const hFont = {
  fontFamily: `Gilroy, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
    'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`,
};

// Gilroy + system font fallbacks
const bodyFont = {
  fontFamily: `Gilroy, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
  'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`,
};

export const h1 = {
  fontSize: `${96 / 16}rem`,
  fontWeight: 600,
  letterSpacing: `${-1.5 / 16}em`,
  ...hFont,
};

export const XLargeTitle = {
  fontSize: `${56 / 16}rem`,
  lineHeight: `${66 / 16}rem`,
  fontWeight: 600,
  letterSpacing: `${-0.4 / 16}em`,
  ...hFont,
};

export const LargeTitle = {
  fontSize: `${34 / 16}rem`,
  lineHeight: `${42 / 16}rem`,
  fontWeight: 600,
  letterSpacing: `${0.25 / 16}em`,
  ...hFont,
};

export const Title1 = {
  fontSize: `${28 / 16}rem`,
  lineHeight: `${34 / 16}rem`,
  fontWeight: 600,
  ...hFont,
};

export const Title2 = {
  fontSize: `${22 / 16}rem`,
  lineHeight: `${28 / 16}rem`,
  fontWeight: 600,
  ...hFont,
};

export const Title3 = {
  fontSize: `${20 / 16}rem`,
  lineHeight: `${24 / 16}rem`,
  fontWeight: 600,
  letterSpacing: `${0.15 / 16}em`,
  ...hFont,
};

export const Headline = {
  fontSize: `${16 / 16}rem`,
  lineHeight: `${22 / 16}rem`,
  fontWeight: 600,
  letterSpacing: `${0.15 / 16}em`,
  ...bodyFont,
};

export const Subhead = {
  fontSize: `${14 / 16}rem`,
  lineHeight: `${20 / 16}rem`,
  fontWeight: 400,
  letterSpacing: `${0.1 / 16}em`,
  ...bodyFont,
};

export const Body1 = {
  fontSize: `${16 / 16}rem`,
  lineHeight: `${22 / 16}rem`,
  fontWeight: 400,
  letterSpacing: `${0.5 / 16}em`,
  ...bodyFont,
};

export const Body2 = {
  fontSize: `${14 / 16}rem`,
  lineHeight: `${20 / 16}rem`,
  fontWeight: 400,
  letterSpacing: `${0.25 / 16}em`,
  ...bodyFont,
};

export const Button = {
  // Ignore MUI here, uppercase looks dated
  // text-transform: uppercase;
  fontSize: `${14 / 16}rem`,
  fontWeight: 500,
  letterSpacing: `${1.25 / 16}em`,
  ...bodyFont,
};

export const Caption1 = {
  fontSize: `${12 / 16}rem`,
  lineHeight: `${16 / 16}rem`,
  fontWeight: 400,
  letterSpacing: `${0.4 / 16}em`,
  ...bodyFont,
};

export const Caption2 = {
  fontSize: `${10 / 16}rem`,
  lineHeight: `${12 / 16}rem`,
  fontWeight: 400,
  letterSpacing: `${0.4 / 16}em`,
  ...bodyFont,
};

export const Overline = {
  textTransform: 'uppercase',
  fontSize: `${12 / 16}rem`,
  lineHeight: `${16 / 16}rem`,
  fontWeight: 700,
  letterSpacing: `${1.5 / 16}em`,
  ...bodyFont,
};
