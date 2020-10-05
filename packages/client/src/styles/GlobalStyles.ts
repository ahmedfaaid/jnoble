import { createGlobalStyle } from 'styled-components';
import { theme as t } from './theme';

export const GlobalStyles = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
        min-height: 100%;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
    content: '';
    content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    *, *:focus {
        outline: none !important;
        box-sizing: border-box;
    }
    html {
        font-size: 10px;
        font-family: ${t.fonts.body};
        height: 100%;
    }
    body {
        background: #fff;
        min-height: 100vh;
    }
    a {
        text-decoration: none;
    }
    button {
        border: none;
        background: none;
    }
    hr {
        height: 1px;
        border: none;
        background-color: ${t.colors.primaryColor};
    }
    h1, h2, h3, h4, h5, h6 {
        font-family: ${t.fonts.headings};
    }
`;
