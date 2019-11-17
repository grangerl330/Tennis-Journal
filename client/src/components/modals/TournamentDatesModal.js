import React, { Component } from 'react'
import { withRouter } from 'react-router';

class TournamentDatesModal extends Component {
  constructor(props){
    super(props)

    this.state = {
      start_date: "",
      startDateIsValid: true,
      end_date: "",
      user_id: "",
      id: ""
    }
  }

  componentDidMount(){
    this.setState({
      start_date: this.props.tournament.start_date,
      end_date: this.props.tournament.end_date,
      user_id: this.props.tournament.user_id,
      id: this.props.tournament.id
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

    const tournament = this.state

    this.props.sendTournamentToDatabase(tournament)
    this.setState({
      start_date: this.state.start_date,
      end_date: this.state.end_date
    })

    this.props.history.push(`/tournaments/${tournament.id}`)
  }

  render() {
    return (
      <div className="modal fade mt-3" id="tournamentDatesModal">
        <div className="modal-dialog modal-md">
          <div className="modal-content">
            <div className="modal-header bg-info text-white">
              <h5 className="modal-title">Edit Dates</h5>
              <button className="close" data-dismiss="modal">
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="Tournament Start Date">Start Date: </label>
                  <input className="form-control" type="date" name="start_date" value={this.state.start_date} onChange={this.handleOnChange} placeholder="Start Date" required/>
                </div>
                <div className="form-group">
                  <label htmlFor="Tournament End Date">End Date: </label>
                  <input className="form-control" type="date" name="end_date" value={this.state.end_date} onChange={this.handleOnChange} placeholder="End Date"/>
                </div>
                <button className="btn btn-dark btn-block" data-dismiss="modal" onClick={this.handleOnSubmit}>
                  Update Dates
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(TournamentDatesModal)
