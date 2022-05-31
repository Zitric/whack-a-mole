import { screen } from '@testing-library/react'
import { render } from 'tests/utils'
import { Hole } from 'components/board/hole'

describe('Test scenarios to check the hole status', () => {
  test('It should be render ', async () => {
    render(<Hole hole={{ time: 0, type: 'mole' }} onClick={() => null} />)

    const component = screen.getByTestId('hole')
    expect(component).toBeInTheDocument()
  })
  test('It should have background color black', async () => {
    render(<Hole hole={{ time: 0, type: 'mole' }} onClick={() => null} />)

    const component = screen.getByTestId('hole')

    expect(component).toHaveStyle({ 'background-color': 'black' })
  })

  test('It should have background color red', async () => {
    render(<Hole hole={{ time: 1, type: 'bomb' }} onClick={() => null} />)

    const component = screen.getByTestId('hole')

    expect(component).toBeInTheDocument()
    expect(component).toHaveStyle({ 'background-color': 'red' })
  })

  test('It should be render a Whack with background color yellow', async () => {
    render(<Hole hole={{ time: -1, type: 'mole' }} onClick={() => null} />)

    const component = screen.getByTestId('hole')
    expect(component).toHaveStyle({ 'background-color': 'yellow' })
  })
})
