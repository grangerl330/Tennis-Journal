import React, { Component } from 'react'
import { withRouter } from 'react-router';

class OpponentNameModal extends Component {
  constructor(props){
    super(props)

    this.state = {
      first_name: "",
      last_name: "",
      id: ""
    }
  }

  componentDidMount(){
    this.setState({
      first_name: this.props.opponent.first_name,
      last_name: this.props.opponent.last_name,
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
      first_name: opponent.first_name,
      last_name: opponent.last_name
    })

    this.props.history.push(`/opponents/${this.props.opponent.id}`)
  }

  render() {
    return (
      <div className="modal fade mt-3" id="opponentNameModal">
        <div className="modal-dialog modal-md">
          <div className="modal-content">
            <div className="modal-header bg-info text-white">
              <h5 className="modal-title">Edit Name</h5>
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
                <button className="btn btn-dark btn-block" data-dismiss="modal" onClick={this.handleOnSubmit}>
                  Update Name
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(OpponentNameModal)
