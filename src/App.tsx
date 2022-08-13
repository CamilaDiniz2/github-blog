import { ThemeProvider } from 'styled-components'
import { GithubApiProvider } from './contexts/GithubApiContext'
import { Home } from './pages/Home'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GithubApiProvider>
        <Home />
      </GithubApiProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
