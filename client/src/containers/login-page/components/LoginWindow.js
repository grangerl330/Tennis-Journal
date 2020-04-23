import React, { Component } from "react"
import classNames from 'classnames'
import validator from 'validator'
import { withRouter } from 'react-router'

class LoginWindow extends Component {
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

  render(){
    const emailInputClass = classNames('signup-input form-control',
      {'form-control is-invalid': !this.state.emailIsValid }
    );

    const passwordInputClass = classNames('signup-input form-control mt-4',
      {'form-control is-invalid': !this.state.passwordIsValid }
    );

    return (
      <div className="container-fluid p-0 border-white rounded shadow-md-light-green">
        <div className="row justify-content-center mt-5">
          <h1>Welcome!</h1>
        </div>
        <form onSubmit={this.handleOnSubmit}>
          <div className="row justify-content-center mt-4">
            <div className="col-9">
              <div className="form-group mb-3">
                <input className={emailInputClass} type="text" name="email" onChange={this.handleOnChange} value={this.state.email} placeholder="Email" />
                <div className="invalid-feedback">
                  Please enter a valid email address
                </div>
              </div>
              <div className="form-group">
                <input className={passwordInputClass} type="password" name="password" onChange={this.handleOnChange} value={this.state.password} placeholder="Password" />
                <div className="invalid-feedback">
                  Password is incorrect
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-4 mb-3 mb-md-5">
            <div className="col-4">
              <input className="btn-login w-100 py-2" type="submit" value="Log In"/>
            </div>
          </div>
          {/* <div className="row d-md-none justify-content-center mb-5">
            <div className="col-4">
              <h5 className="mb-3">or</h5>
              <input className="btn-login w-100 py-2" type="submit" value="Signup"/>
            </div>
          </div> */}
        </form>
      </div>
    )
  }
}

export default withRouter(LoginWindow)
