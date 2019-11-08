import React, { Component } from 'react'
import { withRouter } from 'react-router';

class StatsFormModal extends Component {
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
      <div className="modal fade" id="editStatsModal">
        <div className="modal-dialog modal-lg">
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
                  <input className="form-control" type="text" name="ranking" value={this.state.ranking || "Enter Your Current Ranking"} onChange={this.handleOnChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="New Password">UTR</label>
                  <input className="form-control" type="text" name="utr" value={this.state.utr || "Enter Your UTR"} onChange={this.handleOnChange} />
                </div>
              </form>
              <p className="font-italic">* The <b>Record</b> and <b>Points</b> windows automatically update when matches and tournaments are added or updated</p>
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
// <div className={`form-window stats-form`}>
//   <NavLink className="close-window-button" to='/stats'>
//     <img src={closeWindowImg} alt="Close Window"/>
//   </NavLink>
//   <h2>Edit Your Stats</h2>
//   <form onSubmit={this.handleOnSubmit} className="form-text">
//     <p>
//       <label>Current Ranking:</label>
//       <input type="text" name="ranking" value={this.state.ranking || ""} onChange={this.handleOnChange}/>
//     </p>
//     <p>
//       <label>UTR:</label>
//       <input type="text" name="utr" value={this.state.utr || ""} onChange={this.handleOnChange}/>
//     </p>
//     <button>Save Stats</button>
//   </form>
// </div>

export default withRouter(StatsFormModal)
