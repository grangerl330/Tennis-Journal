import React, { Component } from 'react'
import { withRouter } from 'react-router';

class TournamentDivisionModal extends Component {
  constructor(props){
    super(props)

    this.state = {
      age_category: "",
      user_id: "",
      id: ""
    }
  }

  componentDidMount(){
    this.setState({
      age_category: this.props.tournament.age_category,
      user_id: this.props.tournament.user_id,
      id: this.props.tournament.id
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

    const tournament = this.state

    this.props.sendTournamentToDatabase(tournament)
    this.setState({
      age_category: this.state.age_category
    })

    this.props.history.push(`/tournaments/${tournament.id}`)
  }

  render() {
    return (
      <div className="modal fade mt-3" id="tournamentDivisionModal">
        <div className="modal-dialog modal-md">
          <div className="modal-content">
            <div className="modal-header bg-info text-white">
              <h5 className="modal-title">Edit Division</h5>
              <button className="close" data-dismiss="modal">
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="Tournament Age Category">Division: </label>
                  <select className="form-control" name="age_category" onChange={this.handleOnChange} value={this.state.age_category}>
                    <option value="12 and Under">12 and Under</option>
                    <option value="14 and Under">14 and Under</option>
                    <option value="16 and Under">16 and Under</option>
                    <option value="18 and Under">18 and Under</option>
                    <option value="Men's Division">Men's Division</option>
                    <option value="Women's Division">Women's Division</option>
                  </select>
                </div>
                <button className="btn btn-dark btn-block" data-dismiss="modal" onClick={this.handleOnSubmit}>
                  Update Division
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(TournamentDivisionModal)
