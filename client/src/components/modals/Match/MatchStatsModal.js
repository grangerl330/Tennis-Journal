import React, { Component } from 'react'
import { withRouter } from 'react-router';

class MatchStatsModal extends Component {
  constructor(props){
    super(props)

    this.state = {
      unforced_errors: "",
      forced_errors: "",
      winners: "",
      double_faults: "",
      aces: "",
      id: "",
      tournament_id: props.tournamentId
    }
  }

  componentDidMount(){
    this.setState({
      unforced_errors: this.props.currentMatch.unforced_errors,
      forced_errors: this.props.currentMatch.forced_errors,
      winners: this.props.currentMatch.winners,
      double_faults: this.props.currentMatch.double_faults,
      aces: this.props.currentMatch.aces,
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
        <div className="modal-dialog modal-md">
          <div className="modal-content">
            <div className="modal-header bg-info text-white">
              <h5 className="modal-title">Edit Stats</h5>
              <button className="close" data-dismiss="modal">
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="Unforced Errors">Unforced Errors </label>
                  <input type="number" className="form-control" name="unforced_errors" value={this.state.unforced_errors || ''} onChange={this.handleOnChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="Forced Errors">Forced Errors </label>
                  <input className="form-control" name="forced_errors" onChange={this.handleOnChange} value={this.state.forced_errors || ''} />
                </div>
                <div className="form-group">
                  <label htmlFor="Winners">Winners </label>
                  <input type="number" className="form-control" name="winners" onChange={this.handleOnChange} value={this.state.winners || ''} />
                </div>
                <div className="form-group">
                  <label htmlFor="Double Faults">Double Faults </label>
                  <input className="form-control" name="double_faults" type="double_faults" onChange={this.handleOnChange} value={this.state.double_faults || ''} />
                </div>
                <div className="form-group">
                  <label htmlFor="Aces">Aces </label>
                  <input className="form-control" name="aces" type="aces" onChange={this.handleOnChange} value={this.state.aces || ''} />
                </div>
                <div className="form-group mt-4">
                  <button className="btn btn-dark btn-block" data-dismiss="modal" onClick={this.handleOnSubmit}>
                    Update Stats
                  </button>
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
