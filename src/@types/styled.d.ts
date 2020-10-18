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
      gray: string;
      grayLight: string;
      grayMedium: string;
      border: string;
      borderMap: string;
      redLight: string;
      icon: string;
      active: string;
      title: string;
      description: string;
      backgroundMap: string;
      separator: string;
      scheduleGreen: string;
      borderGreen: string;
      green: string;
      greenLight: string;
      borderDashed: string;
      iconRed: string;
      dontOpenBorder: string;
      dontOpenBG: string;
    }
  }
}
