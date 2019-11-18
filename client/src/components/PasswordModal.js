import React, { Component } from 'react'
import classNames from 'classnames'
import zxcvbn from 'zxcvbn'
import $ from "jquery";
import { withRouter } from 'react-router';

class PasswordModal extends Component {
  constructor(props){
    super(props)

    this.state = {
      currentUser: props.currentUser,
      currentPassword: "",
      currentPasswordIsValid: true,
      newPassword: "",
      newPasswordIsValid: true,
      newPasswordInvalidFeedback: "",
      passwordConfirmation: "",
      passwordConfirmationIsValid: true,
      passwordConfirmationInvalidFeedback: ""
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

    this.resetValidations()

    if(this.formIsValid()) {
      fetch('/api/authenticate_password', {
        credentials: 'include',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: this.state.currentUser,
          password: this.state.currentPassword
        })
      })
      .then(response => response.json())
      .then(response => {
        if(response.isValid === false) {
          this.setState({
            currentPasswordIsValid: false
          })
        } else {
          this.props.updateCurrentUserPasswordInDatabase(this.state.currentUser, this.state.newPassword)

          this.setState({
            currentPassword: "",
            newPassword: "",
            passwordConfirmation: ""
          })

          $("#changePasswordModal").modal("hide")
          $("#updateSuccessModal").modal("show")
        }
      })
    }
  }

  resetValidations = () => {
    this.setState({
      currentPasswordIsValid: true,
      newPasswordIsValid: true,
      passwordConfirmationIsValid: true
    })
  }

  calculatePasswordStrength = event => {
    const evaluation = zxcvbn(this.state.newPassword)

    return evaluation.score
  }

  formIsValid = () => {
    let isValid = true;

    if(this.state.currentPassword !== "") {
      if(this.state.newPassword === "") {
        this.setState({
          newPasswordIsValid: false,
          newPasswordInvalidFeedback: "Please enter a password"
        })

        isValid = false;
      } else if(this.calculatePasswordStrength() < 4) {
        this.setState({
          newPasswordIsValid: false,
          newPasswordInvalidFeedback: "Password is not strong enough"
        })

        isValid = false;
      }

      if(this.state.passwordConfirmation === "") {
        this.setState({
          passwordConfirmationIsValid: false,
          passwordConfirmationInvalidFeedback: "Please confirm password"
        })

        isValid = false;
      } else if(this.state.passwordConfirmation !== this.state.newPassword) {
        this.setState({
          passwordConfirmationIsValid: false,
          passwordConfirmationInvalidFeedback: "Password does not match"
        })

        isValid = false;
      }
    }

    return isValid;
  }

  render(){
    const currentPasswordInputClass = classNames('form-control',
      { 'is-invalid': !this.state.currentPasswordIsValid }
    );

    const newPasswordInputClass = classNames('form-control',
      { 'is-invalid': !this.state.newPasswordIsValid }
    );

    const passwordConfirmationInputClass = classNames('form-control',
      { 'is-invalid': !this.state.passwordConfirmationIsValid }
    );

    return(
      <div className="section" id="password-modals">
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
                    <label htmlFor="Current Password">Current Password</label>
                    <input className={currentPasswordInputClass} type="password" name="currentPassword" value={this.state.currentPassword} onChange={this.handleOnChange} placeholder="Current Password"/>
                    <div className="invalid-feedback">
                      Password is incorrect
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="New Password">New Password</label>
                    <input className={newPasswordInputClass} type="password" name="newPassword" value={this.state.newPassword} onChange={this.handleOnChange} placeholder="New Password"/>
                    <div className="invalid-feedback">
                      {this.state.newPasswordInvalidFeedback}
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="Password Confirmation">Confirm Password</label>
                    <input className={passwordConfirmationInputClass} type="password" name="passwordConfirmation" value={this.state.passwordConfirmation} onChange={this.handleOnChange} placeholder="Confirm Password"/>
                    <div className="invalid-feedback">
                      {this.state.passwordConfirmationInvalidFeedback}
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer border-0 justify-content-center">
                <button className="btn btn-dark shadow-none" onClick={this.handleOnSubmit}>Update Password</button>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="updateSuccessModal">
          <div className="modal-dialog modal-lg w-50">
            <div className="modal-content">
              <div className="modal-header d-flex">
                <h5 className="mx-auto">Password successfully updated</h5>
                <button className="close ml-0" data-dismiss="modal">
                  <i className="fas fa-times"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(PasswordModal)
