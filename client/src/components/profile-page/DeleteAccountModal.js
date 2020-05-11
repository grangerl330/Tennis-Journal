import React, { Component } from 'react'
import $ from 'jquery'
import classNames from 'classnames'
import { withRouter } from 'react-router';

class DeleteAccountModal extends Component {
  constructor(props){
    super(props)

    this.state = {
      email: "",
      emailIsValid: true
    }
  }

  formIsValid = () => {
    let isValid = false

    if(this.state.email === this.props.currentUser.email) {
      isValid = true
    }

    this.setState({
      emailIsValid: isValid
    })

    return isValid
  }

  resetValidation = () => {
    this.setState({
      emailIsValid: true
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

    if(this.formIsValid()){
      this.props.deleteCurrentUserFromDatabase(this.props.currentUser)

      this.setState({
        email: ""
      })

      $('#deleteAccountModal').modal('hide')

      this.props.history.push('/')
    }
  }

  render() {
    const emailInputClass = classNames('form-control',
      { 'is-invalid': !this.state.emailIsValid }
    );

    return (
      <div className="modal fade mt-3" id="deleteAccountModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button className="close" data-dismiss="modal">
                <i className="fas fa-times fa-sm text-grey"></i>
              </button>
            </div>
            <div className="modal-body px-5">
              <h5 className="text-green mb-4">Delete Account</h5>
              <p>Are you sure you want to delete your account?</p>
              <p>Once this action is performed your data cannot be recovered.</p>
              <form>
                <div className="row mt-3">
                  <div className="col-12">
                    <label htmlFor="Email Confirmation">Please enter your email address to confirm:</label>
                    <input className={emailInputClass} name="email" value={this.state.email} onChange={this.handleOnChange} />
                    <div className="invalid-feedback">
                      Email does not match. Please try again
                    </div>
                  </div>
                </div>
                <div className="form-group text-right mt-3 mb-4">
                  <button className="btn mr-4 text-grey" data-dismiss="modal" onClick={this.resetValidation}>Cancel</button>
                  <button className="btn btn-green" onClick={this.handleOnSubmit}>Delete</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(DeleteAccountModal)
