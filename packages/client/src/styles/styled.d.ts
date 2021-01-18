import 'styled-components';
// import { DefaultTheme } from 'styled-components';

interface IPrimary {
  1: string;
  2: string;
  3: string;
}

interface IWhite {
  1: string;
  2: string;
}

interface IColors {
  primary: IPrimary;
  blue: string;
  white: IWhite;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: IColors;
  }
}
