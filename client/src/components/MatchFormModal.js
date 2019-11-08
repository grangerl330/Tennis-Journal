import React, { Component } from 'react'
import moment from 'moment'
import { withRouter } from 'react-router'

class MatchFormModal extends Component {
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
      tournament_id: props.tournamentId,
      opponent_first_name: "",
      opponent_last_name:""
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
        id: this.props.currentMatch.id,
        opponent_first_name: this.props.currentMatch.opponent.first_name,
        opponent_last_name:this.props.currentMatch.opponent.last_name
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
      tournament_id: "",
      id: "",
      opponent_first_name: "",
      opponent_last_name:""
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
      return (
        <div className="form-group d-flex justify-content-center">
          <input className="btn btn-dark" data-dismiss="modal" type="submit" value="Add Match"/>
        </div>
      )
    } else {
      return (
        <div className="form-group d-flex justify-content-center">
          <input className="btn btn-dark" data-dismiss="modal" type="submit" value="Update Match"/>
        </div>
      )
    }
  }

  switchStatement = () => {
    if(this.props.add){
      return this.props.tournament.draw_size
    } else {
      return this.props.currentMatch.tournament.draw_size
    }
  }

  roundOptions = () => {
    switch(this.switchStatement()){
      case 128:
        return [128, 64, 32, 16, 'Quarterfinal', 'Semifinal', 'Final']
      case 64:
        return [64, 32, 16, 'Quarterfinal', 'Semifinal', 'Final']
      case 32:
        return [32, 16, 'Quarterfinal', 'Semifinal', 'Final']
      case 16:
        return [16, 'Quarterfinal', 'Semifinal', 'Final']
      case 8:
        return ['Quarterfinal', 'Semifinal', 'Final']
      case 4:
        return ['Semifinal', 'Final']
      case 2:
        return ['Final']
      default:
        return []
    }
  }

  roundOptionsDisplay = () => {
    var displayOptions = []
    var createdMatchRounds = []
    this.props.matches.forEach(match => {createdMatchRounds.push(match.round)})
    var roundOptions = this.roundOptions().filter(option => {
      return !createdMatchRounds.includes(option)
    })
    var key = 1

    roundOptions.forEach(option => {
      if(parseInt(option) > 8){
        displayOptions.push(<option value={`${option}`} key={`${key}`}>{option}</option>)
      } else {
        displayOptions.push(<option value={`${this.round_name_to_number(option)}`} key={`${key}`}>{option}</option>)
      }
        key += 1
    })

    return displayOptions
  }

  round_name_to_number = (round) => {
    switch(round){
      case 'Quarterfinal':
        return 8
      case 'Semifinal':
        return 4
      case 'Final':
        return 2
      default:
        return ""
    }
  }

  render() {
    return (
      <div className="modal fade mt-3" id="matchFormModal">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header bg-info text-white">
              {this.formHeader()}
              <button className="close" data-dismiss="modal">
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={this.handleOnSubmit}>
                <div className="form-group">
                  <label htmlFor="Opponent Names">vs:</label>
                  <input className="form-control mb-3" type="text" name="opponent_first_name" value={this.state.opponent_first_name} onChange={this.handleOnChange} placeholder="Opponent's First Name" required/>
                  <input className="form-control" type="text" name="opponent_last_name" value={this.state.opponent_last_name} onChange={this.handleOnChange} placeholder="Opponent's Last Name" required/>
                </div>
                <div className="form-group">
                  <label htmlFor="Match Date">Date: </label>
                  <input className="form-control" type="date" name="date" value={this.state.date} onChange={this.handleOnChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="Match Time">Time: </label>
                  <input className="form-control" type="time" name="time" value={this.state.time} onChange={this.handleOnChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="Match Round">Round: </label>
                  <select className="form-control" name="round" value={this.state.round} onChange={this.handleOnChange} required>
                    <option disabled hidden></option>
                    {this.roundOptionsDisplay()}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="Match Result">Result: </label>
                  <select className="form-control" name="result" value={this.state.result} onChange={this.handleOnChange} required>
                    <option disabled hidden></option>
                    <option value="Won">Won</option>
                    <option value="Lost">Lost</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="Match Score">Score: </label>
                  <input className="form-control" type="text" name="score" value={this.state.score} onChange={this.handleOnChange} placeholder="ex: 6-1, 6-0"/>
                </div>
                <div className="form-group">
                  <label htmlFor="Match Notes">Notes: </label>
                  <textarea className="form-control" name="notes" value={this.state.notes} onChange={this.handleOnChange} placeholder="Notes about the match">Notes:</textarea>
                </div>
                {this.formButton()}
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(MatchFormModal)
