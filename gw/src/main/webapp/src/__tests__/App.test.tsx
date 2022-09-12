import App from '../App'
import { render, screen } from "@testing-library/react";

describe('Renders page correctly', () => {
  it('Renders the main component', () => {
    render(<App />)
    expect(screen.getByText(/It works!/i)).toBeInTheDocument()
  })
})