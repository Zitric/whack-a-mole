import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/theme'
import { Page } from 'components/page'

test('It should render the title', () => {
  render(
    <ThemeProvider theme={theme}>
      <Page title={'Whack-a-mole'} />
    </ThemeProvider>,
  )
  const title = screen.getByText(/Whack-a-mole/i)
  expect(title).toBeInTheDocument()
})
