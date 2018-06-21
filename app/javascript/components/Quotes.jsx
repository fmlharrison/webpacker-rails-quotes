import React from 'react'
import Quote from './Quote'

class Quotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: this.props.quotes,
      currentQuote: 0,
      quotesCount: this.props.quotes.length
    };
  }

  showQuote = () => {
    const quote = this.state.quotes[this.state.currentQuote]

    return (
      <Quote quote={quote} />
    )
  }

  nextQuote = () => {
    let nextQuoteIndex = this.state.currentQuote + 1

    if (nextQuoteIndex === this.state.quotesCount) {
      nextQuoteIndex = 0
    }

    this.setState({
      currentQuote: nextQuoteIndex
    })
  }

  render() {
    return (
      <div>
        <div>
          {this.showQuote()}
        </div>
        <button onClick={this.nextQuote}>Next Quote</button>
      </div>
    )
  }
}

export default Quotes;