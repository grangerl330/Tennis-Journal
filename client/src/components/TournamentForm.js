import React, { Component } from 'react'
import classNames from 'classnames'
import { withRouter } from 'react-router';

class TournamentForm extends Component {
  constructor(props){
    super(props)

    this.state = {
      title: "",
      titleIsValid: true,
      start_date: "",
      startDateIsValid: true,
      end_date: "",
      location: "",
      surface: "",
      age_category: "",
      ageCategoryIsValid: true,
      draw_size: "",
      drawSizeIsValid: true,
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

    if (this.formIsValid()) {
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
  }

  formIsValid = () => {
    let isValid = true;

    if (this.state.title === "") {
      this.setState({
        titleIsValid: false
      })
      isValid = false
    }

    if (this.state.start_date === "") {
      this.setState({
        startDateIsValid: false
      })
      isValid = false
    }

    if (this.state.age_category === "") {
      this.setState({
        ageCategoryIsValid: false
      })
      isValid = false
    }

    if (this.state.draw_size === "") {
      this.setState({
        drawSizeIsValid: false
      })
      isValid = false
    }

    return isValid
  }

  formHeader = () => {
    if(this.props.add) {
      return <h5>Add A New Tournament</h5>
    } else {
      return <h5>Edit Tournament</h5>
    }
  }

  formButton = () => {
    if(this.props.add) {
      return (
        <button className="btn btn-dark btn-block" onClick={this.handleOnSubmit}>
          Add Tournament
        </button>
      )
    } else {
      return (
        <button className="btn btn-dark btn-block" onClick={this.handleOnSubmit}>
          Update Tournament
        </button>
      )
    }
  }

  render() {
    const titleInputClass = classNames('form-control',
      { 'is-invalid': !this.state.titleIsValid }
    );

    const startDateInputClass = classNames('form-control',
      { 'is-invalid': !this.state.startDateIsValid }
    );

    const ageCategoryInputClass = classNames('form-control',
      { 'is-invalid': !this.state.ageCategoryIsValid }
    );

    const drawSizeInputClass = classNames('form-control',
      { 'is-invalid': !this.state.drawSizeIsValid }
    );

    return (
      <div className="section" id="tournament-form">
        <div className="container-fluid py-2 bg-info text-white mb-4">
          <div className="row">
            <div className="col text-center">
              <h1>Add A Tournament</h1>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7">
              <div className="card mb-5">
                <div className="card-header">
                  <h4>New Tournament</h4>
                </div>
                <div className="card-body">
                  <form>
                    <div className="row mb-3">
                      <div className="col-6">
                        <div className="form-group">
                          <label htmlFor="Tournament Title">Title: </label>
                          <input className={titleInputClass} type="text" name="title" value={this.state.title} onChange={this.handleOnChange} placeholder="Name Of Tournament" required/>
                          <div className="invalid-feedback">
                            You must enter a title
                          </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="Tournament Start Date">Start Date: </label>
                          <input className={startDateInputClass} type="date" name="start_date" value={this.state.start_date} onChange={this.handleOnChange} placeholder="Start Date" required/>
                          <div className="invalid-feedback">
                            You must enter a start date
                          </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="Tournament End Date">End Date: </label>
                          <input className="form-control" type="date" name="end_date" value={this.state.end_date} onChange={this.handleOnChange} placeholder="End Date"/>
                        </div>
                        <div className="form-group">
                          <label htmlFor="Tournament Location">Location: </label>
                          <input className="form-control" type="text" name="location" value={this.state.location} onChange={this.handleOnChange} placeholder="Name Of Club"/>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-group">
                          <label htmlFor="Tournament Age Category">Division: </label>
                          <select className={ageCategoryInputClass} name="age_category" onChange={this.handleOnChange} value={this.state.age_category} required>
                            <option disabled hidden></option>
                            <option value="12 and Under">12 and Under</option>
                            <option value="14 and Under">14 and Under</option>
                            <option value="16 and Under">16 and Under</option>
                            <option value="18 and Under">18 and Under</option>
                            <option value="Men's Division">Men's Division</option>
                          </select>
                          <div className="invalid-feedback">
                            You must enter a division
                          </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="Tournament Draw Size">Draw Size: </label>
                          <select className={drawSizeInputClass} name="draw_size" onChange={this.handleOnChange} value={this.state.draw_size} required>
                            <option disabled hidden></option>
                            <option value="128">128</option>
                            <option value="64">64</option>
                            <option value="32">32</option>
                            <option value="16">16</option>
                            <option value="8">8</option>
                            <option value="4">4</option>
                            <option value="2">2</option>
                          </select>
                          <div className="invalid-feedback">
                            You must enter a draw size
                          </div>
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
                          <label htmlFor="tournament-points">Points: </label>
                          <input className="form-control" type="text" name="points" value={this.state.points} onChange={this.handleOnChange} placeholder="Points Gained"/>
                        </div>
                      </div>
                    </div>
                      <div className="form-group text-center">
                        {this.formButton()}
                      </div>
                    </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(TournamentForm)
