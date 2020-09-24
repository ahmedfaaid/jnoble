import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primaryColor: string;
      secondaryColor: string;
      tertiaryColor: string;
      white: string;
      black: string;
    };
    fonts: {
      headings: string;
      body: string;
    };
  }
}

export const theme: DefaultTheme = {
  colors: {
    primaryColor: '#797a7e',
    secondaryColor: '#d8d3cd',
    tertiaryColor: '#e0ece4',
    white: '#ffffff',
    black: '#000000',
  },
  fonts: {
    headings: `'Baloo Tammudu 2', cursive`,
    body: `'Open Sans', sans-serif`,
  },
};
