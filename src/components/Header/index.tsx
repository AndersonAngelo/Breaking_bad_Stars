import { FormContent, HeaderStyle } from './style';
import { useContext } from 'react';
import { SearchContext } from '../../contexts/Context';

import logo from '../../assets/logo.png';
import estrela from '../../assets/estrela.png';

export function Header() {

  const {handleSearch} = useContext(SearchContext)

  return (
    <HeaderStyle>
      <img src={logo} alt="Breaking bad logo" />
      <div className='starLogo'>
        <img src={estrela} alt="Ìcone de estrela" />
      </div>
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