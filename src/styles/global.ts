import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    color-scheme: light;
    font-size: 62.5%;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    min-height: 100vh;
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.typography.fontFamily};
    background: #FFFFFF;
    color: ${({ theme }) => theme.colors.text};
    overflow-x: hidden;
  }

  #root {
    min-height: 100vh;
  }

  img {
    max-width: 100%;
    display: block;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font: inherit;
    border: none;
    background: none;
    cursor: pointer;
  }
`;


