import styled, { ThemeProvider } from 'styled-components'
import { baseTheme } from './assets/styles/baseTheme'
import DefaultStyles from './assets/styles/defaultStyles'
import Fonts from './assets/styles/customFonts'

import Dashboard from './components/Dashboard'
import HeaderTitle from './components/timeline/HeaderTitle'

const App = () => {
  return (
    <ThemeProvider theme={baseTheme}>
      <DefaultStyles />
      <Fonts />

      <Container>
        <HeaderTitle />
        <Dashboard />
      </Container>
    </ThemeProvider>
  )
}

const Container = styled.div`
  position: relative;

  height: 100dvh;
  width: min(75vw, 100vw);
  margin-left: clamp(1rem, 17vw, 20rem);
  padding-top: clamp(60px, 16vh, 170px);
  padding-bottom: clamp(20px, 5vh, 40px);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-left: 1px solid rgba(66, 86, 122, 0.1);
  border-right: 1px solid rgba(66, 86, 122, 0.1);

  background-color: ${({ theme }) => theme.colors.customWhite};

  @media (max-width: ${({ theme }) => theme.size.small}) {
    margin-left: 0;
    padding-left: 1.25rem;
    border-left: none;
    border-right: none;
    width: 100dvw;
  }
`

export default App
