import React, { Component } from 'react'
import classNames from 'classnames'
import validator from 'validator'
import { withRouter } from 'react-router'

class NavbarLogin extends Component {

  constructor(props){
    super(props)

    this.state = {
      email: "",
      emailIsValid: true,
      password: "",
      passwordIsValid: true
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
          email: this.state.email,
          password: this.state.password
        })
      })
      .then(response => response.json())
      .then(response => {
        if(response.isValid === false) {
          this.setState({
            passwordIsValid: false
          })
        } else {
          this.props.login(this.state)

          this.props.history.push('/home')
        }
      })
    }
  }

  formIsValid = () => {
    let isValid = true;

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
      passwordIsValid: true,
      passwordConfirmationIsValid: true
    })
  }

  render() {
    const emailInputClass = classNames('form-control',
      { 'is-invalid': !this.state.emailIsValid }
    );

    const passwordInputClass = classNames('form-control',
      { 'is-invalid': !this.state.passwordIsValid }
    );

    return (
      <div className="navbar-nav ml-auto">
        <form className="form-inline" onSubmit={this.handleOnSubmit}>
          <div className="form-row">
            <div className="col-5-form mb-2 mb-md-0">
              <input className={emailInputClass} type="text" name="email" onChange={this.handleOnChange} value={this.state.email} placeholder="Email" />
              <div className="invalid-feedback">
                Please enter a valid email address
              </div>
            </div>
            <div className="col-5-form">
              <input className={passwordInputClass} type="password" name="password" onChange={this.handleOnChange} value={this.state.password} placeholder="Password" />
              <div className="invalid-feedback">
                Password is incorrect
              </div>
            </div>
            <div className="col-2-form">
              <input className="btn btn-secondary my-2 my-sm-0" type="submit" value="Login" />
            </div>
          </div>
          </form>
      </div>
    )
  }
}

export default withRouter(NavbarLogin)
