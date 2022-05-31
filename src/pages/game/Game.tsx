import { useEffect } from 'react'
import { Page } from 'components/page'
import { Board } from 'components/board'
import { ScoreTable } from 'components/score-table'
import { useGameContext } from 'hooks/useGame'

export const Game = () => {
  const {
    boardHoles,
    timer,
    score,
    runHalfSecond,
    whackMole,
    setBombs,
    endGame,
  } = useGameContext()

  useEffect(() => {
    setBombs()
  }, [setBombs])

  useEffect(() => {
    const gameTimer = setTimeout(() => {
      if (timer > 0.5) {
        runHalfSecond()
      } else {
        endGame()
      }
    }, 500)
    return () => clearTimeout(gameTimer)
  }, [timer])

  return (
    <Page title={'Whack-a-mole'}>
      <ScoreTable timer={timer} score={score} />
      <Board boardHoles={boardHoles} whackMole={whackMole} />
    </Page>
  )
}
