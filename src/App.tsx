import { ContainerWrapper, GlobalStyle } from './styles/global';
import { Character } from './components/Character';
import { Header } from './components/Header';
import { SearchProvider } from './contexts/Context.jsx';
import { Footer } from './components/Footer';

export function App() {
  
  return (
    <SearchProvider>
      <ContainerWrapper>
        <Header />
        <Character />
        <Footer />
      </ContainerWrapper>
      <GlobalStyle />
    </SearchProvider>
  )

}
