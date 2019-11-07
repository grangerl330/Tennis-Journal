import React, { Component } from 'react'
import { withRouter } from 'react-router';

class PasswordModal extends Component {
  constructor(props){
    super(props)

    this.state = {
      currentUser: props.currentUser,
      old_password: "",
      new_password: "",
      password_confirmation: "",
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

    const user = this.state.currentUser
    this.props.updateCurrentUserInDatabase(user)

    this.props.history.push('/profile')
  }

  render(){
    return(
      <div className="modal fade" id="changePasswordModal">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header bg-info text-white">
              <h5 className="modal-title">Change Password</h5>
              <button className="close" data-dismiss="modal">
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="Old Password">Old Password</label>
                  <input className="form-control" type="text" name="old_password" value={this.state.old_password} onChange={this.handleOnChange}/>
                </div>
                <div className="form-group">
                  <label htmlFor="New Password">New Password</label>
                  <input className="form-control" type="text" name="new_password" value={this.state.new_password} onChange={this.handleOnChange}/>
                </div>
                <div className="form-group">
                  <label htmlFor="Password Confirmation">Password Confirmation</label>
                  <input className="form-control" type="text" name="password_confirmation" value={this.state.password_confirmation} onChange={this.handleOnChange}/>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button className="btn btn-info" data-dismiss="modal">Update Password</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(PasswordModal)
