import React, { useState, useEffect } from "react"
import "./QuoteComponent.css"

function QuoteComponent() {
  const [quote, setQuote] = useState("")
  const [author, setAuthor] = useState("")

  const getRandomNumber = (num) => {
    return Math.floor(Math.random() * num)
  }

  useEffect(() => {
    fetch("https://cyrus-shahrivar.github.io/simple-json-host/quotes.json")
      .then((response) => response.json())
      .then((quotes) => {
        const randomNumber = getRandomNumber(quotes.length)

        setQuote(quotes[randomNumber].quote)
        setAuthor(`- ${quotes[randomNumber].author}`)
      })
  }, [])

  return (
    <div className="quote-container" data-testid="quote-container">
      <div className="quote">{quote}</div>
      <div className="author">{author}</div>
    </div>
  )
}

export default QuoteComponent
