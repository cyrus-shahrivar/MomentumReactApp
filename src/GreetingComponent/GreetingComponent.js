import React, { useEffect, useState } from "react"
import "./GreetingComponent.css"
import { getGreeting } from "./GreetingHelpers"

function GreetingComponent() {
  const [greeting, setGreeting] = useState(getGreeting(new Date().getHours()))

  const updateGreeting = () => {
    setGreeting(getGreeting())
  }

  useEffect(() => {
    const timerId = setInterval(() => {
      updateGreeting()
    }, 20000)

    return () => {
      clearInterval(timerId)
    }
  }, [])

  return (
    <div className="greet" data-testid="greeting-container">
      {greeting}
    </div>
  )
}

export default GreetingComponent
