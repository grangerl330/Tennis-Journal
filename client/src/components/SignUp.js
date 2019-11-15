import React, { Component } from 'react'
import classNames from 'classnames'
import validator from 'validator'
import zxcvbn from 'zxcvbn'
import { withRouter } from 'react-router';

class Signup extends Component {

  constructor(props){
    super(props)

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      emailIsValid: true,
      password: "",
      passwordIsValid: true,
      passwordConfirmation: "",
      passwordConfirmationIsValid: true
    }
  }

  handleOnChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  calculatePasswordStrength = event => {
    const evaluation = zxcvbn(this.state.password)

    return evaluation.score
  }

  handleOnSubmit = event => {
    event.preventDefault()

    this.resetValidations()

    if (this.formIsValid()) {
      this.props.signup(this.state)


      this.props.history.push('/home')
    } else {
      this.props.history.push('/')
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

    if(this.calculatePasswordStrength() < 4) {
      this.setState({
        passwordIsValid: false
      })
        isValid = false;
    }

    if(this.state.password !== this.state.passwordConfirmation) {
      this.setState({
        passwordConfirmationIsValid: false
      })
      isValid = false;
    }

    return isValid;
  }

  resetValidations = () => {
    this.setState({
      emailIsValid: true,
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

    const passwordConfirmationInputClass = classNames('form-control',
      { 'is-invalid': !this.state.passwordConfirmationIsValid }
    );

    return (
      <div className="row" id="login">
        <div className="col-md-6 mx-auto">
          <div className="card">
            <div className="card-header">
              <h4>Sign Up</h4>
            </div>
            <div className="card-body">
              <form onSubmit={this.handleOnSubmit}>
                <div className="form-group">
                  <label htmlFor="First Name">First Name</label>
                  <input className="form-control" type="text" name="first_name" onChange={this.handleOnChange} value={this.state.firstName} placeholder="First Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="Last Name">Last Name</label>
                  <input className="form-control" type="text" name="last_name" onChange={this.handleOnChange} value={this.state.lastName} placeholder="Last Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input className={emailInputClass} type="text" name="email" onChange={this.handleOnChange} value={this.state.email} placeholder="Email" />
                  <div className="invalid-feedback">
                    Not a valid email address
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="Password">Password</label>
                  <input className={passwordInputClass} type="password" name="password" onChange={this.handleOnChange} value={this.state.password} placeholder="Password" />
                  <div className="invalid-feedback">
                    Password Is Not Strong Enough
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="password-confirmation">Confirm Password</label>
                  <input className={passwordConfirmationInputClass} type="password" name="passwordConfirmation" onChange={this.handleOnChange} value={this.state.passwordConfirmation} placeholder="Confirm Password" />
                  <div className="invalid-feedback">
                    Password Does Not Match
                  </div>
                </div>
                  <input className="btn btn-dark btn-block" type="submit" value="Sign Up" />
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Signup)
