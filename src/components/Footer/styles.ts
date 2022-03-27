import styled from 'styled-components';

export const FooterStyle = styled.div`
  position: absolute;
  height: 8rem;
  width: 100%;
  background: #000;
  bottom: -15rem;
  left: 0;

  .start {
    position: absolute;
    text-decoration: none;
    color: #fff;
    width: 5rem;
    height: 2rem;
    top: 1rem;
    left: 47.3%;
    transition: filter 0.2s ease-out;

    &:hover {
      filter: brightness(0.6);
    }
  }

  .defaultIcons {
    position: absolute;
    top: 1rem;
    img {
      transition: transform 0.2s ease-out;
      width: 2.5rem;
      &:hover {
        transform: scale(1.05)
      }
    }
  }

  .instagram {
    right: 25rem;
  }

  .facebook {
    right: 20rem;
  }

  .linkedin {
    right: 15rem;
  }

  .github {
    right: 10rem;
  }

  .contentCredits {
    position: absolute;
    display: grid;
    top: 1rem;
    left: 10rem;
    p {
      margin-bottom: 0.6rem;
    }
    a {
      text-decoration: none;
      margin-bottom: 0.3rem;
      color: #fff;
      font-size: 0.9rem;
      transition: filter 0.2s ease-out;

      &:hover {
        filter: brightness(0.6);
      }
    }
  }

 .copyright {
    position: absolute;
    font-size: 0.7rem;
    bottom: 1rem;
    left: 46.1%;
  }
`;