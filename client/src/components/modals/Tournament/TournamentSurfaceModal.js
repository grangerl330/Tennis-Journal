import React, { Component } from 'react'
import { withRouter } from 'react-router';

class TournamentSurfaceModal extends Component {
  constructor(props){
    super(props)

    this.state = {
      surface: "",
      user_id: "",
      id: ""
    }
  }

  componentDidMount(){
    this.setState({
      surface: this.props.tournament.surface,
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
      surface: this.state.surface
    })

    this.props.history.push(`/tournaments/${tournament.id}`)
  }

  render() {
    return (
      <div className="modal fade mt-3" id="tournamentSurfaceModal">
        <div className="modal-dialog modal-md">
          <div className="modal-content">
            <div className="modal-header bg-info text-white">
              <h5 className="modal-title">Edit Surface</h5>
              <button className="close" data-dismiss="modal">
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="Tournament Surface">Surface: </label>
                  <select className="form-control" name="surface" onChange={this.handleOnChange} value={this.state.surface}>
                    <option value="Clay">Clay</option>
                    <option value="Hard">Hard</option>
                    <option value="Grass">Grass</option>
                    <option value="Carpet">Carpet</option>
                  </select>
                </div>
                <button className="btn btn-dark btn-block" data-dismiss="modal" onClick={this.handleOnSubmit}>
                  Update Surface
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(TournamentSurfaceModal)
