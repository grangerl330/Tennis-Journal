import React, { Component } from 'react'
import UpdateSuccessModal from '../UpdateSuccessModal'
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

  resetForm = () => {
    this.setState({
      currentPassword: "",
      currentPasswordIsValid: true,
      newPassword: "",
      newPasswordIsValid: true,
      passwordConfirmation: "",
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
      } else if(this.calculatePasswordStrength() < 2) {
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
      <>
        <div className="modal fade mt-3" id="changePasswordModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header border-0">
                <button className="close" data-dismiss="modal" onClick={this.resetForm}>
                  <i className="fas fa-times fa-sm text-grey"></i>
                </button>
              </div>
              <div className="modal-body px-5">
                <h5 className="text-green mb-4">Change Password</h5>
                <form>
                  <div className="row mt-3">
                    <div className="col-12">
                      <label htmlFor="Current Password">Current Password: </label>
                      <input type="password" className={currentPasswordInputClass} name="currentPassword" value={this.state.currentPassword} onChange={this.handleOnChange} />
                      <div className="invalid-feedback">
                        Password is incorrect. Please try again.
                      </div>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-12">
                      <label htmlFor="New Password">New Password: </label>
                      <input type="password" className={newPasswordInputClass} name="newPassword" value={this.state.newPassword} onChange={this.handleOnChange} />
                      <div className="invalid-feedback">
                        Password is not strong enough. Try increasing the length and adding more uppercase letters or symbols.
                      </div>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-12">
                      <label htmlFor="Password Confirmation">Password Confirmation: </label>
                      <input type="password" className={passwordConfirmationInputClass} name="passwordConfirmation" value={this.state.passwordConfirmation} onChange={this.handleOnChange} />
                      <div className="invalid-feedback">
                        Password does not match.
                      </div>
                    </div>
                  </div>
                  <div className="form-group text-right mt-5 mb-4">
                    <button className="btn mr-4 text-grey" data-dismiss="modal" onClick={this.resetForm}>Cancel</button>
                    <button className="btn btn-green" onClick={this.handleOnSubmit}>Update</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <UpdateSuccessModal attribute="Password" />
      </>
    )
  }
}

export default withRouter(PasswordModal)
