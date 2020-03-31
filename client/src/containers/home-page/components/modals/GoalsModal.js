import React, { Component } from 'react'
import { withRouter } from 'react-router';

class GoalsModal extends Component {
  constructor(props){
    super(props)

    this.state = {
      short_term_goal: props.currentUser.short_term_goal,
      short_term_goal_char_count: props.currentUser.short_term_goal.length,
      mid_term_goal: props.currentUser.mid_term_goal,
      mid_term_goal_char_count: props.currentUser.mid_term_goal.length,
      long_term_goal: props.currentUser.long_term_goal,
      long_term_goal_char_count: props.currentUser.long_term_goal.length,
      id: props.currentUser.id
    }
  }

  handleOnChange = event => {
    const {name, value} = event.target
    const char_count = name + "_char_count"

    this.setState({
      [name]: value,
      [char_count]: value.length
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
            <div className="modal-header border-0">
              <button className="close" data-dismiss="modal">
                <i className="fas fa-times fa-sm text-grey"></i>
              </button>
            </div>
            <div className="modal-body px-5">
              <h5 className="text-green mb-4">Edit Goals</h5>
              <form>
                <div className="form-group">
                  <label htmlFor="Short Term Goal">Short Term Goal</label>
                  <textarea maxLength="50" className="form-control" type="text" name="short_term_goal" value={this.state.short_term_goal || ''} onChange={this.handleOnChange} placeholder="Enter your short term goal"/>
                  <p className="goals-text text-green text-right mt-2">{this.state.short_term_goal_char_count} / 50</p>
                </div>
                <div className="form-group">
                  <label htmlFor="Short Term Goal">Mid Term Goal</label>
                  <textarea className="form-control" type="text" name="mid_term_goal" value={this.state.mid_term_goal || ''} onChange={this.handleOnChange} placeholder="Enter your mid term goal"/>
                  <p className="goals-text text-green text-right mt-2">{this.state.mid_term_goal_char_count} / 50</p>
                </div>
                <div className="form-group">
                  <label htmlFor="Long Term Goal">Long Term Goal</label>
                  <textarea className="form-control" type="text" name="long_term_goal" value={this.state.long_term_goal || ''} onChange={this.handleOnChange} placeholder="Enter your long term goal"/>
                  <p className="goals-text text-green text-right mt-2">{this.state.long_term_goal_char_count} / 50</p>
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

export default withRouter(GoalsModal)
