import Dashboard from './components/Dashboard'
import { baseTheme } from './styles/baseTheme'
import DefaultStyles from './styles/defaultStyles'
import Fonts from './styles/customFonts'
import { ThemeProvider } from 'styled-components'

const App = () => {
  return (
    <ThemeProvider theme={baseTheme}>
      <DefaultStyles />
      <Fonts />

      <Dashboard />
    </ThemeProvider>
  )
}

export default App
