import { HeaderStyle } from "./style";

import logo from '../../assets/logo.png'

export function Header() {
  return (
    <HeaderStyle>
      <img src={logo} alt="Breaking bad logo" />
    </HeaderStyle>
  )
}