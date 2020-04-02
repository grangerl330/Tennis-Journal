import React, { Component } from 'react'
import LoginPageLeft from './components/LoginPageLeft'
import LoginPageRight from './components/LoginPageRight'
import SignUpForm from './components/SignUpForm'

import { updateLoginForm, authenticatePassword } from '../../actions/loginForm'
import { login } from '../../actions/currentUser'
import { updateSignupForm } from '../../actions/signupForm'
import { signup } from '../../actions/newUser'

import { connect } from 'react-redux'

class LoginPageContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showSignup: false
    }
  }

  renderLeftPage = () => {
    if(this.state.showSignup) {
      return (
        <SignUpForm toggleSignUp={this.toggleSignUp} signupFormData={this.props.signupFormData} updateSignupForm={this.props.updateSignupForm} signup={this.props.signup} welcome={this.props.welcome} />
      )
    } else {
      return (
        <>
          <LoginPageLeft toggleSignUp={this.toggleSignUp}/>
          <LoginPageRight authenticatePassword={this.props.authenticatePassword} login={this.props.login}/>
        </>
      )
    }
  }

  toggleSignUp = () => {
    this.setState({
      showSignup: !this.state.showSignup
    })
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {this.renderLeftPage()}
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

export default connect(mapStateToProps, { updateLoginForm, login, updateSignupForm, signup, authenticatePassword })(LoginPageContainer)
