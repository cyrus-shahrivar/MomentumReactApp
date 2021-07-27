import React, { useState, useEffect } from "react"
import "./QuoteComponent.css"
import quotes from "./Quotes.json"

function QuoteComponent() {
  const [quote, setQuote] = useState("")
  const [author, setAuthor] = useState("")

  const getRandomNumber = () => {
    return Math.floor(Math.random() * quotes.length)
  }

  useEffect(() => {
    const randomNumber = getRandomNumber()

    setQuote(quotes[randomNumber].quote)
    setAuthor(`- ${quotes[randomNumber].author}`)
  }, [])

  return (
    <div className="quote-container" data-testid="quote-container">
      <div className="quote">{quote}</div>
      <div className="author">{author}</div>
    </div>
  )
}

export default QuoteComponent
