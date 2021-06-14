import { css } from '@emotion/react';

const AppRootStyle = css`
  html {
    overflow-x: hidden;
  }

  body {
    width: 100vw;
    min-width: 360px; /* smallest common device size */
    overscroll-behavior: none;
    overflow-x: hidden;
    position: relative;
  }

  /*
  TODO: re-enable if we need to flex on font size
  html {
    // We size text at 85% at 360px, and 100% at 768px
    font-size: calc(85% + clamp(0%, 1.6 * ((100vw - 360px) / 408), 15%));
  }
   */
`;

// eslint-disable-next-line import/no-default-export
export default AppRootStyle;
