import React, { Component } from 'react'
import { withRouter } from 'react-router';

class GoalsModal extends Component {
  constructor(props){
    super(props)

    this.state = {
      short_term_goal: props.currentUser.short_term_goal,
      mid_term_goal: props.currentUser.mid_term_goal,
      long_term_goal: props.currentUser.long_term_goal,
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
      <div className="modal fade" id="goalsModal">
        <div className="modal-dialog modal-lg w-50">
          <div className="modal-content">
            <div className="modal-header bg-info text-white">
              <h5 className="modal-title">Edit Goals</h5>
              <button className="close" data-dismiss="modal">
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="Short Term Goal">Short Term Goal</label>
                  <textarea className="form-control" type="text" name="short_term_goal" value={this.state.short_term_goal || ''} onChange={this.handleOnChange} placeholder="Enter your short term goal"/>
                </div>
                <div className="form-group">
                  <label htmlFor="Short Term Goal">Mid Term Goal</label>
                  <textarea className="form-control" type="text" name="mid_term_goal" value={this.state.mid_term_goal || ''} onChange={this.handleOnChange} placeholder="Enter your mid term goal"/>
                </div>
                <div className="form-group">
                  <label htmlFor="Long Term Goal">Long Term Goal</label>
                  <textarea className="form-control" type="text" name="long_term_goal" value={this.state.long_term_goal || ''} onChange={this.handleOnChange} placeholder="Enter your long term goal"/>
                </div>
              </form>
            </div>
            <div className="modal-footer justify-content-center">
              <button className="btn btn-dark" data-dismiss="modal" onClick={this.handleOnSubmit}>Update Goals</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(GoalsModal)
