import React from 'react'

const Quote = ({ quote }) => {
  return (
    <div key={quote.id}>
      <p>"{quote.text}"</p>
      <p>- {quote.author}</p>
    </div>
  )
}

export default Quote