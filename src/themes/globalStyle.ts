'use client';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  @font-face {
    font-family: 'HelveticaExtraBold';
    src: url('/fonts/HelveticaExtraBold.otf') format('opentype');
  }

  @font-face {
    font-family: 'HelveticaBold';
    src: url('/fonts/HelveticaBold.otf') format('opentype');
  }

  @font-face {
    font-family: 'HelveticaMedium';
    src: url('/fonts/HelveticaMedium.otf') format('opentype');
  }

  html,
  body {
    max-width: 100vw;
  }

  .noscroll {
    overflow-y: hidden;
  }

  body {
    color: ${({ theme }) => theme.commonColors.second};;
    background: ${({ theme }) => theme.primaryBackground};
    font-family: HelveticaMedium, sans-serif;
    position: relative;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4,
  p {
    margin: 0px;
  }

  ul,
  li {
    list-style: none;
    padding: 0px;
    margin: 0px;
  }

img {
  height: auto;
  display: block;
  max-width: 100%;
}

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.commonColors.neutral25};
    border-radius: 10px;
  }
  
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.neutral};
    border-radius: 10px;
  }
`;

export default GlobalStyle;
