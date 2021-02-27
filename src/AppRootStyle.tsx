import { css } from '@emotion/react';

const AppRootStyle = css`
  html {
    // overscroll-behavior: none;
  }

  body {
    min-width: 360px; /* smallest common device size */
    overscroll-behavior: none;
  }

  html {
    // We size text at 85% at 360px, and 100% at 768px
    font-size: calc(85% + clamp(0%, 1.6 * ((100vw - 360px) / 408), 15%));
  }
`;

// eslint-disable-next-line import/no-default-export
export default AppRootStyle;
