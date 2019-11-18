import React, { Component } from 'react'
import { withRouter } from 'react-router';

class OpponentHandednessModal extends Component {
  constructor(props){
    super(props)

    this.state = {
      handedness: "",
      id: ""
    }
  }

  componentDidMount(){
    this.setState({
      handedness: this.props.opponent.handedness,
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
      handedness: this.state.handedness
    })

    this.props.history.push(`/opponents/${this.props.opponent.id}`)
  }

  render() {
    return (
      <div className="modal fade mt-3" id="opponentHandednessModal">
        <div className="modal-dialog modal-md">
          <div className="modal-content">
            <div className="modal-header bg-info text-white">
              <h5 className="modal-title">Edit Handedness</h5>
              <button className="close" data-dismiss="modal">
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <form className="form-inline">
                <div className="form-group w-100">
                  <label htmlFor="opponent-handedness" className="mr-2">Plays</label>
                  <select className="form-control w-25 mr-2" name="handedness" onChange={this.handleOnChange} value={this.state.handedness}>
                    <option value="Right">Right</option>
                    <option value="Left">Left</option>
                  </select>
                  <span>Handed</span>
                </div>
                <button className="btn btn-dark btn-block mt-4" data-dismiss="modal" onClick={this.handleOnSubmit}>
                  Update Handedness
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(OpponentHandednessModal)
