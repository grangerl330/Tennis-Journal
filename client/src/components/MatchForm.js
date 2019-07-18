import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'

class MatchForm extends Component {
  constructor(props){
    super(props)

    this.state = {
      date: "",
      time: "",
      round: "",
      result: "",
      score: "",
      notes: "",
      tournament_id: props.tournamentId
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
    this.props.sendMatchToDatabase(match)
    this.setState({
      round: "",
      result: "",
      score: "",
      date: "",
      notes: "",
      tournament_id: ""
    })

    this.props.history.push(`/tournaments/view/${this.props.tournamentId}`)
  }

  closeWindowLink = () => {
    if(this.props.tournamentId){
      return <NavLink className="close-window-button" to={`/tournaments/view/${this.props.tournamentId}`}>x</NavLink>
    } else {
      return <NavLink className="close-window-button" to='/matches'>x</NavLink>
    }
  }

  render() {
    return (
      <div className="form-window">
        {this.closeWindowLink()}
        <form onSubmit={this.handleOnSubmit} className="form-text">
          <h2>Add Match</h2>
          <p>
            <label htmlFor="match-date">Date: </label>
            <input type="date" name="date" value={this.state.date} onChange={this.handleOnChange} />
          </p>
          <p>
            <label htmlFor="match-time">Time: </label>
            <input type="time" name="time" value={this.state.time} onChange={this.handleOnChange} />
          </p>
          <p>
            <input type="text" name="round" value={this.state.round} onChange={this.handleOnChange} placeholder="Round"/>
          </p>
          <p>
            <input type="text" name="result" value={this.state.result} onChange={this.handleOnChange} placeholder="Result"/>
          </p>
          <p>
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

export default withRouter(MatchForm)
