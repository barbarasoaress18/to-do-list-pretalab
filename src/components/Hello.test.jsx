import { beforeEach, test } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Hello from './Hello'

/**
* @vitest-environment jsdom
*/

beforeEach(() => {
  render(<Hello />)
})

test('deve mostrar Olá', () => {
  expect(screen.getByText('Hello,')).toBeInTheDocument()
})

test('deve mostrar o Olá e o nome quando a entrada for preenchida', () => {
  const inputElement = screen.getByTestId('name-input')
  
  fireEvent.change(inputElement, {
    target:{
      value: "Bárbara"
    }
  })

  expect(screen.getByText('Hello,')).toBeInTheDocument()
  expect(screen.getByText('Bárbara')).toBeInTheDocument()
})