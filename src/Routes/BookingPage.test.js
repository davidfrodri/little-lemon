import { render, screen } from '@testing-library/react'
import { BookingPage } from './BookingPage'
import { MemoryRouter } from 'react-router-dom'

test('Renders the BookingForm heading', () => {
  render(
    <MemoryRouter>
      <BookingPage />
    </MemoryRouter>
  )
  const headingElement = screen.getByText('RESERVE A TABLE')
  expect(headingElement).toBeInTheDocument()
  const buttonElement = screen.getByText('Make Your Reservation')
  expect(buttonElement).toBeInTheDocument()
})
