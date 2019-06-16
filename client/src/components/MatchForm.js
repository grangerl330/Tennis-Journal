import React, { Component } from 'react'

class MatchForm extends Component {
  constructor(){
    super()

    this.state = {
      date: "",
      time: "",
      round: "",
      result: "",
      score: "",
      notes: ""
    }
  }

  handleOnChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()

    const match = this.state
    this.props.addMatchToDatabase(match)
    this.setState({
      round: "",
      result: "",
      score: "",
      date: ""
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <h2>Add Match</h2>
          <p>
            <label htmlFor="match-date">Date</label>
            <input type="date" name="date" value={this.state.date} onChange={this.handleOnChange} />
          </p>
          <p>
            <label htmlFor="match-time">Time</label>
            <input type="time" name="time" value={this.state.time} onChange={this.handleOnChange} />
          </p>
          <p>
            <label htmlFor="match-round">Round</label>
            <input type="text" name="round" value={this.state.round} onChange={this.handleOnChange} placeholder="Round"/>
          </p>
          <p>
            <label htmlFor="match-result">Result</label>
            <input type="text" name="result" value={this.state.result} onChange={this.handleOnChange} placeholder="Result"/>
          </p>
          <p>
            <label htmlFor="match-score">Score</label>
            <input type="text" name="score" value={this.state.score} onChange={this.handleOnChange} placeholder="Score"/>
          </p>
          <p>
            <textarea name="notes" value={this.state.notes} onChange={this.handleOnChange} placeholder="Notes">Notes</textarea>
          </p>
          <button>Add Match</button>
        </form>
      </div>
    )
  }
}

export default MatchForm
