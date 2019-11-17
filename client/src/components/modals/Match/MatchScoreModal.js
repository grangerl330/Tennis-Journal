import React, { Component } from 'react'
import { withRouter } from 'react-router';

class MatchScoreModal extends Component {
  constructor(props){
    super(props)

    this.state = {
      score: "",
      id: "",
      tournament_id: props.tournamentId,
    }
  }

  componentDidMount(){
    this.setState({
      score: this.props.currentMatch.score,
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
      score: this.state.score
    })

    this.props.history.push(`/matches/${this.props.currentMatch.id}`)
  }

  render() {
    return (
      <div className="modal fade mt-3" id="matchScoreModal">
        <div className="modal-dialog modal-md">
          <div className="modal-content">
            <div className="modal-header bg-info text-white">
              <h5 className="modal-title">Edit Score</h5>
              <button className="close" data-dismiss="modal">
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="Match Score">Score: </label>
                  <input className="form-control" name="score" onChange={this.handleOnChange} value={this.state.score} />
                </div>
                <button className="btn btn-dark btn-block" data-dismiss="modal" onClick={this.handleOnSubmit}>
                  Update Score
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(MatchScoreModal)
