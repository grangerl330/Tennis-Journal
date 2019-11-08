import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import closeWindowImg from '../images/close-window.png'
import { withRouter } from 'react-router';

class TournamentFormModal extends Component {
  constructor(props){
    super(props)

    this.state = {
      title: "",
      start_date: "",
      end_date: "",
      location: "",
      surface: "",
      age_category: "",
      draw_size: "",
      points: "",
      user_id: "",
      id: ""
    }
  }

  componentDidMount(){
    if(this.props.edit){
      this.setState({
        title: this.props.tournament.title,
        start_date: this.props.tournament.start_date,
        end_date: this.props.tournament.end_date,
        location: this.props.tournament.location,
        surface: this.props.tournament.surface,
        age_category: this.props.tournament.age_category,
        draw_size: this.props.tournament.draw_size,
        points: this.props.tournament.points || 0,
        user_id: this.props.tournament.user_id,
        id: this.props.tournament.id
      })
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

    const tournament = this.state
    this.props.sendTournamentToDatabase(tournament)
    this.setState({
      title: "",
      start_date: "",
      end_date: "",
      location: "",
      surface: "",
      age_category: "",
      draw_size: "",
      points: "",
      user_id: "",
      id: ""
    })

    this.props.history.push(`/tournaments/view/${tournament.id}`)
  }

  formHeader = () => {
    if(this.props.add) {
      return <h2>Add Tournament</h2>
    } else {
      return <h2>Edit Tournament</h2>
    }
  }

  formButton = () => {
    if(this.props.add) {
      return <button>Add Tournament</button>
    } else {
      return <button>Save Tournament</button>
    }
  }

  formCloseWindowButton = () => {
    if(this.props.add) {
      return (
        <NavLink className="close-window-button" to='/tournaments'>
          <img src={closeWindowImg} alt="Close Window"/>
        </NavLink>
      )
    } else {
      return (
        <NavLink className="close-window-button" to={`/tournaments/view/${this.props.tournamentId}`}>
          <img src={closeWindowImg} alt="Close Window"/>
        </NavLink>
      )
    }
  }

  render() {
    return (
      <div className="modal fade" id="addTournamentModal">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header bg-info text-white">
              <h5 className="modal-title">Add A New Tournament</h5>
              <button className="close" data-dismiss="modal">
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={this.handleOnSubmit}>
                <div className="form-group">
                  <label htmlFor="Tournament Title">Title: </label>
                  <input className="form-control" type="text" name="title" value={this.state.title} onChange={this.handleOnChange} placeholder="Name Of Tournament" required/>
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
                  <label htmlFor="Tournament Location">Location: </label>
                  <input className="form-control" type="text" name="location" value={this.state.location} onChange={this.handleOnChange} placeholder="Name Of Club"/>
                </div>
                <div className="form-group">
                  <label htmlFor="Tournament Age Category">Division: </label>
                  <select className="form-control" name="age_category" onChange={this.handleOnChange} value={this.state.age_category} required>
                    <option disabled hidden></option>
                    <option value="12 and Under">12 and Under</option>
                    <option value="14 and Under">14 and Under</option>
                    <option value="16 and Under">16 and Under</option>
                    <option value="18 and Under">18 and Under</option>
                    <option value="Men's Division">Men's Division</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="Tournament Surface">Surface: </label>
                  <select className="form-control" name="surface" onChange={this.handleOnChange} value={this.state.surface}>
                    <option disabled hidden></option>
                    <option value="Clay">Clay</option>
                    <option value="Hard">Hard</option>
                    <option value="Grass">Grass</option>
                    <option value="Carpet">Carpet</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="Tournament Draw Size">Draw Size: </label>
                  <select className="form-control" name="draw_size" onChange={this.handleOnChange} value={this.state.draw_size} required>
                    <option disabled hidden></option>
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
                  <label htmlFor="tournament-points">Points: </label>
                  <input className="form-control" type="text" name="points" value={this.state.points} onChange={this.handleOnChange} placeholder="Points Gained"/>
                </div>
                <div className="form-group d-flex justify-content-center">
                  <input className="btn btn-dark" type="submit" value="Add Tournament"/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(TournamentFormModal)
