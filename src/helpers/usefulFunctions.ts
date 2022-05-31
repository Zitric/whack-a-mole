export const getRandomInteger = (max: number): number =>
  Math.floor(Math.random() * max)

export const generateRandomIntegerInRange = (
  min: number,
  max: number,
): number => Math.floor(Math.random() * (max - min + 1)) + min

export const getMoleTime = (time: number): number =>
  time > 50
    ? 5
    : time > 40
    ? 4
    : time > 30
    ? 3
    : time > 20
    ? 2
    : time > 10
    ? 1
    : 0.5
