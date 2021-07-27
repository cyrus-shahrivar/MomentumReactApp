import TimeComponent from "./TimeComponent/TimeComponent"
import GreetingComponent from "./GreetingComponent/GreetingComponent"
import QuoteComponent from "./QuoteComponent/QuoteComponent"
import "./App.css"

function App() {
  return (
    <div data-testid="app-container">
      <main>
        <TimeComponent />
        <GreetingComponent />
      </main>
      <footer>
        <QuoteComponent />
      </footer>
    </div>
  )
}

export default App
