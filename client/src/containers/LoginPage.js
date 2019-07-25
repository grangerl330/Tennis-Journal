import React from 'react'
import Login from '../components/Login'
import { updateLoginForm } from '../actions/loginForm'
import { login } from '../actions/currentUser'
import Signup from '../components/SignUp'
import { updateSignupForm } from '../actions/signupForm'
import { signup } from '../actions/newUser'
import { connect } from 'react-redux'

const LoginPage = (props) => {
  return (
    <div className="login-Page">
      <Login loginFormData={props.loginFormData} updateLoginForm={props.updateLoginForm} login={props.login} welcome={props.welcome}/>
      <h2>or</h2>
      <Signup signupFormData={props.signupFormData} updateSignupForm={props.updateSignupForm} signup={props.signup} welcome={props.welcome}/>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    loginFormData: state.loginForm,
    signupFormData: state.signupForm,
    welcome: state.welcomeWindow
  }
}

export default connect(mapStateToProps, { updateLoginForm, login, updateSignupForm, signup })(LoginPage)
