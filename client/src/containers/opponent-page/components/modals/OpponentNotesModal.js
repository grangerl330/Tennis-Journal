import React, { Component } from 'react'
import { withRouter } from 'react-router';

class OpponentNotesModal extends Component {
  constructor(props){
    super(props)

    this.state = {
      notes: "",
      id: ""
    }
  }

  componentDidMount(){
    this.setState({
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

    const opponent = this.state
    this.props.editOpponentInDatabase(opponent)

    this.setState({
      notes: this.state.notes
    })

    this.props.history.push(`/opponents/${this.props.opponent.id}`)
  }

  render() {
    return (
      <div className="modal fade mt-3" id="opponentNotesModal">
        <div className="modal-dialog modal-md">
          <div className="modal-content">
            <div className="modal-header bg-info text-white">
              <h5 className="modal-title">Edit Notes</h5>
              <button className="close" data-dismiss="modal">
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="Opponent Notes">Notes: </label>
                  <textarea className="form-control" rows="17" cols="50" name="notes" onChange={this.handleOnChange} value={this.state.notes || ''} />
                </div>
                <button className="btn btn-dark btn-block" data-dismiss="modal" onClick={this.handleOnSubmit}>
                  Update Notes
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(OpponentNotesModal)
