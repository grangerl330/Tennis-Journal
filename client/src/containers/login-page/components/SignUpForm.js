import React, { Component } from 'react'
import classNames from 'classnames'
import validator from 'validator'
import zxcvbn from 'zxcvbn'
import $ from 'jquery'
import logo from '../../../images/Logo-White.png'
import { withRouter } from 'react-router';

class SignUpForm extends Component {

  constructor(props){
    super(props)

    this.state = {
      first_name: "",
      last_name: "",
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

    $('.invalid-feedback.email').text('Please enter a valid email address')

      isValid = false;
    }

    if(this.calculatePasswordStrength() < 4 && this.state.password !== "") {
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
      passwordIsValid: true,
      passwordConfirmationIsValid: true
    })
  }

  render() {
    const emailInputClass = classNames('signup-input',
      {'form-control is-invalid': !this.state.emailIsValid }
    );

    const passwordInputClass = classNames('signup-input',
      {'form-control is-invalid': !this.state.passwordIsValid }
    );

    const passwordConfirmationInputClass = classNames('signup-input',
      {'form-control is-invalid': !this.state.passwordConfirmationIsValid }
    );

    return (
      <div className="col-11 background-green d-flex flex-column">
        <div className="row justify-content-end mt-4">
          <i className="fa fa-times fa-lg text-white mr-5" onClick={this.props.toggleSignUp}></i>
        </div>
        <div className="row justify-content-center my-auto">
          <div className="col-8">
            <div className="row mt-3">
              <div className="col-1 p-0 text-center mr-2 ml-auto">
                <img src={logo} alt="logo" />
              </div>
              <div className="col-4 p-0 mr-auto">
                <h2 className="text-white">Tennis Journal</h2>
              </div>
            </div>
            <div className="row mt-4">
              <span className="text-white mx-auto">Track your tennis match statistics, ranking, and more.</span>
            </div>
            <form onSubmit={this.handleOnSubmit}>
              <div className="row justify-content-center mt-5">
                <div className="col-8">
                    <div className="form-row">
                      <div className="col">
                        <input className="signup-input" type="text" name="first_name" onChange={this.handleOnChange} value={this.state.first_name} placeholder="First Name" />
                      </div>
                      <div className="col">
                        <input className="signup-input" type="text" name="last_name" onChange={this.handleOnChange} value={this.state.last_name} placeholder="Last Name" />
                      </div>
                    </div>
                    <div className="form-group text-center mt-4">
                      <input className={emailInputClass} type="text" name="email" onChange={this.handleOnChange} value={this.state.email} placeholder="Email" />
                      <div className="invalid-feedback text-white">
                        Please enter a valid email address
                      </div>
                    </div>
                    <div className="form-group text-center mt-4">
                      <input className={passwordInputClass} type="password" name="password" onChange={this.handleOnChange} value={this.state.password} placeholder="Password" />
                      <div className="invalid-feedback text-white">
                        Password is not strong enough
                      </div>
                    </div>
                    <div className="form-group text-center mt-4">
                      <input className={passwordConfirmationInputClass} type="password" name="passwordConfirmation" onChange={this.handleOnChange} value={this.state.passwordConfirmation} placeholder="Confirm Password" />
                      <div className="invalid-feedback text-white">
                        Password does not match
                      </div>
                    </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-3 mx-auto">
                  <input className="btn-signup w-100 py-2" type="submit" value="Sign Up" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(SignUpForm)
