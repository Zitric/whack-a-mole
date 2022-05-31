import { Box } from 'components/box'
import { Typography } from 'components/typography'

interface PageProps {
  title?: string
  children?: React.ReactNode
}

export const Page = ({ title, children }: PageProps) => (
  <Box
    minHeight='100vh'
    width='100vw'
    display='flex'
    justifyContent='center'
    flexDirection='column'
    alignItems='center'
    bg='green'
  >
    <>
      {!!title && (
        <header>
          <Box mb='one'>
            <Typography color='white' textStyle='h1' textAlign='center'>
              {title}
            </Typography>
          </Box>
        </header>
      )}
      {children}
    </>
  </Box>
)
