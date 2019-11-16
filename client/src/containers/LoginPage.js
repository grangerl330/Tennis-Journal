import React from 'react'
import Login from '../components/Login'
import NavbarBrand from '../components/NavbarBrand'
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
        </div>
      </nav>
      <div className="container my-5">
        <Login authenticatePassword={props.authenticatePassword} login={props.login} />
        <div className="row my-3" id="login">
          <div className="col-md-6 mx-auto text-center">
            <h2>or</h2>
          </div>
        </div>
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
