import '@emotion/react';
import { SerializedStyles } from '@emotion/serialize';

declare module '@emotion/react' {
  export interface Theme {
    navHeight: string;
    isDarkMode: boolean;
    colors: {
      p: string;
      pLt: string;
      pDk: string;
      s: string;
      sLt: string;
      sDk: string;
      bg: string;
      bg2: string;
      fg: string;
      fg2: string;
      pBg: string;
      pFg: string;
      sBg: string;
      sFg: string;
      overlay?: (dp: number) => string;
    };
    mediaQueries: {
      lg: string;
      md: string;
      sm: string;
    };
    textStyles: {
      subTitle1: SerializedStyles;
      subTitle2: SerializedStyles;
      bodyText1: SerializedStyles;
      bodyText2: SerializedStyles;
      button: SerializedStyles;
      caption: SerializedStyles;
      overline: SerializedStyles;
      h1: SerializedStyles;
      h2: SerializedStyles;
      h3: SerializedStyles;
      h4: SerializedStyles;
      h5: SerializedStyles;
      h6: SerializedStyles;
    };
    mdDepthShadow: (dp: number) => SerializedStyles;
  }
}
