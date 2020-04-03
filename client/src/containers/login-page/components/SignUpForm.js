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
      passwordConfirmationIsValid: true,
      passwordFeedback: "",
      passwordFeedbackColor: "",
      feedbackIsValid: true,
      showFeedback: false
    }
  }

  handleOnChange = event => {
    const {name, value} = event.target

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

    if (this.formIsValid()) {
      this.props.signup(this.state)


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

    if (!validator.isEmail(this.state.email)) {
    this.setState({
      emailIsValid: false
    })

    $('.invalid-feedback.email').text('Please enter a valid email address')
      isValid = false;
    }

    if(this.calculatePasswordStrength() < 2 && this.state.password !== "") {
      this.setState({
        passwordIsValid: false,
        feedbackIsValid: false
      })
        isValid = false;
    } else {
      this.setState({
        feedbackIsValid: true
      })
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
      passwordConfirmationIsValid: true,
      passwordFeedback: "",
      passwordFeedbackColor: "",
      showFeedback: false
    })
  }

  renderPasswordInput = () => {

    const passwordInputClass = classNames('signup-input form-control',
      {'form-control is-invalid': !this.state.passwordIsValid, 'background-image-none': this.state.showFeedback, 'border-right-0': this.state.showFeedback}
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
            Password is too weak. Try adding some uppercase or non-letter characters.
          </div>
        </div>
      )
    } else {
      return (
        <>
          <input id="passwordInput" className={passwordInputClass} type="password" name="password" onChange={this.handleOnChange} value={this.state.password} placeholder="Password" />
          <div className="invalid-feedback text-white">
            Password is too weak. Try adding some uppercase or non-letter characters.
          </div>
        </>
      )
    }
  }

  render() {
    const emailInputClass = classNames('signup-input form-control',
      {'form-control is-invalid': !this.state.emailIsValid }
    );

    const passwordConfirmationInputClass = classNames('signup-input form-control',
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
                        <input className="signup-input form-control" type="text" name="first_name" onChange={this.handleOnChange} value={this.state.first_name} placeholder="First Name" />
                      </div>
                      <div className="col">
                        <input className="signup-input form-control" type="text" name="last_name" onChange={this.handleOnChange} value={this.state.last_name} placeholder="Last Name" />
                      </div>
                    </div>
                    <div className="form-group text-center mt-4">
                      <input className={emailInputClass} type="text" name="email" onChange={this.handleOnChange} value={this.state.email} placeholder="Email" />
                      <div className="invalid-feedback text-white">
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
