import React, { Component } from 'react'
import { withRouter } from 'react-router';

class MatchDateModal extends Component {
  constructor(props){
    super(props)

    this.state = {
      date: "",
      id: "",
      tournament_id: props.tournamentId,
    }
  }

  componentDidMount(){
    this.setState({
      date: this.props.currentMatch.date,
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
      date: this.state.date
    })

    this.props.history.push(`/matches/${this.props.currentMatch.id}`)
  }

  render() {
    return (
      <div className="modal fade mt-3" id="matchDateModal">
        <div className="modal-dialog modal-md">
          <div className="modal-content">
            <div className="modal-header bg-info text-white">
              <h5 className="modal-title">Edit Date</h5>
              <button className="close" data-dismiss="modal">
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="Match Date">Date: </label>
                  <input className="form-control" name="date" type="date" onChange={this.handleOnChange} value={this.state.date} />
                </div>
                <button className="btn btn-dark btn-block" data-dismiss="modal" onClick={this.handleOnSubmit}>
                  Update Date
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(MatchDateModal)
