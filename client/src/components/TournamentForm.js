import React, { Component } from 'react'

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
    this.props.addTournamentToDatabase(tournament)
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

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <h2>Add Tournament</h2>
          <p>
            <label htmlFor="tournament-title">Title</label>
            <input type="text" name="title" value={this.state.title} onChange={this.handleOnChange} placeholder="Title"/>
          </p>
          <p>
            <label htmlFor="tournament-start_date">Start Date</label>
            <input type="text" name="start_date" value={this.state.start_date} onChange={this.handleOnChange} placeholder="Start Date"/>
          </p>
          <p>
            <label htmlFor="tournament-end_date">End Date</label>
            <input type="text" name="end_date" value={this.state.end_date} onChange={this.handleOnChange} placeholder="End Date"/>
          </p>
          <p>
            <label htmlFor="tournament-location">Location</label>
            <input type="text" name="location" value={this.state.location} onChange={this.handleOnChange} placeholder="Location"/>
          </p>
          <p>
            <label htmlFor="tournament-surface">Surface</label>
            <input type="text" name="surface" value={this.state.surface} onChange={this.handleOnChange} placeholder="Surface"/>
          </p>
          <p>
            <label htmlFor="tournament-age_category">Age Category</label>
            <input type="text" name="age_category" value={this.state.age_category} onChange={this.handleOnChange} placeholder="Age Category"/>
          </p>
          <p>
            <label htmlFor="tournament-draw_size">Draw Size</label>
            <input type="text" name="draw_size" value={this.state.draw_size} onChange={this.handleOnChange} placeholder="Draw Size"/>
          </p>
          <p>
            <label htmlFor="tournament-points">Points</label>
            <input type="text" name="points" value={this.state.points} onChange={this.handleOnChange} placeholder="Points"/>
          </p>
          <button>Add Tournament</button>
        </form>
      </div>
    )
  }
}

export default TournamentForm
