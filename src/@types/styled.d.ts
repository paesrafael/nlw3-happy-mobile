import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;
      white: string;
      whiteLight: string;
      black: string;
      text: string;
      blueMediumLight: string;
    }
  }
}
