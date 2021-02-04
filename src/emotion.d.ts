import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    global: {
      height: {
        navbar: number
      },
      fontSizes: {
        xxl: string,
        xl: string,
        lg: string,
        md: string,
        base: string,
        sm: string,
      },
      mediaQueries: {
        lg: string,
        md: string,
        sm: string,
      },
    }
  }
}
