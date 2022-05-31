import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/theme'
import { GlobalStyle } from 'styles/global'
import { Game } from 'pages/game'
import { GameProvider } from 'hooks/useGame'

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GameProvider>
        <Game />
      </GameProvider>
    </ThemeProvider>
  )
}
