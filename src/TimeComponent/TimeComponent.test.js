import { render, screen } from "@testing-library/react"
import TimeComponent from "./TimeComponent"

test("renders time component", () => {
  render(<TimeComponent />)
  const timeContainer = screen.getByTestId("time-container")
  expect(timeContainer).toBeInTheDocument()
})
