import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,*::before, *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    min-height: 100vh;
    height: 100vh;
    width: 100vw;
    background-color: #a317ba;
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    padding: 2rem;
  }
`;
