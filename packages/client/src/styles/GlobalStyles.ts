import { createGlobalStyle } from 'styled-components';
import { theme as t } from './Theme';

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  body {
    font-family: 'Open Sans', sans-serif;
    background-color: ${t.colors.white[2]};
  }
`;
