import { render, screen } from "@testing-library/react"
import QuoteComponent from "./QuoteComponent"

test("renders quote component", () => {
  render(<QuoteComponent />)
  const quoteContainer = screen.getByTestId("quote-container")
  expect(quoteContainer).toBeInTheDocument()
})
