import React, { Component } from 'react'
import $ from 'jquery'
import classNames from 'classnames'
import { withRouter } from 'react-router';

class MatchModal extends Component {
  constructor(props){
    super(props)

    this.state = {
      round: "",
      score: "",
      result: "",
      date: "",
      time: "",
      notes: "",
      id: "",
      opponent_first_name: "",
      firstNameIsValid: true,
      opponent_last_name: "",
      lastNameIsValid: true,
      formIsValid: false,
      tournament_id: props.tournament.id
    }
  }

  componentDidMount(){
    if(this.props.currentMatch){
      this.setState({
        round: this.props.currentMatch.round,
        score: this.props.currentMatch.score,
        result: this.props.currentMatch.result,
        date: this.props.currentMatch.date,
        time: this.props.currentMatch.time,
        notes: this.props.currentMatch.notes,
        id: this.props.currentMatch.id,
        opponent_first_name: this.props.currentMatch.opponent.first_name,
        opponent_last_name: this.props.currentMatch.opponent.last_name
      })
    }
  }

  formIsValid = () => {
    let isValid = true;

    if (this.state.opponent_first_name === "") {
      this.setState({
        firstNameIsValid: false
      })
      isValid = false
    }

    if (this.state.opponent_last_name === "") {
      this.setState({
        lastNameIsValid: false
      })
      isValid = false
    }

    this.setState({
      formIsValid: isValid
    })

    return isValid
  }

  resetValidations = () => {
    this.setState({
      firstNameIsValid: true,
      lastNameIsValid: true,
      formIsValid: false,
    })
  }

  roundOptions = () => {
    switch(this.props.tournament.draw_size){
      case 128:
        return [128, 64, 32, 16, 'Quarterfinal', 'Semifinal', 'Final']
      case 64:
        return [64, 32, 16, 'Quarterfinal', 'Semifinal', 'Final']
      case 32:
        return [32, 16, 'Quarterfinal', 'Semifinal', 'Final']
      case 16:
        return [16, 'Quarterfinal', 'Semifinal', 'Final']
      case 8:
        return ['Quarterfinal', 'Semifinal', 'Final']
      case 4:
        return ['Semifinal', 'Final']
      case 2:
        return ['Final']
      default:
        return []
    }
  }

  round_name_to_number = (round) => {
    switch(round){
      case 'Quarterfinal':
        return 8
      case 'Semifinal':
        return 4
      case 'Final':
        return 2
      default:
        return ""
    }
  }

  roundOptionsDisplay = () => {
    let displayOptions = []
    let createdMatchRounds = []

    this.props.matches.forEach(match => {createdMatchRounds.push(match.round)})

    let roundOptions = this.roundOptions().filter(option => {
      return !createdMatchRounds.includes(option)
    })

    let key = 1

    displayOptions.push(<option disabled hidden></option>)

    roundOptions.forEach(option => {
      if(parseInt(option) > 8){
        displayOptions.push(<option value={`${option}`} key={`${key}`}>{option}</option>)
      } else {
        displayOptions.push(<option value={`${this.round_name_to_number(option)}`} key={`${key}`}>{option}</option>)
      }
        key += 1
    })

    return displayOptions
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
      const match = this.state

      if(this.props.type === "Edit") {
        this.props.editMatchInDatabase(match)
        this.props.history.push(`/matches/${this.props.currentMatch.id}`)
      } else {
        this.props.addMatchToDatabase(match)
        this.props.history.push(`/tournaments/${this.props.tournament.id}`)
      }

      $('#matchModal').modal('hide')
    }
  }

  render() {
    const opponentFirstNameInputClass = classNames('form-control',
      { 'is-invalid': !this.state.firstNameIsValid }
    );

    const opponentLastNameInputClass = classNames('form-control mt-2',
      { 'is-invalid': !this.state.lastNameIsValid }
    );

    return (
      <div className="modal fade mt-3" id="matchModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button className="close" data-dismiss="modal">
                <i className="fas fa-times fa-sm text-grey"></i>
              </button>
            </div>
            <div className="modal-body px-5">
              <h5 className="text-green mb-4">{this.props.type} Match</h5>
              <form>
                <div className="row mt-3">
                  <div className="col-6">
                    <label htmlFor="Match Round">Round: </label>
                    <select className="form-control" name="round" value={this.state.round} onChange={this.handleOnChange} required>
                      {this.roundOptionsDisplay()}
                    </select>
                  </div>
                  <div className="col-6">
                    <label htmlFor="Match Result">Result: </label>
                    <select className="form-control" name="result" onChange={this.handleOnChange} value={this.state.result}>
                      <option disabled hidden></option>
                      <option value="Won">Won</option>
                      <option value="Lost">Lost</option>
                      <option value="In Progress">In Progress</option>
                    </select>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-6">
                    <label htmlFor="Match Score">Score: </label>
                    <input className="form-control" name="score" onChange={this.handleOnChange} value={this.state.score || ''} />
                  </div>
                  <div className="col-6">
                    <label htmlFor="Match Date">Date: </label>
                    <input className="form-control" name="date" type="date" onChange={this.handleOnChange} value={this.state.date || ''} />
                  </div>
                </div>
                {this.props.type === "Add" && (
                  <div className="row justify-content-center mt-3">
                    <div className="col-6">
                      <label htmlFor="First Name">Opponent: </label>
                      <input className={opponentFirstNameInputClass} type="text" name="opponent_first_name" value={this.state.opponent_first_name} onChange={this.handleOnChange} placeholder="First Name" required/>
                      <div className="invalid-feedback">
                        Please enter First Name
                      </div>
                    </div>
                    <div className="col-6">
                      <label htmlFor="LastName"></label>
                      <input className={opponentLastNameInputClass} type="text" name="opponent_last_name" value={this.state.opponent_last_name} onChange={this.handleOnChange} placeholder="Last Name" required/>
                      <div className="invalid-feedback">
                        Please enter Last Name
                      </div>
                    </div>
                  </div>
                )}
                <div className="row justify-content-center mt-3">
                  <div className="col-6">
                    <label htmlFor="Match Time">Time: </label>
                    <input className="form-control" name="time" type="time" onChange={this.handleOnChange} value={this.state.time || ''} />
                  </div>
                </div>
                <div className="row justify-content-center mt-3">
                  <div className="col-12">
                    <label htmlFor="Match Notes">Notes: </label>
                    <textarea className="form-control" rows="8" name="notes" onChange={this.handleOnChange} value={this.state.notes || ''} />
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

export default withRouter(MatchModal)
