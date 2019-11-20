import React, { Component } from 'react'
import { withRouter } from 'react-router';

class AllStatsModal extends Component {
  constructor(props){
    super(props)

    this.state = {
      ranking: props.currentUser.ranking,
      utr: props.currentUser.utr,
      id: props.currentUser.id
    }
  }

  handleOnChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()

    const user = this.state
    this.props.updateCurrentUserInDatabase(user)

    this.props.history.push('/home')
  }

  render(){
    return(
      <div className="modal fade" id="allStatsModal">
        <div className="modal-dialog modal-lg w-50">
          <div className="modal-content">
            <div className="modal-header bg-info text-white">
              <h5 className="modal-title">Edit Stats</h5>
              <button className="close" data-dismiss="modal">
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="Current Ranking">Current Ranking</label>
                  <input className="form-control" type="text" name="ranking" value={this.state.ranking} onChange={this.handleOnChange} placeholder="Enter your current ranking"/>
                </div>
                <div className="form-group">
                  <label htmlFor="Current UTR">Current UTR</label>
                  <input className="form-control" type="text" name="utr" value={this.state.utr} onChange={this.handleOnChange} placeholder="Enter your current UTR"/>
                </div>
              </form>
            </div>
            <div className="modal-footer justify-content-center">
              <button className="btn btn-dark" data-dismiss="modal" onClick={this.handleOnSubmit}>Update Stats</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(AllStatsModal)
