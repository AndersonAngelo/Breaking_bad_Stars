import { useEffect, createContext, useState, ReactNode, FormEvent } from 'react';
import api from '../services/api';

interface SearchProviderProps {
  children: ReactNode;
}

export const SearchContext = createContext<any>({});

export function SearchProvider({ children }: SearchProviderProps) {

  const [character, setCharacter] = useState([]);

  async function getCharacters() {
   
    try {
      const response = await api.get('/characters')

      setCharacter(response.data)
    } catch (e) {
      console.log(e)
    }
  }
  
  async function handleSearch(event: FormEvent) {
    event.preventDefault();
    //Desestruturação do value da textArea
    const { value } = ((event.target as HTMLTextAreaElement))
    if (!value) {
      getCharacters()
      return;
    };
    const response = await api.get(`/characters?name=${value}`)
    setCharacter(response.data)
    console.log(response)
  }


  useEffect(() => {
    getCharacters()
  }, [])


  return (
    <SearchContext.Provider  value={{handleSearch, character}}>
      {children}
    </SearchContext.Provider>
  )
}