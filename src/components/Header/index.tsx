import { FormContent, HeaderStyle } from "./style";
import { FormEvent, useState } from "react";
import axios from "axios";

import logo from '../../assets/logo.png'

export function Header() {
  const [searchCharacter, setSearchCharacter] = useState([])

  function handleSetCharacter(event: FormEvent) {
    event.preventDefault();
    //Desestruturação do value da textArea
    const {value} = ((event.target as HTMLTextAreaElement ))

    if(!value) {
      setSearchCharacter([])
      return;
    };

    const url = `https://www.breakingbadapi.com/api/characters?name=${value}`;

    axios(url).then(response => setSearchCharacter(response.data))

  }
  console.log('Data', searchCharacter)
  return (
    <HeaderStyle>
      <img src={logo} alt="Breaking bad logo" />
      <FormContent onSubmit={handleSetCharacter}>
        <input 
          type="search" 
          placeholder="Pesquisar"
          id="search"
          onChange={handleSetCharacter}
        />
      </FormContent>
    </HeaderStyle>
  )
}