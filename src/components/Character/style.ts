import styled from 'styled-components';


export const CharacterStyle = styled.div`
  margin: 6rem 6rem 6rem 7.5rem;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;

  h2 {
    padding: 0.5rem 0;
    font-size: 1.5rem;
  }
  img {
    width: 20rem;
    height: 25rem;
    box-shadow: 2px -1.5px 1em #000;
    object-fit: cover;
    transition: transform 0.4s ease;
    &:hover {
      cursor: pointer;
      transform: scale(1.05);
    }
  }
`;