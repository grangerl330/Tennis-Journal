import React, { Component } from 'react'
import { withRouter } from 'react-router';

class MatchAllInfoModal extends Component {
  constructor(props){
    super(props)

    this.state = {
      round: "",
      score: "",
      result: "",
      date: "",
      time: "",
      id: "",
      tournament_id: props.tournamentId
    }
  }

  componentDidMount(){
    this.setState({
      round: this.props.currentMatch.round,
      score: this.props.currentMatch.score,
      result: this.props.currentMatch.result,
      date: this.props.currentMatch.date,
      time: this.props.currentMatch.time,
      id: this.props.currentMatch.id
    })
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
      date: this.state.date
    })

    this.props.history.push(`/matches/${this.props.currentMatch.id}`)
  }

  roundOptions = () => {
    switch(this.props.currentMatch.tournament.draw_size){
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

  render() {
    return (
      <div className="modal fade mt-3" id="matchInfoModal">
        <div className="modal-dialog modal-md">
          <div className="modal-content">
            <div className="modal-header bg-info text-white">
              <h5 className="modal-title">Edit Match Info</h5>
              <button className="close" data-dismiss="modal">
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <label htmlFor="Match Round">Round: </label>
                      <select className="form-control" name="round" value={this.state.round} onChange={this.handleOnChange} required>
                        {this.roundOptionsDisplay()}
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="Match Result">Result: </label>
                      <select className="form-control" name="result" onChange={this.handleOnChange} value={this.state.result}>
                        <option value="Won">Won</option>
                        <option value="Lost">Lost</option>
                        <option value="In Progress">In Progress</option>
                      </select>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <label htmlFor="Match Score">Score: </label>
                      <input className="form-control" name="score" onChange={this.handleOnChange} value={this.state.score || ''} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="Match Date">Date: </label>
                      <input className="form-control" name="date" type="date" onChange={this.handleOnChange} value={this.state.date || ''} />
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="form-group w-75">
                    <label htmlFor="Match Time">Time: </label>
                    <input className="form-control" name="time" type="time" onChange={this.handleOnChange} value={this.state.time || ''} />
                  </div>
                </div>
                <button className="btn btn-dark btn-block" data-dismiss="modal" onClick={this.handleOnSubmit}>
                  Update Match Info
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(MatchAllInfoModal)
