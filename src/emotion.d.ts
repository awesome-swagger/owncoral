import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    global: {
      colors: {
        black: string,
        white: string,
      },
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
