import React, { Component } from 'react'
import UpdateSuccessModal from '../modals/UpdateSuccessModal'
import $ from "jquery";
import classNames from 'classnames'
import validator from 'validator'
import { withRouter } from 'react-router';

class ProfileForm extends Component {
  constructor(props){
    super(props)

    this.state = {
      first_name: props.currentUser.first_name,
      firstNameIsValid: true,
      last_name: props.currentUser.last_name,
      lastNameIsValid: true,
      email: props.currentUser.email,
      emailIsValid: true,
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

    this.resetValidations()

    if(this.formIsValid()) {
      const user = this.state
      this.props.updateCurrentUserInDatabase(user)

      $("#updateSuccessModal").modal("show")
    }
  }

  formIsValid = () => {
    let isValid = true;

    if(this.state.first_name === "") {
      this.setState({
        firstNameIsValid: false
      })

      isValid = false;
    }

    if(this.state.last_name === "") {
      this.setState({
        lastNameIsValid: false
      })

      isValid = false;
    }

    if (!validator.isEmail(this.state.email)) {
    this.setState({
      emailIsValid: false
    })
      isValid = false;
    }

    return isValid;
  }

  resetValidations = () => {
    this.setState({
      emailIsValid: true,
      firstNameIsValid: true,
      lastNameIsValid: true
    })
  }

  render(){
    const emailInputClass = classNames('form-control',
      { 'is-invalid': !this.state.emailIsValid }
    );

    const firstNameInputClass = classNames('form-control',
      { 'is-invalid': !this.state.firstNameIsValid }
    );

    const lastNameInputClass = classNames('form-control',
      { 'is-invalid': !this.state.lastNameIsValid }
    );

    return(
      <div id="profile-form">
        <form onSubmit={this.handleOnSubmit}>
          <div className="form-group">
            <label htmlFor="First Name">First Name:</label>
            <input className={firstNameInputClass} type="text" name="first_name" value={this.state.first_name} onChange={this.handleOnChange}/>
            <div className="invalid-feedback">
              Please enter your first name
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="Last Name">Last Name:</label>
            <input className={lastNameInputClass} type="text" name="last_name" value={this.state.last_name} onChange={this.handleOnChange}/>
            <div className="invalid-feedback">
              Please enter your last name
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="Email">Email:</label>
            <input className={emailInputClass} type="text" name="email" value={this.state.email} onChange={this.handleOnChange}/>
            <div className="invalid-feedback">
              Please enter a valid email address
            </div>
          </div>
          <button className="btn btn-dark mt-2">Update Profile</button>
        </form>
        <UpdateSuccessModal attribute="Profile" />
      </div>
    )
  }
}

export default withRouter(ProfileForm)
