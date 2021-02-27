const muiBodyFontScale = 16 / 16;
const muiBodyFontSpacing = 0.5 / 16;

export const typography = {
  letterSpacings: {
    tighter: `${muiBodyFontSpacing - 0.05}em`,
    tight: `${muiBodyFontSpacing - 0.025}em`,
    normal: `${muiBodyFontSpacing}em`,
    wide: `${muiBodyFontSpacing + 0.025}em`,
    wider: `${muiBodyFontSpacing + 0.05}em`,
    widest: `${muiBodyFontSpacing + 0.1}em`,
  },

  lineHeights: {
    normal: 'normal',
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: '2',
    '3': '.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '7': '1.75rem',
    '8': '2rem',
    '9': '2.25rem',
    '10': '2.5rem',
  },

  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },

  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },

  fontSizes: {
    xs: `${0.75 * muiBodyFontScale}rem`,
    sm: `${0.875 * muiBodyFontScale}rem`,
    md: `${muiBodyFontScale}rem`,
    lg: `${1.125 * muiBodyFontScale}rem`,
    xl: `${1.25 * muiBodyFontScale}rem`,
    '2xl': `${1.5 * muiBodyFontScale}rem`,
    '3xl': `${1.875 * muiBodyFontScale}rem`,
    '4xl': `${2.25 * muiBodyFontScale}rem`,
    '5xl': `${3 * muiBodyFontScale}rem`,
    '6xl': `${3.75 * muiBodyFontScale}rem`,
    '7xl': `${4.5 * muiBodyFontScale}rem`,
    '8xl': `${6 * muiBodyFontScale}rem`,
    '9xl': `${8 * muiBodyFontScale}rem`,
  },
};
