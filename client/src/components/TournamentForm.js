import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router';

class TournamentForm extends Component {
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
        points: this.props.tournament.points,
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

    this.props.history.push(`/tournaments/${tournament.id}`)
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
      return <button>Edit Tournament</button>
    }
  }

  formCloseWindowButton = () => {
    if(this.props.add) {
      return <NavLink className="close-window-button" to='/tournaments'>x</NavLink>
    } else {
      return <NavLink className="close-window-button" to={`/tournaments/view/${this.props.tournamentId}`}>x</NavLink>
    }
  }

  render() {
    return (
      <div className="form-window">
        {this.formCloseWindowButton()}
        <form onSubmit={this.handleOnSubmit} className="form-text">
          {this.formHeader()}
          <p>
            <label htmlFor="tournament-title">Title: </label>
            <input type="text" name="title" value={this.state.title} onChange={this.handleOnChange} placeholder="name of tournament"/>
          </p>
          <p>
            <label htmlFor="tournament-start_date">Start Date: </label>
            <input type="date" name="start_date" value={this.state.start_date} onChange={this.handleOnChange} placeholder="Start Date"/>
          </p>
          <p>
            <label htmlFor="tournament-end_date">End Date: </label>
            <input type="date" name="end_date" value={this.state.end_date} onChange={this.handleOnChange} placeholder="End Date"/>
          </p>
          <p>
            <label htmlFor="tournament-location">Location: </label>
            <input type="text" name="location" value={this.state.location} onChange={this.handleOnChange} placeholder="name of club"/>
          </p>
          <p>
            <label htmlFor="tournament-surface">Surface: </label>
            <select name="surface" onChange={this.handleOnChange}>
              <option value="Clay">Clay</option>
              <option value="Hard">Hard</option>
              <option value="Grass">Grass</option>
              <option value="Carpet">Carpet</option>
            </select>
          </p>
          <p>
            <label htmlFor="tournament-age_category">Division: </label>
            <select name="age_category" onChange={this.handleOnChange}>
              <option value="12 and Under">12 and Under</option>
              <option value="14 and Under">14 and Under</option>
              <option value="16 and Under">16 and Under</option>
              <option value="18 and Under">18 and Under</option>
            </select>
          </p>
          <p>
            <label htmlFor="tournament-draw_size">Draw Size: </label>
            <select name="draw_size" onChange={this.handleOnChange}>
              <option value="128">128</option>
              <option value="64">64</option>
              <option value="32">32</option>
              <option value="16">16</option>
              <option value="8">8</option>
              <option value="4">4</option>
              <option value="2">2</option>
            </select>
          </p>
          <p>
            <label htmlFor="tournament-points">Points: </label>
            <input type="text" name="points" value={this.state.points} onChange={this.handleOnChange} placeholder="points gained"/>
          </p>
          {this.formButton()}
        </form>
      </div>
    )
  }
}

export default withRouter(TournamentForm)
