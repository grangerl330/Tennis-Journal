import React, { Component } from 'react'
import classNames from 'classnames'
import { withRouter } from 'react-router';

class MatchForm extends Component {
  constructor(props){
    super(props)

    this.state = {
      date: "",
      time: "",
      round: "",
      roundIsValid: true,
      result: "",
      resultIsValid: true,
      score: "",
      notes: "",
      opponent_first_name: "",
      opponentFirstNameIsValid: true,
      opponent_last_name:"",
      opponentLastNameIsValid: true,
      id: "",
      tournament_id: props.tournamentId
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

      this.props.sendMatchToDatabase(tournament)
      this.setState({
        date: "",
        time: "",
        round: "",
        result: "",
        score: "",
        notes: "",
        id: "",
        tournament_id: this.props.tournamentId,
        opponent_first_name: "",
        opponent_last_name:""
      })

      this.props.history.push(`/tournaments/${tournament.id}`)
    }
  }

  formIsValid = () => {
    let isValid = true;

    if (this.state.round === "") {
      this.setState({
        roundIsValid: false
      })
      isValid = false
    }

    if (this.state.result === "") {
      this.setState({
        resultIsValid: false
      })
      isValid = false
    }

    if (this.state.opponent_first_name === "") {
      this.setState({
        opponentFirstNameIsValid: false
      })
      isValid = false
    }

    if (this.state.opponent_last_name === "") {
      this.setState({
        opponentLastNameIsValid: false
      })
      isValid = false
    }

    return isValid
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

  roundOptionsDisplay = () => {
    var displayOptions = []
    var createdMatchRounds = []
    this.props.matches.forEach(match => {createdMatchRounds.push(match.round)})
    var roundOptions = this.roundOptions().filter(option => {
      return !createdMatchRounds.includes(option)
    })
    var key = 1

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

  render() {
    const opponentFirstNameInputClass = classNames('form-control',
      { 'is-invalid': !this.state.opponentFirstNameIsValid }
    );

    const opponentLastNameInputClass = classNames('form-control',
      { 'is-invalid': !this.state.opponentLastNameIsValid }
    );

    const roundInputClass = classNames('form-control',
      { 'is-invalid': !this.state.roundIsValid }
    );

    const resultInputClass = classNames('form-control',
      { 'is-invalid': !this.state.resultIsValid }
    );

    return (
      <div className="section" id="tournament-form">
        <div className="container-fluid py-2 bg-info text-white mb-4">
          <div className="row">
            <div className="col text-center">
              <h1>Add A Match</h1>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7">
              <div className="card mb-5">
                <div className="card-header border">
                  <h4>New Match</h4>
                </div>
                <div className="card-body">
                  <form>
                    <div className="row">
                      <div className="col-6">
                        <div className="form-group">
                          <div className="row ml-1">
                            <label htmlFor="Opponent Names">vs:</label>
                          </div>
                          <div className="row">
                            <div className="col-6 pr-1">
                              <input className={opponentFirstNameInputClass} type="text" name="opponent_first_name" value={this.state.opponent_first_name} onChange={this.handleOnChange} placeholder="First Name" required/>
                              <div className="invalid-feedback">
                                Please enter First Name
                              </div>
                            </div>
                            <div className="col-6 pl-1">
                              <input className={opponentLastNameInputClass} type="text" name="opponent_last_name" value={this.state.opponent_last_name} onChange={this.handleOnChange} placeholder="Last Name" required/>
                              <div className="invalid-feedback">
                                Please enter Last Name
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="Match Date">Date: </label>
                          <input className="form-control" type="date" name="date" value={this.state.date} onChange={this.handleOnChange} />
                        </div>
                        <div className="form-group">
                          <label htmlFor="Match Time">Time: </label>
                          <input className="form-control" type="time" name="time" value={this.state.time} onChange={this.handleOnChange} />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-group">
                          <label htmlFor="Match Round">Round: </label>
                          <select className={roundInputClass} name="round" value={this.state.round} onChange={this.handleOnChange} required>
                            <option disabled hidden></option>
                            {this.roundOptionsDisplay()}
                          </select>
                          <div className="invalid-feedback">
                            Please select a round
                          </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="Match Result">Result: </label>
                          <select className={resultInputClass} name="result" value={this.state.result} onChange={this.handleOnChange} required>
                            <option disabled hidden></option>
                            <option value="Won">Won</option>
                            <option value="Lost">Lost</option>
                          </select>
                          <div className="invalid-feedback">
                            Please select a result
                          </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="Match Score">Score: </label>
                          <input className="form-control" type="text" name="score" value={this.state.score} onChange={this.handleOnChange} placeholder="ex: 6-1, 6-0"/>
                        </div>
                      </div>
                    </div>
                    <div className="row justify-content-center mb-2">
                      <div className="form-group text-center">
                        <label htmlFor="Match Notes">Notes: </label>
                        <textarea className="form-control" rows="7" cols="60" name="notes" value={this.state.notes} onChange={this.handleOnChange} placeholder="Notes about the match">Notes:</textarea>
                      </div>
                    </div>
                      <div className="form-group text-center">
                        <button className="btn btn-dark btn-block" onClick={this.handleOnSubmit}>
                          Add Match
                        </button>
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

export default withRouter(MatchForm)
