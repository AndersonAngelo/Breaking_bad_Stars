import { createGlobalStyle } from 'styled-components';
import fumaca from '../assets/fumaca.png';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background-image: linear-gradient(0, #08190E 95%, #468C5F);
    font-family: 'Source Serif 4', sans-serif;
    font-size: 1.5rem;
    font-weight: 300;
    color: #FFF;
    -webkit-font-smoothing: antialiased;
  }

`;