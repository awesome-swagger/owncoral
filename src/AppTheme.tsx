/** @jsxRuntime classic */
/** @jsx jsx */

import { css, Theme } from '@emotion/react';
import * as TypographyStyles from '@app/client-web/src/TypographyStyles';

const rnd2 = (n: number) => Math.round(n * 100) / 100;
const rnd4 = (n: number) => Math.round(n * 10000) / 10000;

/*
Palette generator:
https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=bc5151&secondary.color=3269ff
Reference:
https://material.io/design/color/the-color-system.html#tools-for-picking-colors

Material UI uses two main colors, with light and dark variants. It also uses white for background, and black
for foreground.

In light mode, the dark colors are used for foreground, and vice versa.

IMPORTANT: Stick to full-length hex colors (e.g. #FFFFFF), we will append to the end to set transparency
*/
const muiPalette = {
  p: '#bc5151',
  pLt: '#f2807d',
  pDk: '#872129',
  s: '#3269ff',
  sLt: '#7a96ff',
  sDk: '#003fcb',
};

const muiOverlay = {
  0: 0,
  1: 0.05,
  2: 0.07,
  3: 0.08,
  4: 0.09,
  6: 0.11,
  8: 0.12,
  12: 0.14,
  16: 0.15,
  24: 0.16,
};

// This is definitely overkill - take the Material UI depth-to-transparency map, and
// do linear interpolation on it
const overlayKeys = Object.keys(muiOverlay)
  .map((n) => parseInt(n, 10))
  .sort((a, b) => a - b);

const linInterpOverlay = (dp: number) => {
  let ki;
  for (ki = 0; ki < overlayKeys.length; ki++) {
    if (overlayKeys[ki] > dp) {
      break;
    }
  }

  if (ki === 0) return muiOverlay[overlayKeys[ki]];

  const dNext = overlayKeys[ki];
  const dPrev = overlayKeys[ki - 1];
  const oPrev = muiOverlay[dPrev.toString()];
  const oNext = muiOverlay[dNext.toString()];

  return oPrev + (dp - dPrev) * ((oNext - oPrev) / (dNext - dPrev));
};

// Drop HeaderStyles
const { HeaderStyles, ...TypographyMixins } = TypographyStyles;

export const AppTheme = (isDarkMode: boolean): Theme => ({
  navHeight: '65px',
  isDarkMode,
  mediaQueries: {
    lg: '(max-width: 992px)',
    md: '(max-width: 768px)',
    sm: '(max-width: 576px)',
  },
  colors: {
    ...muiPalette,
    // IMPORTANT: Stick to full-length hex colors (e.g. #FFFFFF), we will append to the end to set transparency

    // In light mode, the dark colors are used for foreground, and vice versa.
    ...(isDarkMode
      ? {
          bg: '#121212',
          bg2: '#282828',
          fg: '#ffffff',
          fg2: '#f0f0f0',
          pFg: muiPalette.pLt,
          pBg: muiPalette.pDk,
          sFg: muiPalette.sLt,
          sBg: muiPalette.sDk,
          // mui uses a white overlay with transparency to represent depth in dark mode
          // we can apply this to cards
          overlay: (elevation: number) => `rgba(255, 255, 255, ${rnd4(linInterpOverlay(elevation))})`,
        }
      : {
          bg: '#ffffff',
          bg2: '#f0f0f0',
          fg: '#000000',
          fg2: '#0f0f0f',
          pFg: muiPalette.pDk,
          pBg: muiPalette.pLt,
          sFg: muiPalette.sDk,
          sBg: muiPalette.sLt,
        }),
  },

  // Computed from https://gist.github.com/serglo/f9f0be9a66fd6755a0bda85f9c64e85f
  mdDepthShadow: (dp: number) =>
    !dp
      ? css`
          box-shadow: none;
        `
      : css`
          box-shadow: 0 ${dp}px ${rnd2((19 / 12) * dp)}px ${rnd2(dp / 8)}px rgba(0, 0, 0, 0.14),
            0 ${rnd2((3 / 8) * dp)}px ${rnd2((23 / 12) * dp)}px ${rnd2(dp / 3)}px rgba(0, 0, 0, 0.12),
            0 ${rnd2((11 / 24) * dp)}px ${rnd2((15 / 24) * dp)}px -${rnd2((7 / 24) * dp)}px rgba(0, 0, 0, 0.2);
        `,

  textStyles: TypographyMixins,
});
