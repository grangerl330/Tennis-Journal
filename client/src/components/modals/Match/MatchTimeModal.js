import React, { Component } from 'react'
import { withRouter } from 'react-router';

class MatchTimeModal extends Component {
  constructor(props){
    super(props)

    this.state = {
      time: "",
      id: "",
      tournament_id: props.tournamentId,
    }
  }

  componentDidMount(){
    this.setState({
      time: this.props.currentMatch.time,
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
      time: this.state.time
    })

    this.props.history.push(`/matches/${this.props.currentMatch.id}`)
  }

  render() {
    return (
      <div className="modal fade mt-3" id="matchTimeModal">
        <div className="modal-dialog modal-md">
          <div className="modal-content">
            <div className="modal-header bg-info text-white">
              <h5 className="modal-title">Edit Time</h5>
              <button className="close" data-dismiss="modal">
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="Match Time">Time: </label>
                  <input className="form-control" name="time" type="time" onChange={this.handleOnChange} value={this.state.time} />
                </div>
                <button className="btn btn-dark btn-block" data-dismiss="modal" onClick={this.handleOnSubmit}>
                  Update Time
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(MatchTimeModal)
