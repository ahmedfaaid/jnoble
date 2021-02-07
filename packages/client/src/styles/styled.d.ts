import 'styled-components';

interface IPrimary {
  1: string;
  2: string;
  3: string;
  4: string;
}

interface IWhite {
  1: string;
  2: string;
  3: string;
}

interface IGrey {
  1: string;
  2: string;
  3: string;
}

interface IColors {
  primary: IPrimary;
  blue: string;
  white: IWhite;
  green: string;
  red: string;
  grey: IGrey;
}

interface IShadow {
  1: string;
  2: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: IColors;
    shadow: IShadow;
  }
}
