import React, { Component } from 'react'
import classNames from 'classnames'
import validator from 'validator'
import { withRouter } from 'react-router';

class Login extends Component {

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

    if (this.formIsValid()) {
      this.props.login(this.state)


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
      <div className="row" id="login">
        <div className="col-md-6 mx-auto">
          <div className="card">
            <div className="card-header">
              <h4>Login</h4>
            </div>
            <div className="card-body">
              <form onSubmit={this.handleOnSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input className={emailInputClass} type="text" name="email" onChange={this.handleOnChange} value={this.state.email} placeholder="Email" />
                  <div className="invalid-feedback">
                    Not a valid email address
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input className={passwordInputClass} type="password" name="password" onChange={this.handleOnChange} value={this.state.password} placeholder="Password" />
                </div>
                <input className="btn btn-dark btn-block" type="submit" value="Login" />
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Login)
