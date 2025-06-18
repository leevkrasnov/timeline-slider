import { ThemeProvider } from 'styled-components'
import { baseTheme } from './styles/baseTheme'
import DefaultStyles from './styles/defaultStyles'
import Fonts from './styles/customFonts'

import Dashboard from './components/Dashboard'

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
