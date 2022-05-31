const colors = {
  white: '#F7F5F2',
  red: '#EB5353',
  blue: '#187498',
  green: '#36AE7C',
  yellow: '#F9D923',
  black: '#383838',
}

const space = { one: 8, two: 16, three: 24, four: 32, five: 50 }

const sizes = {
  ...space,
}

const radii = {
  sm: 4,
  md: 6,
  lg: 10,
}

const textStyles = {
  h1: {
    fontWeight: 600,
    fontSize: '32px',
    lineHeight: '36px',
  },
  h2: {
    fontWeight: 500,
    fontSize: '28px',
    lineHeight: '24px',
  },
  body: {
    fontSize: '16px',
    lineHeight: '20px',
  },
}

const theme = {
  textStyles,
  colors,
  space,
  radii,
  sizes,
}

export { theme }
