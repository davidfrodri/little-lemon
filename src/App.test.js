import { render, screen } from '@testing-library/react'
import App from './App'

test('renders App with correct routes', () => {
  render(<App />)

  const homePageText = screen.getByText('Little Lemon')
  expect(homePageText).toBeInTheDocument()

  const bookingPageText = screen.getByText('Reserve a Table')
  expect(bookingPageText).toBeInTheDocument()
})
