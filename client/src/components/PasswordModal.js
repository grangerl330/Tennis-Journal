import React, { Component } from 'react'
import { withRouter } from 'react-router';

class PasswordModal extends Component {
  constructor(props){
    super(props)

    this.state = {
      currentUser: props.currentUser,
      currentPassword: "",
      newPassword: "",
      passwordConfirmation: "",
      validPassword: false,
      modal: "modal fade"
    }
  }

  authenticateCurrentPassword = (user, currentPassword) => {
    const request = {
      method: 'POST',
      body: JSON.stringify({
        user: user,
        currentPassword: currentPassword
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }

    return fetch('/authenticate_password', request)
    .then(response => response.json())
    .then(response => this.setState({validPassword: response.isValid}))
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
    const { currentPassword, newPassword, passwordConfirmation } = this.state

    this.authenticateCurrentPassword(user, currentPassword)

    if (this.state.validPassword) {
      if(newPassword !== passwordConfirmation) {
        alert("Passwords do not match")
      } else {
        this.props.updateCurrentUserPasswordInDatabase(user, this.state.newPassword)

        this.setState({
          currentPassword: "",
          newPassword: "",
          passwordConfirmation: ""
        })

        alert('Password successfully updated')

        this.props.history.push('/profile')
      }
    } else {
      alert("Password is incorrect")

      this.setState({
        currentPassword: "",
        newPassword: "",
        passwordConfirmation: ""
      })
    }
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
                  <label htmlFor="Old Password">Current Password</label>
                  <input className="form-control" type="password" name="currentPassword" value={this.state.currentPassword} onChange={this.handleOnChange}/>
                </div>
                <div className="form-group">
                  <label htmlFor="New Password">New Password</label>
                  <input className="form-control" type="password" name="newPassword" value={this.state.newPassword} onChange={this.handleOnChange}/>
                </div>
                <div className="form-group">
                  <label htmlFor="Password Confirmation">Password Confirmation</label>
                  <input className="form-control" type="password" name="passwordConfirmation" value={this.state.passwordConfirmation} onChange={this.handleOnChange}/>
                </div>
              </form>
            </div>
            <div className="modal-footer justify-content-center">
              <button className="btn btn-dark" data-dismiss="modal" onClick={this.handleOnSubmit}>Update Password</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(PasswordModal)
