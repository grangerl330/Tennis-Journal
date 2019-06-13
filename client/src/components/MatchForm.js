import React, { Component } from 'react'
import { connect } from 'react-redux'

class MatchForm extends Component {
  constructor(props){
    super(props)

    this.state = {
      round: "",
      result: "",
      score: ""
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
    this.props.addMatch(match)
    this.setState({
      round: "",
      result: "",
      score: ""
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <h2>Add Match</h2>
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
          <button>Add Match</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addMatch: match => dispatch({type: 'ADD_MATCH', match})
  }
}

export default connect(null, mapDispatchToProps)(MatchForm)
