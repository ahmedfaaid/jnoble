import { createGlobalStyle } from 'styled-components';
import { theme as t } from './Theme';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    vertical-align: baseline;
  }
  html {
    font-size: 62.5%;
  }
  body {
    font-family: 'Open Sans', sans-serif;
    background-color: ${t.colors.white[2]};
  }
`;
