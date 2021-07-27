import { render, screen } from "@testing-library/react"
import GreetingComponent from "./GreetingComponent"

test("renders greeting component", () => {
  render(<GreetingComponent />)
  const greetingContainer = screen.getByTestId("greeting-container")
  expect(greetingContainer).toBeInTheDocument()
})
