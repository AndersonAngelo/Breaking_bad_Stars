import { useContext } from "react";
import { CharacterStyle } from "./style";
import {SearchContext} from '../../contexts/Context'

interface Character {
  char_id: number;
  name: string;
  img: string;
}

export function Character() {
 const {character} = useContext(SearchContext)
 console.log(character)
  return (
    <CharacterStyle>
      {character?.map((character : Character) => (
          <div className='character' key={character.char_id}>
            <h2>{character.name}</h2>
            <img src={character.img} alt={character.name} />
          </div>
        ))}
    </CharacterStyle>
  )
 }
