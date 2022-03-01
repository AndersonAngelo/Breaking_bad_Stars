import { GlobalStyle } from './styles/global';
import { Character } from './components/Character';
import { Header } from './components/Header';
import { SearchProvider } from './contexts/Context.jsx';

export function App() {
  
  return (
    <SearchProvider>
      <Header />
      <Character />
      <GlobalStyle />
    </SearchProvider>
  )

}
