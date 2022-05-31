import { screen } from '@testing-library/react'
import { render } from 'tests/utils'
import { HOLES_ARRAY, HOLES_NUMBER } from 'configuration/constants'
import { Board } from 'components/board'

test('It should render the same number of holes as array length', async () => {
  render(<Board boardHoles={[...HOLES_ARRAY]} whackMole={() => null} />)

  const allHoles = await screen.findAllByTestId('hole')
  expect(allHoles).toHaveLength(HOLES_NUMBER)
})
