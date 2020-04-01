import React, { Component } from 'react'
import { withRouter } from 'react-router';

class StatsOverviewModal extends Component {
  constructor(props){
    super(props)
    
    this.state = {
      current_ranking: props.currentUser.current_ranking,
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

    const date = new Date()
    const month = date.getMonth()
    const year = date.getFullYear().toString()

    const user = this.state
    user.month = month
    user.year = year

    this.props.updateCurrentUserInDatabase(user)

    this.props.history.push('/home')
  }

  render(){
    return(
      <div className="modal fade" id="statsOverviewModal">
        <div className="modal-dialog modal-lg w-40">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button className="close" data-dismiss="modal">
                <i className="fas fa-times fa-sm text-grey"></i>
              </button>
            </div>
            <div className="modal-body px-5">
              <h5 className="text-green mb-4">Edit Your Stats</h5>
              <form>
                <div className="form-group">
                  <label htmlFor="UTR">UTR</label>
                  <input className="form-control" type="text" name="utr" value={this.state.utr || ''} onChange={this.handleOnChange} placeholder="Enter your current UTR"/>
                </div>
                <div className="form-group">
                  <label htmlFor="Ranking">Ranking</label>
                  <input className="form-control" type="text" name="current_ranking" value={this.state.current_ranking || ''} onChange={this.handleOnChange} placeholder="Enter your current ranking"/>
                </div>
                <div className="form-group text-right mt-5 mb-4">
                  <button className="btn mr-4 text-grey" data-dismiss="modal">Cancel</button>
                  <button className="btn btn-green" data-dismiss="modal" onClick={this.handleOnSubmit}>Update</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(StatsOverviewModal)
