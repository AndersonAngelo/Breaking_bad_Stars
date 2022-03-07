import styled from 'styled-components';

export const HeaderStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  img {
    width: 20rem;
  }
`;

export const FormContent = styled.form`
  display: flex;
  input {
    font-family: 'Source Serif 4', sans-serif;
    font-size: 2rem;
    color: #fff;
    border: transparent;
    border-bottom: solid 1px #000;
    background: transparent;
    margin: 4rem 0 0 30rem;
    padding-left: 0.8rem;
    padding-right: 3.8rem;
    width: 25rem;
    height: 4rem;
    transition: .2s ease;
    &:focus {
      background: rgba(13, 114, 44, 0.20);
      border-bottom: solid 3px #000;
    }
  }
  input::placeholder {
    opacity: 0.1;
    color: #000;
  }
  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration { display: none; }
`;