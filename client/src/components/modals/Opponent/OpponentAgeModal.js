import React, { Component } from 'react'
import { withRouter } from 'react-router';

class OpponentAgeModal extends Component {
  constructor(props){
    super(props)

    this.state = {
      age: "",
      id: ""
    }
  }

  componentDidMount(){
    this.setState({
      age: this.props.opponent.age,
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
      age: this.state.age
    })

    this.props.history.push(`/opponents/${this.props.opponent.id}`)
  }

  render() {
    return (
      <div className="modal fade mt-3" id="opponentAgeModal">
        <div className="modal-dialog modal-md">
          <div className="modal-content">
            <div className="modal-header bg-info text-white">
              <h5 className="modal-title">Edit Age</h5>
              <button className="close" data-dismiss="modal">
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="Opponent Age">Age: </label>
                  <input className="form-control" name="age" onChange={this.handleOnChange} value={this.state.age} />
                </div>
                <button className="btn btn-dark btn-block" data-dismiss="modal" onClick={this.handleOnSubmit}>
                  Update Age
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(OpponentAgeModal)
