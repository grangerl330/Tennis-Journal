import React, { Component } from 'react'
import { withRouter } from 'react-router';

class TournamentTitleModal extends Component {
  constructor(props){
    super(props)

    this.state = {
      title: "",
      user_id: "",
      id: ""
    }
  }

  componentDidMount(){
    this.setState({
      title: this.props.tournament.title,
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

    if(tournament.title === "") {
      tournament.title = this.props.tournament.title
    }

    this.props.sendTournamentToDatabase(tournament)
    this.setState({
      title: tournament.title
    })

    this.props.history.push(`/tournaments/${tournament.id}`)
  }

  render() {
    return (
      <div className="modal fade mt-3" id="tournamentTitleModal">
        <div className="modal-dialog modal-md">
          <div className="modal-content">
            <div className="modal-header bg-info text-white">
              <h5 className="modal-title">Edit Title</h5>
              <button className="close" data-dismiss="modal">
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="Tournament Title">Title: </label>
                  <input className="form-control" type="text" name="title" value={this.state.title} onChange={this.handleOnChange} placeholder="Title"/>
                </div>
                <button className="btn btn-dark btn-block" data-dismiss="modal" onClick={this.handleOnSubmit}>
                  Update Title
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(TournamentTitleModal)
