import { Box } from 'components/box'
import { Typography } from 'components/typography'

interface PageProps {
  timer: number
  score: number
  children?: React.ReactNode
}

export const ScoreTable = ({ timer, score }: PageProps) => {
  const showTimer = (timer: number): number =>
    timer < 1 ? 0 : timer > 60 ? 60 : Number(timer.toFixed(0))

  return (
    <Box
      display='flex'
      justifyContent='center'
      flexDirection='column'
      alignItems='start'
      data-testid='score-table'
    >
      <Box mb='one'>
        <Typography color='white' textStyle='h2' textAlign='center'>
          Time: {showTimer(timer + 0.5)}
        </Typography>
      </Box>
      <Box mb='one'>
        <Typography color='white' textStyle='h2' textAlign='center'>
          Score: {score.toFixed(0)}
        </Typography>
      </Box>
    </Box>
  )
}
