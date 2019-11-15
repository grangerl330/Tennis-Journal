import React, { Component } from 'react'
import { withRouter } from 'react-router';

class OpponentFormModal extends Component {
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

    this.props.history.push(`/opponents/${this.props.opponent.id}`)
  }

  render(){
    return (
      <div className="modal fade mt-3" id="opponentFormModal">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header bg-info text-white">
              <h2>Edit Opponent</h2>
              <button className="close" data-dismiss="modal">
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="opponent-first_name">First Name: </label>
                  <input className="form-control" type="text" name="first_name" value={this.state.first_name} onChange={this.handleOnChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="opponent-last_name">Last Name: </label>
                  <input className="form-control" type="text" name="last_name" value={this.state.last_name} onChange={this.handleOnChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="opponent-age">Age: </label>
                  <input className="form-control" type="text" name="age" value={this.state.age || ''} onChange={this.handleOnChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="opponent-handedness">Plays: </label>
                  <input className="form-control" type="text" name="handedness" value={this.state.handedness || ''} onChange={this.handleOnChange} />
                  Handed
                </div>
                <div className="form-group">
                  <label htmlFor="opponent-utr">UTR: </label>
                  <input className="form-control" type="text" name="utr" value={this.state.utr || ''} onChange={this.handleOnChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="opponent-notes" className="notes-label">Notes: </label>
                  <textarea className="form-control" name="notes" value={this.state.notes || ''} onChange={this.handleOnChange} />
                </div>
                <div className="form-group">
                  <button className="btn btn-dark btn-block" data-dismiss="modal" onClick={this.handleOnSubmit}>Update Opponent</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(OpponentFormModal)
