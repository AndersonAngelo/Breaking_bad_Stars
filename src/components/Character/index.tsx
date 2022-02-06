import { useEffect, useState } from "react";
import api from "../../services/api";

import { CharacterStyle, FumacaStyle } from "./style";

import fumaca from '../../assets/fumaca.png';

interface Character {
  img: string;
  name: string;
  char_id: number;
}


export function Character() {

  const [character, setCharacter] = useState<Character[]>([]);

  useEffect(() => {
    async function character() {
      try {
        const response = await api.get('/characters')

        setCharacter(response.data)
      } catch (e) {
        console.log(e)
      }
    }
    character()
  }, [])

  console.log(character)

  return (
    <CharacterStyle>
      {character &&
        character.map(character => (
          <div className='character' key={character.char_id}>
            <h2>{character.name}</h2>
            <img src={character.img} alt={character.name} />
          </div>
        ))}
    </CharacterStyle>
  )
}
