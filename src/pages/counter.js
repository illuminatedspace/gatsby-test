import React, {Component} from 'react'
import Link from 'gatsby-link'

class Counter extends Component {
  constructor () {
    super()

    this.state = {
      counter: 0,
    }

    this.incrementCounter = this.incrementCounter.bind(this)
    this.decrementCounter = this.decrementCounter.bind(this)
  }

  incrementCounter () {
    this.setState({
      counter: this.state.counter + 5
    })
  }

  decrementCounter () {
    this.setState({
      counter: this.state.counter - 1
    })
  }

  render () {
    const count = this.state ? this.state.counter : null
    return (
      <div>
        <h1>Counter</h1>
        <Link to="/">Back to Home</Link>
        <h3>Current Count: {count}</h3>
        <button onClick={this.incrementCounter}>Plus</button>
        <button onClick={this.decrementCounter}>Minus</button>
        <br />
        <button onClick={this.submitCount}>Submit</button>
      </div>
    )
  }
}

export default Counter
