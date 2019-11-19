import React, { Component } from 'react'
import { withRouter } from 'react-router';

class OpponentAllStatsModal extends Component {
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

    const opponent = Object.assign({}, this.state)

    if(opponent.first_name === "") {
      opponent.first_name = this.props.opponent.first_name
    }

    if(opponent.last_name === "") {
      opponent.last_name = this.props.opponent.last_name
    }

    this.props.editOpponentInDatabase(opponent)

    this.setState({
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      age: this.state.age,
      handedness: this.state.handedness,
      utr: this.state.utr,
      notes: this.state.notes
    })

    this.props.history.push(`/opponents/${this.props.opponent.id}`)
  }

  render() {
    return (
      <div className="modal fade mt-3" id="opponentStatsModal">
        <div className="modal-dialog modal-md">
          <div className="modal-content">
            <div className="modal-header bg-info text-white">
              <h5 className="modal-title">Edit Opponent</h5>
              <button className="close" data-dismiss="modal">
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="Opponent First Name">First Name: </label>
                  <input className="form-control" name="first_name" onChange={this.handleOnChange} value={this.state.first_name} />
                </div>
                <div className="form-group">
                  <label htmlFor="Opponent Last Name">Last Name: </label>
                  <input className="form-control" name="last_name" onChange={this.handleOnChange} value={this.state.last_name} />
                </div>
                <div className="form-group">
                  <label htmlFor="Opponent Age">Age: </label>
                  <input className="form-control" name="age" onChange={this.handleOnChange} value={this.state.age} />
                </div>
                <div className="form-group">
                  <label htmlFor="opponent-handedness" className="mr-2">Plays</label>
                  <select className="form-control mr-2" name="handedness" onChange={this.handleOnChange} value={this.state.handedness}>
                    <option value="Right">Right Handed</option>
                    <option value="Left">Left Handed</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="Opponent UTR">UTR: </label>
                  <input className="form-control" name="utr" onChange={this.handleOnChange} value={this.state.utr} />
                </div>
                <div className="form-group">
                  <label htmlFor="Opponent Notes">Notes: </label>
                  <textarea className="form-control" rows="17" cols="50" name="notes" onChange={this.handleOnChange} value={this.state.notes} />
                </div>
                <button className="btn btn-dark btn-block" data-dismiss="modal" onClick={this.handleOnSubmit}>
                  Update Opponent
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(OpponentAllStatsModal)
