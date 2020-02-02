import React, { Component } from 'react'
import { withRouter } from 'react-router';

class LiveStatsModal extends Component {
  constructor(props){
    super(props)

    this.state = {
      forehand_unforced_errors: 0,
      backhand_unforced_errors: 0,
      slice_unforced_errors: 0,
      forehand_volley_unforced_errors: 0,
      backhand_volley_unforced_errors: 0,
      overhead_unforced_errors: 0,
      forehand_forced_errors: 0,
      backhand_forced_errors: 0,
      slice_forced_errors: 0,
      forehand_volley_forced_errors: 0,
      backhand_volley_forced_errors: 0,
      overhead_forced_errors: 0,
      forehand_winners: 0,
      backhand_winners: 0,
      slice_winners: 0,
      forehand_volley_winners: 0,
      backhand_volley_winners: 0,
      overhead_winners: 0,
      deuce_side_double_faults: 0,
      ad_side_double_faults: 0,
      deuce_side_aces: 0,
      ad_side_aces: 0,
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
      <div className="row my-3 justify-content-center">
        <div className="col-xl-5 px-0 text-center">
          <span className="mr-3 stat-tracker-name">{stat}:</span>
        </div>
        <div className="col-xl-5 pl-0 ml-0">
          <button className="btn btn-info btn-sm" onClick={this.onClickMinusButton} value={stateName}><i className="fas fa-minus"></i></button>
          <span className="mx-3">{this.state[stateName]}</span>
          <button className="btn btn-info btn-sm" onClick={this.onClickPlusButton} value={stateName}><i className="fas fa-plus"></i></button>
        </div>
      </div>
    )
  }

  renderServeStatTracker = (stat, stateName) => {
    return (
      <div className="row my-3 justify-content-center">
        <div className="col-xl-3 px-0 text-center">
          <span className="mr-3 stat-tracker-name">{stat}:</span>
        </div>
        <div className="col-xl-3 pl-0 ml-0">
          <button className="btn btn-info btn-sm" onClick={this.onClickMinusButton} value={stateName}><i className="fas fa-minus"></i></button>
          <span className="mx-3">{this.state[stateName]}</span>
          <button className="btn btn-info btn-sm" onClick={this.onClickPlusButton} value={stateName}><i className="fas fa-plus"></i></button>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="modal fade mt-3" id="liveStatsModal">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header bg-info text-white">
              <h5 className="modal-title mx-auto">Live Stat Tracker</h5>
              <button className="close" data-dismiss="modal">
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <div className="row justify-content-center pb-4 border-bottom">
                <div className="col-4 text-center border-right">
                  <h5>Unforced Errors</h5>
                  {this.renderStatTracker("Forehand", "forehand_unforced_errors")}
                  {this.renderStatTracker("Backhand", "backhand_unforced_errors")}
                  {this.renderStatTracker("Slice", "slice_unforced_errors")}
                  {this.renderStatTracker("Forehand Volley", "forehand_volley_unforced_errors")}
                  {this.renderStatTracker("Backhand Volley", "backhand_volley_unforced_errors")}
                  {this.renderStatTracker("Overhead", "overhead_unforced_errors")}
                </div>
                <div className="col-4 text-center border-right">
                  <h5>Forced Errors</h5>
                  {this.renderStatTracker("Forehand", "forehand_forced_errors")}
                  {this.renderStatTracker("Backhand", "backhand_forced_errors")}
                  {this.renderStatTracker("Slice", "slice_forced_errors")}
                  {this.renderStatTracker("Forehand Volley", "forehand_volley_forced_errors")}
                  {this.renderStatTracker("Backhand Volley", "backhand_volley_forced_errors")}
                  {this.renderStatTracker("Overhead", "overhead_forced_errors")}
                </div>
                <div className="col-4 text-center">
                  <h5 className="mb-5 mb-md-0">Winners</h5>
                  {this.renderStatTracker("Forehand", "forehand_winners")}
                  {this.renderStatTracker("Backhand", "backhand_winners")}
                  {this.renderStatTracker("Slice", "slice_winners")}
                  {this.renderStatTracker("Forehand Volley", "forehand_volley_winners")}
                  {this.renderStatTracker("Backhand Volley", "backhand_volley_winners")}
                  {this.renderStatTracker("Overhead", "overhead_winners")}
                </div>
              </div>
              <div className="row justify-content-center pt-4 mb-5">
                <div className="col-6 text-center border-right">
                  <h5>Double Faults</h5>
                  {this.renderServeStatTracker("Deuce Side", "deuce_side_double_faults")}
                  {this.renderServeStatTracker("Ad Side", "ad_side_double_faults")}
                </div>
                <div className="col-6 text-center">
                  <h5>Aces</h5>
                  {this.renderServeStatTracker("Deuce Side", "deuce_side_aces")}
                  {this.renderServeStatTracker("Ad Side", "ad_side_aces")}
                </div>
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
