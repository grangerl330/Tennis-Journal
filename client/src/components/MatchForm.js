import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import moment from 'moment'
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
      id: "",
      tournament_id: props.tournamentId
    }
  }

  componentDidMount(){
    if(this.props.edit){
      this.setState({
        date: this.props.currentMatch.date,
        time: moment.utc(this.props.currentMatch.time).format('HH:mm:ss'),
        round: this.props.currentMatch.round,
        result: this.props.currentMatch.result,
        score: this.props.currentMatch.score,
        notes: this.props.currentMatch.notes,
        id: this.props.currentMatch.id
      })
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

    if(this.props.edit){
      this.props.history.push(`/matches/view/${this.props.currentMatch.id}`)
    } else {
      this.props.history.push(`/tournaments/view/${this.props.tournamentId}`)
    }
  }

  formHeader = () => {
    if(this.props.add) {
      return <h2>Add Match</h2>
    } else {
      return <h2>Edit Match</h2>
    }
  }

  formButton = () => {
    if(this.props.add) {
      return <button>Add Match</button>
    } else {
      return <button>Edit Match</button>
    }
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
          {this.formHeader()}
          <p>
            <label htmlFor="match-date">Date: </label>
            <input type="date" name="date" value={this.state.date} onChange={this.handleOnChange} />
          </p>
          <p>
            <label htmlFor="match-time">Time: </label>
            <input type="time" name="time" value={this.state.time} onChange={this.handleOnChange} />
          </p>
          <p>
            <label htmlFor="match-round">Round: </label>
            <select name="round" onChange={this.handleOnChange}>
              <option value="128">128</option>
              <option value="64">64</option>
              <option value="32">32</option>
              <option value="16">16</option>
              <option value="8">Quarterfinal</option>
              <option value="4">Semifinal</option>
              <option value="2">Final</option>
            </select>
          </p>
          <p>
            <label htmlFor="match-round">Result: </label>
            <select name="result" onChange={this.handleOnChange}>
              <option value="Won">Won</option>
              <option value="Lost">Lost</option>
            </select>
          </p>
          <p>
            <label htmlFor="match-score">Score: </label>
            <input type="text" name="score" value={this.state.score} onChange={this.handleOnChange} placeholder="ex: 6-1, 6-0"/>
          </p>
          <p>
            <label htmlFor="match-notes" className="notes-label">Notes: </label>
            <textarea name="notes" value={this.state.notes} onChange={this.handleOnChange} placeholder="Notes about the match">Notes:</textarea>
          </p>
          {this.formButton()}
        </form>
      </div>
    )
  }
}

export default withRouter(MatchForm)
