import React, { Component } from 'react'
import { withRouter } from 'react-router';

class TournamentLocationModal extends Component {
  constructor(props){
    super(props)

    this.state = {
      location: "",
      user_id: "",
      id: ""
    }
  }

  componentDidMount(){
    this.setState({
      location: this.props.tournament.location,
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

    const tournament = Object.assign({}, this.state)

    if(tournament.location === "") {
      tournament.location = this.props.tournament.location
    }

    this.props.sendTournamentToDatabase(tournament)
    this.setState({
      location: tournament.location
    })

    this.props.history.push(`/tournaments/${tournament.id}`)
  }

  render() {
    return (
      <div className="modal fade mt-3" id="tournamentLocationModal">
        <div className="modal-dialog modal-md">
          <div className="modal-content">
            <div className="modal-header bg-info text-white">
              <h5 className="modal-title">Edit Location</h5>
              <button className="close" data-dismiss="modal">
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="Tournament Location">Location: </label>
                  <input className="form-control" type="text" name="location" value={this.state.location} onChange={this.handleOnChange} placeholder="Location"/>
                </div>
                <button className="btn btn-dark btn-block" data-dismiss="modal" onClick={this.handleOnSubmit}>
                  Update Location
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(TournamentLocationModal)
