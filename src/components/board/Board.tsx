import styled from 'styled-components'
import { Hole } from 'components/board/hole/Hole'
import { Typography } from 'components/typography'
import { IHole } from 'configuration/constants'

interface BoardProps {
  title?: string
  boardHoles: IHole[]
  whackMole: (index: number, hole: IHole) => void
}

export const Board = ({ boardHoles = [], whackMole }: BoardProps) => {
  return (
    <Container>
      {boardHoles.map((hole, index) => (
        <Hole
          key={index}
          index={index}
          hole={hole}
          onClick={() => whackMole(index, hole)}
        >
          <Typography color='white' textStyle='h1' textAlign='center'>
            {hole.time}
          </Typography>
        </Hole>
      ))}
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(50px, 1fr));
  grid-template-rows: repeat(4, minmax(50px, 1fr));
  gap: ${props => props.theme.space.two}px;

  margin: ${props => props.theme.space.three}px auto;
  padding: 0 ${props => props.theme.space.one}px;

  width: 500px;
  max-width: calc(100% - ${props => props.theme.space.two}px);
  height: 500px;
`
