
import { Theme } from "@emotion/react";

export const theme: Theme = {
  global: {
    height: {
      navbar: 75
    },
    fontSizes: {
      xxl: '2.5em', // 40px
      xl: '1.75em', // 28px
      lg: '1.25em', // 20px
      md: '1.125em', // 18px
      base: '1em', // 16px
      sm: '.875em', // 14px
    },
    mediaQueries: {
      lg: '(max-width: 992px)',
      md: '(max-width: 768px)',
      sm: '(max-width: 576px)',
    },
  }
};
