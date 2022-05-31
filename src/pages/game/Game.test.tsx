import { screen } from '@testing-library/react'
import { render } from 'tests/utils'
import { MemoryRouter } from 'react-router-dom'
import { Game } from 'pages/game'
import { GameProvider } from 'hooks/useGame'

test('It should make the game works', () => {
  render(
    <GameProvider>
      <MemoryRouter>
        <Game />
      </MemoryRouter>
    </GameProvider>,
  )
})
