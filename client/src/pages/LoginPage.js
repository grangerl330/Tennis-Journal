import React, { Component } from 'react'
import LoginPageLeft from '../components/login-page/LoginPageLeft'
import LoginPageRight from '../components/login-page/LoginPageRight'
import SignUpForm from '../components/login-page/SignUpForm'

import { updateLoginForm, authenticatePassword } from '../actions/loginForm'
import { login } from '../actions/currentUser'
import { updateSignupForm } from '../actions/signupForm'
import { signup } from '../actions/newUser'

import { connect } from 'react-redux'

class LoginPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showSignup: false,
      showOnlyLogin: false
    }
  }

  renderLoginComponents = () => {
    if(this.state.showSignup) {
      return (
        <SignUpForm toggleSignUp={this.toggleSignUp} signupFormData={this.props.signupFormData} updateSignupForm={this.props.updateSignupForm} signup={this.props.signup} welcome={this.props.welcome} />
      )
    } else if(this.state.showOnlyLogin) {
        return (
          <LoginPageRight authenticatePassword={this.props.authenticatePassword} login={this.props.login} toggleShowOnlyLogin={this.toggleShowOnlyLogin} hideOnMobile={false} />
        )
    } else {
      return (
        <>
          <LoginPageLeft toggleSignUp={this.toggleSignUp} toggleShowOnlyLogin={this.toggleShowOnlyLogin}/>
          <LoginPageRight authenticatePassword={this.props.authenticatePassword} login={this.props.login} hideOnMobile={true} />
        </>
      )
    }
  }

  toggleSignUp = () => {
    this.setState({
      showSignup: !this.state.showSignup
    })
  }

  toggleShowOnlyLogin = () => {
    this.setState({
      showOnlyLogin: !this.state.showOnlyLogin
    })
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {this.renderLoginComponents()}
        </div>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    loginFormData: state.loginForm,
    signupFormData: state.signupForm,
    welcome: state.welcomeWindow
  }
}

export default connect(mapStateToProps, { updateLoginForm, login, updateSignupForm, signup, authenticatePassword })(LoginPage)
