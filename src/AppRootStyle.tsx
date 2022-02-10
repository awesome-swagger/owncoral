import { css } from '@emotion/react';

const AppRootStyle = css`
  html {
    overflow-x: hidden;

    /* TODO: re-enable if we need to flex on font size */
    // We size text at 100% at 360px, and 110% at 768px
    font-size: calc(100% + clamp(0%, 16 * 0.1 * ((100vw - 360px) / (768 - 360)), 10%));
  }

  body {
    width: 100vw;
    min-width: 360px; /* smallest common device size */
    overscroll-behavior: none;
    overflow-x: hidden;
    position: relative;
  }
`;

// eslint-disable-next-line import/no-default-export
export default AppRootStyle;
