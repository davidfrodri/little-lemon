import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  test('renders footer component', () => {
    render(<Footer />)

    expect(screen.getByAltText('Little Lemon logo')).toBeInTheDocument()
    expect(screen.getByText('© 2023 Little Lemon Ltd. All rights reserved.')).toBeInTheDocument()
  })

  test('renders correct text content', () => {
    render(<Footer />)

    expect(screen.getByText('Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally sourced menu with daily specials.')).toBeInTheDocument()
    expect(screen.getByText('© 2023 Little Lemon Ltd. All rights reserved.')).toBeInTheDocument()
  })
})
