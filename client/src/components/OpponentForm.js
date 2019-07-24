import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router';

class OpponentForm extends Component {
  constructor(props){
    super(props)

    this.state = {
      first_name: "",
      last_name: "",
      age: "",
      handedness: "",
      utr: "",
      notes: "",
      id: ""
    }
  }

  componentDidMount(){
    this.setState({
      first_name: this.props.opponent.first_name,
      last_name: this.props.opponent.last_name,
      age: this.props.opponent.age,
      handedness: this.props.opponent.handedness,
      utr: this.props.opponent.utr,
      notes: this.props.opponent.notes,
      match_id: this.props.opponent.match_id,
      id: this.props.opponent.id
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

    const opponent = this.state
    this.props.editOpponentInDatabase(opponent)
    this.setState({
      first_name: "",
      last_name: "",
      age: "",
      handedness: "",
      utr: "",
      notes: ""
    })

    this.props.history.push(`/opponents/view/${this.props.opponent.id}`)
  }

  render(){
    return (
      <div className={`form-window opponent-form`}>
        <NavLink className="close-window-button" to={`/opponents/view/${this.props.opponent.id}`}>x</NavLink>
        <h2>Edit Opponent</h2>
        <form onSubmit={this.handleOnSubmit} className="form-text">
          <p>
            <label htmlFor="opponent-first_name">First Name: </label>
            <input type="text" name="first_name" value={this.state.first_name} onChange={this.handleOnChange} />
          </p>
          <p>
            <label htmlFor="opponent-last_name">Last Name: </label>
            <input type="text" name="last_name" value={this.state.last_name} onChange={this.handleOnChange} />
          </p>
          <p>
            <label htmlFor="opponent-age">Age: </label>
            <input type="text" name="age" value={this.state.age || ''} onChange={this.handleOnChange} />
          </p>
          <p>
            <label htmlFor="opponent-handedness">Plays: </label>
            <input type="text" name="handedness" value={this.state.handedness || ''} onChange={this.handleOnChange} />
            Handed
          </p>
          <p>
            <label htmlFor="opponent-utr">UTR: </label>
            <input type="text" name="utr" value={this.state.utr || ''} onChange={this.handleOnChange} />
          </p>
          <p>
            <label htmlFor="opponent-notes" className="notes-label">Notes: </label>
            <textarea name="notes" value={this.state.notes || ''} onChange={this.handleOnChange} />
          </p>
          <button>Edit Opponent</button>
        </form>
      </div>
    )
  }
}

export default withRouter(OpponentForm)
