import { screen } from '@testing-library/react'
import { render } from 'tests/utils'
import { ScoreTable } from 'components/score-table'

test('Is should show timer and score', () => {
  render(<ScoreTable timer={10} score={25} />)

  const component = screen.getByTestId('score-table')

  expect(component).toHaveTextContent('11')
  expect(component).toHaveTextContent('25')
})
