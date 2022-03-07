import { createGlobalStyle } from 'styled-components';

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
    background-image: linear-gradient(0, #08190E 95%, #468C5F 100%);
    font-family: 'Source Serif 4', sans-serif;
    font-size: 1.5rem;
    font-weight: 300;
    color: #FFF;
    -webkit-font-smoothing: antialiased;
    -webkit-overflow-scrolling: touch;
  }

  body::-webkit-scrollbar {
  width: 12px;              
  }

  body::-webkit-scrollbar-track {
    background: #08190E;       
  }

  body::-webkit-scrollbar-thumb {
    background-color: #468C5F;    
    border-radius: 3px;       
    border: .5px solid #08190E; 
  }


  .ReactModal__Overlay {
    opacity: 0;
    transition: opacity 300ms ease-in-out;
  }

  .ReactModal__Overlay--after-open {
    opacity: 1;

    .modal-container {
      padding: 0 0 0 60px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 32px;
      position: relative;
    }

    .image-character {
      img {
        width: 25rem;
        height: 33rem;
        object-fit: cover;
        box-shadow: 2px -1.5px 1em #000;
      }
    }

    .description-container {
      padding: 0 0 0 100px;
      h2 {
        color: #468C5F;
      }

      p {
          padding: 0px 0 19px 15px;
          color: #000;
          font-weight: 400;
      }
    }

    .react-modal-close {
      position: absolute;
      background: transparent;
      border: none;
      right: 1rem;
      margin: 0;
      padding: 0;
      transition: filter .2s;

      &:hover {
        filter: brightness(0.8)
      }
    }
  }

`;