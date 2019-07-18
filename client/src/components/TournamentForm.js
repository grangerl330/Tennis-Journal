import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class TournamentForm extends Component {
  constructor(){
    super()

    this.state = {
      title: "",
      start_date: "",
      end_date: "",
      location: "",
      surface: "",
      age_category: "",
      draw_size: "",
      points: "",
      user_id: ""
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
      user_id: ""
    })
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
            <input type="text" name="title" value={this.state.title} onChange={this.handleOnChange} placeholder="Title"/>
          </p>
          <p>
            Start Date:
            <input type="date" name="start_date" value={this.state.start_date} onChange={this.handleOnChange} placeholder="Start Date"/>
          </p>
          <p>
            End Date:
            <input type="date" name="end_date" value={this.state.end_date} onChange={this.handleOnChange} placeholder="End Date"/>
          </p>
          <p>
            <input type="text" name="location" value={this.state.location} onChange={this.handleOnChange} placeholder="Location"/>
          </p>
          <p>
            <input type="text" name="surface" value={this.state.surface} onChange={this.handleOnChange} placeholder="Surface"/>
          </p>
          <p>
            <input type="text" name="age_category" value={this.state.age_category} onChange={this.handleOnChange} placeholder="Age Category"/>
          </p>
          <p>
            <input type="text" name="draw_size" value={this.state.draw_size} onChange={this.handleOnChange} placeholder="Draw Size"/>
          </p>
          <p>
            <input type="text" name="points" value={this.state.points} onChange={this.handleOnChange} placeholder="Points"/>
          </p>
          {this.formButton()}
        </form>
      </div>
    )
  }
}

export default TournamentForm
