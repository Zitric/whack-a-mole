import constate from 'constate'
import { useState, useCallback } from 'react'
import { HOLES_ARRAY, GAME_TIME, IHole } from 'configuration/constants'
import {
  getRandomInteger,
  generateRandomIntegerInRange,
  getMoleTime,
} from 'helpers/usefulFunctions'

const useGameHook = () => {
  const [timer, setTimer] = useState<number>(GAME_TIME)
  const [boardHoles, setBoardHoles] = useState<IHole[]>([...HOLES_ARRAY])
  const [boardHolesShot, setBoardHolesShot] = useState<IHole[]>([])
  const [molesInARow, setMolesInARow] = useState<number>(0)
  const [score, setScore] = useState<number>(0)
  const [bombsIntervals, setBombsIntervals] = useState<number[]>([])

  const updateAcitveHole = ({ time, type }: IHole): IHole =>
    time > 0 ? { time: time - 0.5, type } : { time: 0, type: 'mole' }

  const upNewHoleOrBomb = useCallback(
    (timer: number): IHole =>
      bombsIntervals.includes(timer)
        ? { time: 3, type: 'bomb' }
        : { time: getMoleTime(timer), type: 'mole' },
    [bombsIntervals],
  )

  const setBombs = useCallback(() => {
    const bombsNumber = getRandomInteger(4)
    ;[...Array(bombsNumber)].forEach(() => {
      setBombsIntervals([
        ...bombsIntervals,
        generateRandomIntegerInRange(1, 60),
      ])
    })
  }, [setBombsIntervals, bombsIntervals])

  const runHalfSecond = useCallback(() => {
    for (const [index, hole] of boardHoles.entries()) {
      boardHoles[index] = updateAcitveHole(hole)
    }

    if (timer < GAME_TIME && timer % 1 === 0) {
      let newPosition = -1
      while (newPosition < 0) {
        newPosition = getRandomInteger(HOLES_ARRAY.length)
        if (boardHoles[newPosition].time > 0) newPosition = -1
      }
      boardHoles[newPosition] = upNewHoleOrBomb(timer)
    }

    setBoardHoles([...boardHoles])
    setTimer(timer - 0.5)
  }, [setBoardHoles, setTimer, boardHoles, timer, upNewHoleOrBomb])

  const scoreUp = useCallback(
    (molesInARow: number, index: number) => {
      if (boardHolesShot.length > 0 && boardHolesShot[index].time > 0) {
        boardHolesShot[index].time = 0
        setBoardHolesShot([...boardHolesShot])
        setScore(
          score + Math.pow(4, molesInARow) - Math.pow(4, molesInARow - 1),
        )
        setMolesInARow(molesInARow + 1)
      } else {
        setBoardHolesShot([...boardHoles])
        setScore(score + 1)
        setMolesInARow(1)
      }
    },
    [
      setBoardHolesShot,
      setScore,
      setMolesInARow,
      boardHolesShot,
      boardHoles,
      score,
    ],
  )

  const endGame = useCallback(() => {
    setTimer(0)
    setBoardHoles([...HOLES_ARRAY])
  }, [setBoardHoles])

  const whackMole = useCallback(
    (index: number, { time, type }: IHole) => {
      if (time) {
        boardHoles[index].time = -1
        setBoardHoles([...boardHoles])
        type === 'mole' ? scoreUp(molesInARow, index) : endGame()
      }
    },
    [setBoardHoles, boardHoles, molesInARow, scoreUp, endGame],
  )

  return {
    boardHoles,
    boardHolesShot,
    molesInARow,
    timer,
    score,
    bombsIntervals,
    setTimer,
    runHalfSecond,
    whackMole,
    setBombs,
    endGame,
  }
}

const [GameProvider, useGameContext] = constate(useGameHook)

export { GameProvider, useGameContext }
