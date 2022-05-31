export const HOLES_NUMBER = 16

export const GAME_TIME = 61

export interface IHole {
  time: number
  type: 'mole' | 'bomb'
}

export const HOLES_ARRAY: IHole[] = [...Array(HOLES_NUMBER)].map(() => ({
  time: 0,
  type: 'mole',
}))
