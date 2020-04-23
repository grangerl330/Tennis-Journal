import React, { Component } from 'react'
import classNames from 'classnames'
import validator from 'validator'
import zxcvbn from 'zxcvbn'
import $ from 'jquery'
import logo from '../../../images/Logo-White.svg'
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
      passwordConfirmationIsValid: true,
      passwordFeedback: "",
      passwordFeedbackColor: "",
      feedbackIsValid: true,
      showFeedback: false,
      textDark: true
    }
  }

  handleOnChange = event => {
    const {name, value} = event.target

    if(name === "email"){
      this.setState({
        textDark: true
      })
    } else if(name === "password"){
      this.setState({
        textDark: true
      })
    } else if(name === "passwordConfirmation"){
      this.setState({
        textDark: true
      })
    }

    if(name === "password" && value === "") {
      this.setState({
        passwordFeedback: ""
      })
    } else if(name === "password") {
      switch (this.calculatePasswordStrength(value)) {
      case 0:
        this.setState({
          showFeedback: true,
          passwordFeedback: "Too Short",
          passwordFeedbackColor: "input-group-text text-red"
        })
        break;
      case 1:
        this.setState({
          showFeedback: true,
          passwordFeedback: "Weak",
          passwordFeedbackColor: "input-group-text text-red"
        })
        break;
      case 2:
        this.setState({
          showFeedback: true,
          passwordFeedback: "Good",
          passwordFeedbackColor: "input-group-text text-orange"
        })
        break
      case 3:
        this.setState({
          showFeedback: true,
          passwordFeedback: "Strong",
          passwordFeedbackColor: "input-group-text text-light-green"
        })
        break
      case 4:
        this.setState({
          showFeedback: true,
          passwordFeedback: "Very Strong",
          passwordFeedbackColor: "input-group-text text-green"
        })
        break
      default:
        break
      }
    }

    this.setState({
      [name]: value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()

    this.resetValidations()


    const user = {
      email: this.state.email,
      password: this.state.password
    }

    if (this.formIsValid()) {
      this.props.signup(user)


      this.props.history.push('/home')
    } else {
      this.props.history.push('/')
    }
  }

  calculatePasswordStrength = event => {
    const evaluation = zxcvbn(this.state.password)

    return evaluation.score
  }

  formIsValid = () => {
    let isValid = true;

    fetch('/api/authenticate_email', {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: this.state.email
      })
    })
    .then(response => response.json())
    .then(response => {
      if(response.isValid === false) {
        this.setState({
          emailIsValid: false
        })

        $('.invalid-feedback.email').text('This email address is already taken')
      }
    })

    if (!validator.isEmail(this.state.email)) {
    this.setState({
      emailIsValid: false,
      textDark: false
    })

    $('.invalid-feedback.email').text('Please enter a valid email address')
      isValid = false;
    }

    if(this.calculatePasswordStrength() < 2 && this.state.password !== "") {
      this.setState({
        passwordIsValid: false,
        feedbackIsValid: false,
        textDark: false
      })
        isValid = false;
    } else {
      this.setState({
        feedbackIsValid: true
      })
    }

    if(this.state.password !== this.state.passwordConfirmation) {
      this.setState({
        passwordConfirmationIsValid: false,
        textDark: false
      })
      isValid = false;
    }

    return isValid;
  }

  resetValidations = () => {
    this.setState({
      emailIsValid: true,
      passwordIsValid: true,
      passwordConfirmationIsValid: true,
      passwordFeedback: "",
      passwordFeedbackColor: "",
      showFeedback: false
    })
  }

  renderPasswordInput = () => {

    const passwordInputClass = classNames('signup-input form-control',
      {'form-control is-invalid': !this.state.passwordIsValid, 'background-image-none border-right-0 text-dark-grey': this.state.showFeedback}
    );

    const inputGroupTextClass = classNames(`input-group-text ${this.state.passwordFeedbackColor}`,
      {'feedback-invalid': !this.state.feedbackIsValid}
    )

    if(this.state.passwordFeedback !== "") {
      return (
        <div className="input-group mb-3">
          <input id="passwordInput" className={passwordInputClass} type="password" name="password" onChange={this.handleOnChange} value={this.state.password} placeholder="Password" autoFocus="autofocus"/>
          <div className="input-group-append">
            <span className={inputGroupTextClass} id="passwordAddon">{this.state.passwordFeedback}</span>
          </div>
          <div className="invalid-feedback text-white">
            Password is too weak. Please increase the length and add some uppercase or non-letter characters.
          </div>
        </div>
      )
    } else {
      return (
        <>
          <input id="passwordInput" className={passwordInputClass} type="password" name="password" onChange={this.handleOnChange} value={this.state.password} placeholder="Password" />
          <div className="invalid-feedback text-white">
            Password is too weak. Please increase the length and add some uppercase or non-letter characters.
          </div>
        </>
      )
    }
  }

  render() {
    const emailInputClass = classNames('signup-input form-control',
      {'form-control is-invalid': !this.state.emailIsValid, 'text-dark-grey': this.state.textDark}
    );

    const passwordConfirmationInputClass = classNames('signup-input form-control',
      {'form-control is-invalid': !this.state.passwordConfirmationIsValid, 'text-dark-grey': this.state.textDark}
    );

    return (
      <div className="col-12 col-md-11 background-green d-flex flex-column">
        <div className="row justify-content-end mt-4">
          <i className="fa fa-times fa-lg text-white mr-3 mr-md-5" onClick={this.props.toggleSignUp}></i>
        </div>
        <div className="row justify-content-center mt-5 my-md-auto">
          <div className="col-12 col-md-8">
            <div className="row mt-3 justify-content-center">
              <div className="col-2 col-md-1 p-0 text-center mr-2 ">
                <img className="logo" src={logo} alt="logo" />
              </div>
              <div className="col-8 col-md-4 p-0 ml-md-0 ">
                <h2 className="text-white">Tennis Journal</h2>
              </div>
            </div>
            <div className="row mt-4 justify-content-center">
              <div className="col-10 text-center">
                <span className="text-white">Track your tennis match statistics, ranking, and more.</span>
              </div>
            </div>
            <form onSubmit={this.handleOnSubmit}>
              <div className="row justify-content-center mt-5">
                <div className="col-md-8">
                    <div className="form-row">
                      <div className="col">
                        <input className="signup-input form-control" type="text" name="first_name" onChange={this.handleOnChange} value={this.state.first_name} placeholder="First Name" />
                      </div>
                      <div className="col">
                        <input className="signup-input form-control" type="text" name="last_name" onChange={this.handleOnChange} value={this.state.last_name} placeholder="Last Name" />
                      </div>
                    </div>
                    <div className="form-group text-center mt-4">
                      <input className={emailInputClass} type="text" name="email" onChange={this.handleOnChange} value={this.state.email} placeholder="Email" />
                      <div className="invalid-feedback email text-white">
                        Please enter a valid email address
                      </div>
                    </div>
                    <div className="form-group text-center mt-4">
                      {this.renderPasswordInput()}
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
                <div className="col-5 col-md-3 mx-auto">
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
