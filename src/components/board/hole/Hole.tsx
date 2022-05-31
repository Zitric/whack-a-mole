import styled from 'styled-components'
import { ReactElement, ReactNode } from 'react'
import { IHole } from 'configuration/constants'
import { theme } from 'styles/theme'

interface HoleProps {
  index?: number | null
  children?: ReactNode
  hole: IHole
  onClick: () => void
}

const { yellow, red, blue, black } = theme.colors

export const Hole = ({
  index = null,
  children,
  hole: { time, type },
  ...restProps
}: HoleProps): ReactElement => {
  const testId = index === null ? 'hole' : `hole-${index}`

  return (
    <Wrapper
      type={type}
      time={time}
      {...restProps}
      data-testid={testId}
    ></Wrapper>
  )
}

const getColor = ({ time, type }: IHole) =>
  time < 0
    ? yellow
    : time > 0
    ? type === 'bomb'
      ? red
      : type === 'mole'
      ? blue
      : black
    : black

const Wrapper = styled.div<IHole>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${props => props.theme.radii.lg}px;
  background-color: ${props => getColor(props)};
  cursor: ${props => (props.time > 0 ? 'pointer' : 'auto')};
`
