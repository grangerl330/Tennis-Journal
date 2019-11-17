import React, { Component } from 'react'
import { withRouter } from 'react-router';

class MatchNotesModal extends Component {
  constructor(props){
    super(props)

    this.state = {
      notes: "",
      id: "",
      tournament_id: props.tournamentId,
    }
  }

  componentDidMount(){
    this.setState({
      notes: this.props.currentMatch.notes,
      id: this.props.currentMatch.id,
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

    const match = this.state
    this.props.sendMatchToDatabase(match)

    this.setState({
      notes: this.state.notes
    })

    this.props.history.push(`/matches/${this.props.currentMatch.id}`)
  }

  render() {
    return (
      <div className="modal fade mt-3" id="matchNotesModal">
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
                  <label htmlFor="Match Notes">Notes: </label>
                  <textarea className="form-control" rows="17" cols="50" name="notes" onChange={this.handleOnChange} value={this.state.notes} />
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

export default withRouter(MatchNotesModal)
