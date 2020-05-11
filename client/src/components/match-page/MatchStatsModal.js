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
      deuce_side_service_winners: "",
      ad_side_service_winners: "",
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
      deuce_side_service_winners: this.props.currentMatch.deuce_side_service_winners,
      ad_side_service_winners: this.props.currentMatch.ad_side_service_winners,
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
        <div className="modal-dialog" style={{maxWidth: '650px'}}>
          <div className="modal-content">
            <div className="modal-header border-0 mb-4">
              <button className="close" data-dismiss="modal">
                <i className="fas fa-times fa-sm text-grey"></i>
              </button>
            </div>
            <div className="modal-body px-5">
              <form>
                {/* Top Half */}
                <div className="row mt-3 justify-content-center">
                  <div className="col-4 text-center">
                    <h5>Unforced Errors</h5>
                  </div>
                  <div className="col-4 text-center">
                    <h5>Forced Errors</h5>
                  </div>
                  <div className="col-4 text-center my-auto">
                    <h5>Winners</h5>
                  </div>
                </div>
                <div className="row mt-2 justify-content-center">
                  {/* Unforced Errors Column */}
                  <div className="col-4">
                    <div className="row mt-3 justify-content-center">
                      <div className="col-12 col-md-10 text-center px-0">
                        <label htmlFor="Forehand Unforced Errors">Forehand</label>
                        <input type="number" className="form-control w-40 mx-auto px-1" name="forehand_unforced_errors" value={this.state.forehand_unforced_errors || ''} onChange={this.handleOnChange} />
                      </div>
                    </div>
                    <div className="row mt-3 justify-content-center">
                      <div className="col-12 col-md-10 text-center px-0">
                        <label htmlFor="Backhand Unforced Errors">Backhand</label>
                        <input type="number" className="form-control w-40 mx-auto px-1" name="backhand_unforced_errors" value={this.state.backhand_unforced_errors || ''} onChange={this.handleOnChange} />
                      </div>
                    </div>
                    <div className="row mt-3 justify-content-center">
                      <div className="col-12 col-md-10 text-center px-0">
                        <label htmlFor="Slice Unforced Errors">Slice</label>
                        <input type="number" className="form-control w-40 mx-auto px-1" name="slice_unforced_errors" value={this.state.slice_unforced_errors || ''} onChange={this.handleOnChange} />
                      </div>
                    </div>
                    <div className="row mt-3 justify-content-center">
                      <div className="col-12 col-md-10 text-center px-0">
                        <label htmlFor="Forehand Volley Unforced Errors">Forehand Volley</label>
                        <input type="number" className="form-control w-40 mx-auto px-1" name="forehand_volley_unforced_errors" value={this.state.forehand_volley_unforced_errors || ''} onChange={this.handleOnChange} />
                      </div>
                    </div>
                    <div className="row mt-3 justify-content-center">
                      <div className="col-12 col-md-10 text-center px-0">
                        <label htmlFor="Backhand Volley Unforced Errors">Backhand Volley</label>
                        <input type="number" className="form-control w-40 mx-auto px-1" name="backhand_volley_unforced_errors" value={this.state.backhand_volley_unforced_errors || ''} onChange={this.handleOnChange} />
                      </div>
                    </div>
                    <div className="row mt-3 justify-content-center">
                      <div className="col-12 col-md-10 text-center px-0">
                        <label htmlFor="Overhead Unforced Errors">Overhead</label>
                        <input type="number" className="form-control w-40 mx-auto px-1" name="overhead_unforced_errors" value={this.state.overhead_unforced_errors || ''} onChange={this.handleOnChange} />
                      </div>
                    </div>
                  </div>

                  {/* Forced Errors Column */}
                  <div className="col-4">
                    <div className="row mt-3 justify-content-center">
                      <div className="col-12 col-md-10 text-center px-0">
                        <label htmlFor="Forehand Forced Errors">Forehand</label>
                        <input type="number" className="form-control w-40 mx-auto px-1" name="forehand_forced_errors" value={this.state.forehand_forced_errors || ''} onChange={this.handleOnChange} />
                      </div>
                    </div>
                    <div className="row mt-3 justify-content-center">
                      <div className="col-12 col-md-10 text-center px-0">
                        <label htmlFor="Backhand Forced Errors">Backhand</label>
                        <input type="number" className="form-control w-40 mx-auto px-1" name="backhand_forced_errors" value={this.state.backhand_forced_errors || ''} onChange={this.handleOnChange} />
                      </div>
                    </div>
                    <div className="row mt-3 justify-content-center">
                      <div className="col-12 col-md-10 text-center px-0">
                        <label htmlFor="Slice Forced Errors">Slice</label>
                        <input type="number" className="form-control w-40 mx-auto px-1" name="slice_forced_errors" value={this.state.slice_forced_errors || ''} onChange={this.handleOnChange} />
                      </div>
                    </div>
                    <div className="row mt-3 justify-content-center">
                      <div className="col-12 col-md-10 text-center px-0">
                        <label htmlFor="Forehand Volley Forced Errors">Forehand Volley</label>
                        <input type="number" className="form-control w-40 mx-auto px-1" name="forehand_volley_forced_errors" value={this.state.forehand_volley_forced_errors || ''} onChange={this.handleOnChange} />
                      </div>
                    </div>
                    <div className="row mt-3 justify-content-center">
                      <div className="col-12 col-md-10 text-center px-0">
                        <label htmlFor="Backhand Volley Forced Errors">Backhand Volley</label>
                        <input type="number" className="form-control w-40 mx-auto px-1" name="backhand_volley_forced_errors" value={this.state.backhand_volley_forced_errors || ''} onChange={this.handleOnChange} />
                      </div>
                    </div>
                    <div className="row mt-3 justify-content-center">
                      <div className="col-12 col-md-10 text-center px-0">
                        <label htmlFor="Overhead Forced Errors">Overhead</label>
                        <input type="number" className="form-control w-40 mx-auto px-1" name="overhead_volley_forced_errors" value={this.state.overhead_forced_errors || ''} onChange={this.handleOnChange} />
                      </div>
                    </div>
                  </div>

                  {/* Winners Column */}
                  <div className="col-4">
                    <div className="row mt-3 justify-content-center">
                      <div className="col-12 col-md-10 text-center px-0">
                        <label htmlFor="Forehand Winners">Forehand</label>
                        <input type="number" className="form-control w-40 mx-auto px-1" name="forehand_winners" value={this.state.forehand_winners || ''} onChange={this.handleOnChange} />
                      </div>
                    </div>
                    <div className="row mt-3 justify-content-center">
                      <div className="col-12 col-md-10 text-center px-0">
                        <label htmlFor="Backhand Winners">Backhand</label>
                        <input type="number" className="form-control w-40 mx-auto px-1" name="backhand_winners" value={this.state.backhand_winners || ''} onChange={this.handleOnChange} />
                      </div>
                    </div>
                    <div className="row mt-3 justify-content-center">
                      <div className="col-12 col-md-10 text-center px-0">
                        <label htmlFor="Slice Winners">Slice</label>
                        <input type="number" className="form-control w-40 mx-auto px-1" name="slice_winners" value={this.state.slice_winners || ''} onChange={this.handleOnChange} />
                      </div>
                    </div>
                    <div className="row mt-3 justify-content-center">
                      <div className="col-12 col-md-10 text-center px-0">
                        <label htmlFor="Forehand Volley Winners">Forehand Volley</label>
                        <input type="number" className="form-control w-40 mx-auto px-1" name="forehand_volley_winners" value={this.state.forehand_volley_winners || ''} onChange={this.handleOnChange} />
                      </div>
                    </div>
                    <div className="row mt-3 justify-content-center">
                      <div className="col-12 col-md-10 text-center px-0">
                        <label htmlFor="Backhand Volley Winners">Backhand Volley</label>
                        <input type="number" className="form-control w-40 mx-auto px-1" name="backhand_volley_winners" value={this.state.backhand_volley_winners || ''} onChange={this.handleOnChange} />
                      </div>
                    </div>
                    <div className="row mt-3 justify-content-center">
                      <div className="col-12 col-md-10 text-center px-0">
                        <label htmlFor="Overhead Winners">Overhead</label>
                        <input type="number" className="form-control w-40 mx-auto px-1" name="overhead_volley_winners" value={this.state.overhead_winners || ''} onChange={this.handleOnChange} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Half */}
                <div className="row mt-5 pt-5 justify-content-center border-top">
                  <div className="col-4 text-center">
                    <h5>Service Winners</h5>
                  </div>
                  <div className="col-4 text-center">
                    <h5>Aces</h5>
                  </div>
                  <div className="col-4 text-center my-auto">
                    <h5>Double Faults</h5>
                  </div>
                </div>
                <div className="row mt-2 justify-content-center">
                  {/* Service Winners Column */}
                  <div className="col-4">
                    <div className="row mt-3 justify-content-center">
                      <div className="col-12 col-md-10 text-center px-0">
                        <label htmlFor="Deuce Side Service Winners">Deuce Side</label>
                        <input type="number" className="form-control w-40 mx-auto px-1" name="deuce_side_service_winners" value={this.state.deuce_side_service_winners || ''} onChange={this.handleOnChange} />
                      </div>
                    </div>
                    <div className="row mt-3 justify-content-center">
                      <div className="col-12 col-md-10 text-center px-0">
                        <label htmlFor="Ad Side Service Winners">Ad Side</label>
                        <input type="number" className="form-control w-40 mx-auto px-1" name="ad_side_service_winners" value={this.state.ad_side_service_winners || ''} onChange={this.handleOnChange} />
                      </div>
                    </div>
                  </div>

                  {/* Aces Column */}
                  <div className="col-4">
                    <div className="row mt-3 justify-content-center">
                      <div className="col-12 col-md-10 text-center px-0">
                        <label htmlFor="Deuce Side Aces">Deuce Side</label>
                        <input type="number" className="form-control w-40 mx-auto px-1" name="deuce_side_aces" value={this.state.deuce_side_aces || ''} onChange={this.handleOnChange} />
                      </div>
                    </div>
                    <div className="row mt-3 justify-content-center">
                      <div className="col-12 col-md-10 text-center px-0">
                        <label htmlFor="Ad Side Aces">Ad Side</label>
                        <input type="number" className="form-control w-40 mx-auto px-1" name="ad_side_aces" value={this.state.ad_side_aces || ''} onChange={this.handleOnChange} />
                      </div>
                    </div>
                  </div>

                  {/* Double Faults Column */}
                  <div className="col-4">
                    <div className="row mt-3 justify-content-center">
                      <div className="col-12 col-md-10 text-center px-0">
                        <label htmlFor="Deuce Side Double Faults">Deuce Side</label>
                        <input type="number" className="form-control w-40 mx-auto px-1" name="deuce_side_double_faults" value={this.state.deuce_side_double_faults || ''} onChange={this.handleOnChange} />
                      </div>
                    </div>
                    <div className="row mt-3 justify-content-center">
                      <div className="col-12 col-md-10 text-center px-0">
                        <label htmlFor="Ad Side Double Faults">Ad Side</label>
                        <input type="number" className="form-control w-40 mx-auto px-1" name="ad_side_double_faults" value={this.state.ad_side_double_faults || ''} onChange={this.handleOnChange} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-group text-right mt-5 mb-4">
                  <button className="btn mr-4 text-grey" data-dismiss="modal">Cancel</button>
                  <button className="btn btn-green" data-dismiss="modal" onClick={this.handleOnSubmit}>Update</button>
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
