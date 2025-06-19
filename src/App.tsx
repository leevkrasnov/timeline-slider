import { ThemeProvider } from 'styled-components'
import { baseTheme } from './assets/styles/baseTheme'
import DefaultStyles from './assets/styles/defaultStyles'
import Fonts from './assets/styles/customFonts'

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
