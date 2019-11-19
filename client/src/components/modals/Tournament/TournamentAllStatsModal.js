import React, { Component } from 'react'
import { withRouter } from 'react-router';

class TournamentAllStatsModal extends Component {
  constructor(props){
    super(props)

    this.state = {
      title: "",
      start_date: "",
      startDateIsValid: true,
      end_date: "",
      age_category: "",
      draw_size: "",
      location: "",
      points: "",
      surface: "",
      user_id: "",
      id: ""
    }
  }

  componentDidMount(){
    this.setState({
      title: this.props.tournament.title,
      start_date: this.props.tournament.start_date,
      end_date: this.props.tournament.end_date,
      age_category: this.props.tournament.age_category,
      draw_size: this.props.tournament.draw_size,
      location: this.props.tournament.location,
      points: this.props.tournament.points,
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

    const tournament = Object.assign({}, this.state)

    if(tournament.title === "") {
      tournament.title = this.props.tournament.title
    }

    this.props.sendTournamentToDatabase(tournament)
    this.setState({
      title: tournament.title,
      start_date: tournament.start_date,
      end_date: tournament.end_date,
      age_category: tournament.age_category,
      draw_size: tournament.draw_size,
      location: tournament.location,
      points: tournament.points,
      surface: tournament.surface
    })

    this.props.history.push(`/tournaments/${tournament.id}`)
  }

  render() {
    return (
      <div className="modal fade mt-3" id="tournamentStatsModal">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header bg-info text-white">
              <h5 className="modal-title">Edit Tournament</h5>
              <button className="close" data-dismiss="modal">
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="row mb-3">
                  <div className="col">
                    <div className="form-group">
                      <label htmlFor="Tournament Title">Title: </label>
                      <input className="form-control" type="text" name="title" value={this.state.title} onChange={this.handleOnChange} placeholder="Title"/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="Tournament Start Date">Start Date: </label>
                      <input className="form-control" type="date" name="start_date" value={this.state.start_date} onChange={this.handleOnChange} placeholder="Start Date" required/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="Tournament End Date">End Date: </label>
                      <input className="form-control" type="date" name="end_date" value={this.state.end_date} onChange={this.handleOnChange} placeholder="End Date"/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="Tournament Age Category">Division: </label>
                      <select className="form-control" name="age_category" onChange={this.handleOnChange} value={this.state.age_category}>
                        <option value="12 and Under">12 and Under</option>
                        <option value="14 and Under">14 and Under</option>
                        <option value="16 and Under">16 and Under</option>
                        <option value="18 and Under">18 and Under</option>
                        <option value="Men's Division">Men's Division</option>
                        <option value="Women's Division">Women's Division</option>
                      </select>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <label htmlFor="Tournament Draw Size">Draw Size: </label>
                      <select className="form-control" name="draw_size" onChange={this.handleOnChange} value={this.state.draw_size}>
                        <option value="128">128</option>
                        <option value="64">64</option>
                        <option value="32">32</option>
                        <option value="16">16</option>
                        <option value="8">8</option>
                        <option value="4">4</option>
                        <option value="2">2</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="Tournament Location">Location: </label>
                      <input className="form-control" type="text" name="location" value={this.state.location} onChange={this.handleOnChange} placeholder="Location"/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="Tournament Surface">Surface: </label>
                      <select className="form-control" name="surface" onChange={this.handleOnChange} value={this.state.surface}>
                        <option value="Clay">Clay</option>
                        <option value="Hard">Hard</option>
                        <option value="Grass">Grass</option>
                        <option value="Carpet">Carpet</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="Tournament Points">Points: </label>
                      <input className="form-control" type="text" name="points" value={this.state.points} onChange={this.handleOnChange} placeholder="Points"/>
                    </div>
                  </div>
                </div>
                <button className="btn btn-dark btn-block" data-dismiss="modal" onClick={this.handleOnSubmit}>
                  Update Tournament
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(TournamentAllStatsModal)
