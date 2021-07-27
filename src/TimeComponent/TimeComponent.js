import React, { useEffect, useState } from "react"
import "./TimeComponent.css"

function TimeComponent(params) {
  const [date, setDate] = useState(new Date().toLocaleTimeString())

  const tick = () => {
    setDate(new Date().toLocaleTimeString())
  }

  useEffect(() => {
    const timerId = setInterval(() => {
      tick()
    }, 1000)

    return () => {
      clearInterval(timerId)
    }
  }, [])

  return (
    <div className="time" data-testid="time-container">
      {date}
    </div>
  )
}

export default TimeComponent
