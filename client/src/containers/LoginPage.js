import React from 'react'
import Login from '../components/Login'
import NavbarBrand from '../components/NavbarBrand'
import NavbarLogin from '../components/NavbarLogin'
import { updateLoginForm, authenticatePassword } from '../actions/loginForm'
import { login } from '../actions/currentUser'
import Signup from '../components/SignUp'
import { updateSignupForm } from '../actions/signupForm'
import { signup } from '../actions/newUser'
import { connect } from 'react-redux'

const LoginPage = (props) => {
  return (
    <div className="section" id="loginpage">
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark py-3">
        <div className="container-fluid">
          <NavbarBrand />
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <NavbarLogin authenticatePassword={props.authenticatePassword} login={props.login}/>
          </div>
        </div>
      </nav>
      <div className="container my-5">
        <Signup signupFormData={props.signupFormData} updateSignupForm={props.updateSignupForm} signup={props.signup} welcome={props.welcome}/>
      </div>
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

export default connect(mapStateToProps, { updateLoginForm, login, updateSignupForm, signup, authenticatePassword })(LoginPage)
