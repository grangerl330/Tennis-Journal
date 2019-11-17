import React, { Component } from 'react'
import { withRouter } from 'react-router';

class TournamentDrawSizeModal extends Component {
  constructor(props){
    super(props)

    this.state = {
      draw_size: "",
      user_id: "",
      id: ""
    }
  }

  componentDidMount(){
    this.setState({
      draw_size: this.props.tournament.draw_size,
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
      draw_size: this.state.draw_size
    })

    this.props.history.push(`/tournaments/${tournament.id}`)
  }

  render() {
    return (
      <div className="modal fade mt-3" id="tournamentDrawSizeModal">
        <div className="modal-dialog modal-md">
          <div className="modal-content">
            <div className="modal-header bg-info text-white">
              <h5 className="modal-title">Edit Draw Size</h5>
              <button className="close" data-dismiss="modal">
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="Tournament Draw Size">Draw Size: </label>
                  <select className="form-control" name="draw_size" onChange={this.handleOnChange} value={this.state.draw_size}>
                    <option value="128">128</option>
                    <option value="64">64</option>
                    <option value="32">32</option>
                    <option value="16">16</option>
                    <option value="8">8</option>
                    <option value="4">4</option>
                    <option value="2">2</option>
                  </select>
                </div>
                <button className="btn btn-dark btn-block" data-dismiss="modal" onClick={this.handleOnSubmit}>
                  Update Draw Size
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(TournamentDrawSizeModal)
