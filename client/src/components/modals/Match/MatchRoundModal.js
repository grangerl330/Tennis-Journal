import React, { Component } from 'react'
import { withRouter } from 'react-router';

class MatchRoundModal extends Component {
  constructor(props){
    super(props)

    this.state = {
      round: "",
      id: "",
      tournament_id: props.tournamentId,
    }
  }

  componentDidMount(){
    this.setState({
      round: this.props.currentMatch.round,
      id: this.props.currentMatch.id,
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
      round: this.state.round
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
      <div className="modal fade mt-3" id="matchRoundModal">
        <div className="modal-dialog modal-md">
          <div className="modal-content">
            <div className="modal-header bg-info text-white">
              <h5 className="modal-title">Edit Round</h5>
              <button className="close" data-dismiss="modal">
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="Match Round">Round: </label>
                  <select className="form-control" name="round" value={this.state.round} onChange={this.handleOnChange} required>
                    {this.roundOptionsDisplay()}
                  </select>
                </div>
                <button className="btn btn-dark btn-block" data-dismiss="modal" onClick={this.handleOnSubmit}>
                  Update Round
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(MatchRoundModal)
