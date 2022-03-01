import { FormContent, HeaderStyle } from './style';
import { useContext } from 'react';
import logo from '../../assets/logo.png'
import { SearchContext } from '../../contexts/Context';


export function Header() {

  const {handleSearch} = useContext(SearchContext)

  return (
    <HeaderStyle>
      <img src={logo} alt="Breaking bad logo" />
      <FormContent>
        <input
          type="search"
          placeholder="Pesquisar"
          id="search"
          onChange={(e) => handleSearch(e)}
        />
      </FormContent>
    </HeaderStyle>
  )
}