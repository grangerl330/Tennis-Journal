import React, { Component } from 'react'
import { withRouter } from 'react-router';

class MatchStatsModal extends Component {
  constructor(props){
    super(props)

    this.state = {
      forehand_unforced_errors: "",
      backhand_unforced_errors: "",
      slice_unforced_errors: "",
      forehand_volley_unforced_errors: "",
      backhand_volley_unforced_errors: "",
      overhead_unforced_errors: "",
      forehand_forced_errors: "",
      backhand_forced_errors: "",
      slice_forced_errors: "",
      forehand_volley_forced_errors: "",
      backhand_volley_forced_errors: "",
      overhead_forced_errors: "",
      forehand_winners: "",
      backhand_winners: "",
      slice_winners: "",
      forehand_volley_winners: "",
      backhand_volley_winners: "",
      overhead_winners: "",
      deuce_side_double_faults: "",
      ad_side_double_faults: "",
      deuce_side_aces: "",
      ad_side_aces: "",
      id: "",
      tournament_id: props.tournamentId
    }
  }

  componentDidMount(){
    this.setState({
      forehand_unforced_errors: this.props.currentMatch.forehand_unforced_errors,
      backhand_unforced_errors: this.props.currentMatch.backhand_unforced_errors,
      slice_unforced_errors: this.props.currentMatch.slice_unforced_errors,
      forehand_volley_unforced_errors: this.props.currentMatch.forehand_volley_unforced_errors,
      backhand_volley_unforced_errors: this.props.currentMatch.backhand_volley_unforced_errors,
      overhead_unforced_errors: this.props.currentMatch.overhead_unforced_errors,
      forehand_forced_errors: this.props.currentMatch.forehand_forced_errors,
      backhand_forced_errors: this.props.currentMatch.backhand_forced_errors,
      slice_forced_errors: this.props.currentMatch.slice_forced_errors,
      forehand_volley_forced_errors: this.props.currentMatch.forehand_volley_forced_errors,
      backhand_volley_forced_errors: this.props.currentMatch.backhand_volley_forced_errors,
      overhead_forced_errors: this.props.currentMatch.overhead_forced_errors,
      forehand_winners: this.props.currentMatch.forehand_winners,
      backhand_winners: this.props.currentMatch.backhand_winners,
      slice_winners: this.props.currentMatch.slice_winners,
      forehand_volley_winners: this.props.currentMatch.forehand_volley_winners,
      backhand_volley_winners: this.props.currentMatch.backhand_volley_winners,
      overhead_winners: this.props.currentMatch.overhead_winners,
      deuce_side_double_faults: this.props.currentMatch.deuce_side_double_faults,
      ad_side_double_faults: this.props.currentMatch.ad_side_double_faults,
      deuce_side_aces: this.props.currentMatch.deuce_side_aces,
      ad_side_aces: this.props.currentMatch.ad_side_aces,
      notes: this.props.currentMatch.notes,
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

    this.props.history.push(`/matches/${this.props.currentMatch.id}`)
  }

  render() {
    return (
      <div className="modal fade mt-3" id="matchStatsModal">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header bg-info text-white">
              <h5 className="modal-title">Edit Stats</h5>
              <button className="close" data-dismiss="modal">
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="row">
                  <div className="col">
                    <div className="row mb-4">
                      <h5 className="mx-auto">Unforced Errors</h5>
                    </div>
                    <div className="form-group">
                      <label htmlFor="Unforced Errors">Forehand Unforced Errors </label>
                      <input type="number" className="form-control" name="forehand_unforced_errors" value={this.state.forehand_unforced_errors || ''} onChange={this.handleOnChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="Unforced Errors">Backhand Unforced Errors </label>
                      <input type="number" className="form-control" name="backhand_unforced_errors" value={this.state.backhand_unforced_errors || ''} onChange={this.handleOnChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="Unforced Errors">Slice Unforced Errors </label>
                      <input type="number" className="form-control" name="slice_unforced_errors" value={this.state.slice_unforced_errors || ''} onChange={this.handleOnChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="Unforced Errors">Forehand Volley Unforced Errors </label>
                      <input type="number" className="form-control" name="forehand_volley_unforced_errors" value={this.state.forehand_volley_unforced_errors || ''} onChange={this.handleOnChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="Unforced Errors">Backhand Volley Unforced Errors </label>
                      <input type="number" className="form-control" name="backhand_volley_unforced_errors" value={this.state.backhand_volley_unforced_errors || ''} onChange={this.handleOnChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="Unforced Errors">Overhead Unforced Errors </label>
                      <input type="number" className="form-control" name="overhead_unforced_errors" value={this.state.overhead_unforced_errors || ''} onChange={this.handleOnChange} />
                    </div>
                  </div>
                  <div className="col">
                    <div className="row mb-4">
                      <h5 className="mx-auto">Forced Errors</h5>
                    </div>
                    <div className="form-group">
                      <label htmlFor="Forced Errors">Forehand Forced Errors </label>
                      <input type="number" className="form-control" name="forehand_forced_errors" value={this.state.forehand_forced_errors || ''} onChange={this.handleOnChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="Forced Errors">Backhand Forced Errors </label>
                      <input type="number" className="form-control" name="backhand_forced_errors" value={this.state.backhand_forced_errors || ''} onChange={this.handleOnChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="Forced Errors">Slice Forced Errors </label>
                      <input type="number" className="form-control" name="slice_forced_errors" value={this.state.slice_forced_errors || ''} onChange={this.handleOnChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="Forced Errors">Forehand Volley Forced Errors </label>
                      <input type="number" className="form-control" name="forehand_volley_forced_errors" value={this.state.forehand_volley_forced_errors || ''} onChange={this.handleOnChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="Forced Errors">Backhand Volley Forced Errors </label>
                      <input type="number" className="form-control" name="backhand_volley_forced_errors" value={this.state.backhand_volley_forced_errors || ''} onChange={this.handleOnChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="Forced Errors">Overhead Forced Errors </label>
                      <input type="number" className="form-control" name="overhead_forced_errors" value={this.state.overhead_forced_errors || ''} onChange={this.handleOnChange} />
                    </div>
                  </div>
                  <div className="col">
                    <div className="row mb-4">
                      <h5 className="mx-auto">Winners</h5>
                    </div>
                    <div className="form-group">
                      <label htmlFor="Winners">Forehand Winners </label>
                      <input type="number" className="form-control" name="forehand_winners" value={this.state.forehand_winners || ''} onChange={this.handleOnChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="Winners">Backhand Winners </label>
                      <input type="number" className="form-control" name="backhand_winners" value={this.state.backhand_winners || ''} onChange={this.handleOnChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="Winners">Slice Winners </label>
                      <input type="number" className="form-control" name="slice_winners" value={this.state.slice_winners || ''} onChange={this.handleOnChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="Winners">Forehand Volley Winners </label>
                      <input type="number" className="form-control" name="forehand_volley_winners" value={this.state.forehand_volley_winners || ''} onChange={this.handleOnChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="Winners">Backhand Volley Winners </label>
                      <input type="number" className="form-control" name="backhand_volley_winners" value={this.state.backhand_volley_winners || ''} onChange={this.handleOnChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="Winners">Overhead Winners </label>
                      <input type="number" className="form-control" name="overhead_winners" value={this.state.overhead_winners || ''} onChange={this.handleOnChange} />
                    </div>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col">
                    <div className="row mb-2">
                      <h5 className="mx-auto">Double Faults</h5>
                    </div>
                    <div className="form-group">
                      <label htmlFor="Double Faults">Deuce Side </label>
                      <input type="number" className="form-control" name="deuce_side_double_faults" value={this.state.deuce_side_double_faults || ''} onChange={this.handleOnChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="Double Faults">Ad Side </label>
                      <input type="number" className="form-control" name="ad_side_double_faults" value={this.state.ad_side_double_faults || ''} onChange={this.handleOnChange} />
                    </div>
                  </div>
                  <div className="col">
                    <div className="row mb-2">
                      <h5 className="mx-auto">Aces</h5>
                    </div>
                    <div className="form-group">
                      <label htmlFor="Aces">Deuce Side </label>
                      <input type="number" className="form-control" name="deuce_side_aces" value={this.state.deuce_side_aces || ''} onChange={this.handleOnChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="Double Faults">Ad Side </label>
                      <input type="number" className="form-control" name="ad_side_aces" value={this.state.ad_side_aces || ''} onChange={this.handleOnChange} />
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center mt-4">
                  <div className="col-5">
                    <button className="btn btn-dark btn-block" data-dismiss="modal" onClick={this.handleOnSubmit}>
                      Update Stats
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(MatchStatsModal)
