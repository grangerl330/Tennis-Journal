import React, { Component } from 'react'
import { withRouter } from 'react-router';

class LiveStatsModal extends Component {
  constructor(props){
    super(props)

    this.state = {
      unforced_errors: 0,
      forced_errors: 0,
      winners: 0,
      double_faults: 0,
      aces: 0,
      id: props.currentMatch.id,
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

    this.props.history.push(`/matches/${this.props.currentMatch.id}`)
  }

  onClickMinusButton = event => {
    this.setState({
      [event.target.value]: this.state[event.target.value] - 1
    })
  }

  onClickPlusButton = event => {
    this.setState({
      [event.target.value]: this.state[event.target.value] + 1
    })
  }

  renderStatTracker = (stat, stateName) => {
    return (
      <div className="col-md-3">
        <div className="row justify-content-center mb-1">
          <h5>{stat}</h5>
        </div>
        <div className="row justify-content-center">
          <button className="btn btn-info" onClick={this.onClickMinusButton} value={stateName}><i className="fas fa-minus"></i></button>
          <h5 className="mx-3">{this.state[stateName]}</h5>
          <button className="btn btn-info" onClick={this.onClickPlusButton} value={stateName}><i className="fas fa-plus"></i></button>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="modal fade mt-3" id="liveStatsModal">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header bg-info text-white">
              <h5 className="modal-title">Live Stat Tracker</h5>
              <button className="close" data-dismiss="modal">
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <div className="row justify-content-center mb-5">
                {this.renderStatTracker("Unforced Errors", "unforced_errors")}
                {this.renderStatTracker("Forced Errors", "forced_errors")}
                {this.renderStatTracker("Winners", "winners")}
              </div>
              <div className="row justify-content-center">
                {this.renderStatTracker("Double Faults", "double_faults")}
                {this.renderStatTracker("Aces", "aces")}
              </div>
              <div className="row mt-5 justify-content-center">
                <div className="col-md-4">
                  <button className="btn btn-dark btn-block" data-dismiss="modal" onClick={this.handleOnSubmit}>
                    Save Stats
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(LiveStatsModal)
