import React, { Component } from 'react'
import $ from 'jquery'
import classNames from 'classnames'
import { withRouter } from 'react-router';

class TournamentModal extends Component {
  constructor(props){
    super(props)

    this.state = {
      title: "",
      titleIsValid: true,
      start_date: "",
      startDateIsValid: true,
      end_date: "",
      location: "",
      locationIsValid: true,
      surface: "",
      surfaceIsValid: true,
      age_category: "",
      ageCategoryIsValid: true,
      draw_size: "",
      drawSizeIsValid: true,
      formIsValid: false,
      points: "",
      user_id: "",
      id: ""
    }
  }

  componentDidMount(){
    if(this.props.tournament) {
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

    if (this.state.surface === "") {
      this.setState({
        surfaceIsValid: false
      })
      isValid = false
    }

    if (this.state.location === "") {
      this.setState({
        locationIsValid: false
      })
      isValid = false
    }

    this.setState({
      formIsValid: isValid
    })

    return isValid
  }

  handleOnChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()

    if(this.formIsValid()) {
      const tournament = Object.assign({}, this.state)

      if(tournament.title === "") {
        tournament.title = this.props.tournament.title
      }

      if(this.props.type === "Add") {
        this.props.addTournamentToDatabase(tournament)

        this.setState({
          title: "",
          titleIsValid: true,
          start_date: "",
          startDateIsValid: true,
          end_date: "",
          location: "",
          locationIsValid: true,
          surface: "",
          surfaceIsValid: true,
          age_category: "",
          ageCategoryIsValid: true,
          draw_size: "",
          drawSizeIsValid: true,
          formIsValid: false,
          points: "",
          user_id: "",
          id: ""
        })
      } else if(this.props.type === "Edit") {
        this.props.editTournamentInDatabase(tournament)

        this.setState({
          title: tournament.title,
          titleIsValid: true,
          start_date: tournament.start_date,
          startDateIsValid: true,
          end_date: tournament.end_date,
          age_category: tournament.age_category,
          ageCategoryIsValid: true,
          draw_size: tournament.draw_size,
          drawSizeIsValid: true,
          location: tournament.location,
          locationIsValid: true,
          points: tournament.points,
          surface: tournament.surface,
          surfaceIsValid: true
        })
      }

      $('#tournamentModal').modal('hide')
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

    const surfaceInputClass = classNames('form-control',
      { 'is-invalid': !this.state.surfaceIsValid }
    );

    const locationInputClass = classNames('form-control',
      { 'is-invalid': !this.state.locationIsValid }
    );

    return (
      <div className="modal fade mt-3" id="tournamentModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button className="close" data-dismiss="modal">
                <i className="fas fa-times fa-sm text-grey"></i>
              </button>
            </div>
            <div className="modal-body px-5">
              <h5 className="text-green mb-4">{this.props.type} Tournament</h5>
              <form>
                <div className="row mt-3">
                  <div className="col-6">
                    <label htmlFor="Name">Name:</label>
                    <input className={titleInputClass} type="text" name="title" value={this.state.title} onChange={this.handleOnChange} required/>
                    <div className="invalid-feedback">
                      Please enter a name
                    </div>
                  </div>
                  <div className="col-6">
                    <label htmlFor="Draw Size">Draw Size</label>
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
                      Please select a draw size
                    </div>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-6">
                    <label htmlFor="Start Date">Start Date:</label>
                    <input className={startDateInputClass} type="date" name="start_date" value={this.state.start_date} onChange={this.handleOnChange} required/>
                    <div className="invalid-feedback">
                      Please select a start date
                    </div>
                  </div>
                  <div className="col-6">
                    <label htmlFor="Tournament End Date">End Date: </label>
                    <input className="form-control" type="date" name="end_date" value={this.state.end_date} onChange={this.handleOnChange} />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-6">
                    <label htmlFor="Tournament Age Category">Division: </label>
                    <select className={ageCategoryInputClass} name="age_category" onChange={this.handleOnChange} value={this.state.age_category} required>
                      <option disabled hidden></option>
                      <option value="12 and Under">12 and Under</option>
                      <option value="14 and Under">14 and Under</option>
                      <option value="16 and Under">16 and Under</option>
                      <option value="18 and Under">18 and Under</option>
                      <option value="Men's Division">Men's Division</option>
                      <option value="Women's Division">Women's Division</option>
                    </select>
                    <div className="invalid-feedback">
                      Please select a division
                    </div>
                  </div>
                  <div className="col-6">
                    <label htmlFor="Tournament Surface">Surface: </label>
                    <select className={surfaceInputClass} name="surface" onChange={this.handleOnChange} value={this.state.surface || ''}>
                      <option disabled hidden></option>
                      <option value="Clay">Clay</option>
                      <option value="Hard">Hard</option>
                      <option value="Grass">Grass</option>
                      <option value="Carpet">Carpet</option>
                    </select>
                    <div className="invalid-feedback">
                      Please select a surface
                    </div>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-6">
                    <label htmlFor="Tournament Location">Location: </label>
                    <input className={locationInputClass} type="text" name="location" value={this.state.location || ''} onChange={this.handleOnChange} />
                    <div className="invalid-feedback">
                      Please enter a location
                    </div>
                  </div>
                  <div className="col-6">
                    <label htmlFor="Tournament Points">Points: </label>
                    <input className="form-control" type="text" name="points" value={this.state.points || ''} onChange={this.handleOnChange} />
                  </div>
                </div>
                <div className="form-group text-right mt-5 mb-4">
                  <button className="btn mr-4 text-grey" data-dismiss="modal">Cancel</button>
                  <button className="btn btn-green" onClick={this.handleOnSubmit}>{this.props.type === "Edit" ? "Update" : "Add"}</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(TournamentModal)
