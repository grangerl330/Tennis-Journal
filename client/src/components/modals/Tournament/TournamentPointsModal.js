import React, { Component } from 'react'
import { withRouter } from 'react-router';

class TournamentPointsModal extends Component {
  constructor(props){
    super(props)

    this.state = {
      points: "",
      user_id: "",
      id: ""
    }
  }

  componentDidMount(){
    this.setState({
      points: this.props.tournament.points,
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

    if(tournament.points === ""){
      tournament.points = 0
    }

    this.props.sendTournamentToDatabase(tournament)
    this.setState({
      points: this.state.points
    })

    this.props.history.push(`/tournaments/${tournament.id}`)
  }

  render() {
    return (
      <div className="modal fade mt-3" id="tournamentPointsModal">
        <div className="modal-dialog modal-md">
          <div className="modal-content">
            <div className="modal-header bg-info text-white">
              <h5 className="modal-title">Edit Points</h5>
              <button className="close" data-dismiss="modal">
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="Tournament Points">Points: </label>
                  <input className="form-control" type="text" name="points" value={this.state.points} onChange={this.handleOnChange} placeholder="Points"/>
                </div>
                <button className="btn btn-dark btn-block" data-dismiss="modal" onClick={this.handleOnSubmit}>
                  Update Points
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(TournamentPointsModal)
