import React from 'react'
import NavbarBrand from '../../../components/navbar/NavbarBrand'
import NavbarLogin from '../../../components/navbar/NavbarLogin'
import { updateLoginForm, authenticatePassword } from '../../../actions/loginForm'
import { login } from '../../../actions/currentUser'
import SignUpForm from '../../../components/forms/SignUpForm'
import { updateSignupForm } from '../../../actions/signupForm'
import { signup } from '../../../actions/newUser'
import { connect } from 'react-redux'

const LoginPage = (props) => {
  return (
    <div className="section" id="login-page">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
        <div className="container-fluid">
          <NavbarBrand login={true}/>
          <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <NavbarLogin authenticatePassword={props.authenticatePassword} login={props.login}/>
          </div>
        </div>
      </nav>
      <header id="login-page-header">
        <div className="dark-overlay">
          <div className="container-fluid login">
            <div className="row">
              <div className="col-lg-7 d-none d-lg-block text-white ml-5">
                <div className="row mt-4 ml-2">
                  <h1 className="mb-2">Welcome To Tennis Journal!</h1>
                </div>
                <div className="row mb-5 ml-2 font-italic">
                    An app designed to help you keep track of tournaments, matches, opponents, and statistics.
                </div>
                <div className="row mb-5">
                  <div className="col-2 col-md-1">
                    <i className="fas fa-check fa-2x"></i>
                  </div>
                  <div className="col-9 col-md-8">
                    Keep detailed notes on each match and opponent you play to help you analyze your game and improve your weaknesses.
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-1">
                    <i className="fas fa-check fa-2x"></i>
                  </div>
                  <div className="col-8">
                    Set and keep track of goals to help motivate you to succeed.
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-1">
                    <i className="fas fa-check fa-2x"></i>
                  </div>
                  <div className="col-8">
                    Track advanced statistics like unforced errors, forced errors, double faults, and many more!
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-10">
                    <h3>Get started with Tennis Journal today and take your game to the next level!</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 ml-4">
                <div className="row mt-4">
                  <div className="col">
                    <SignUpForm signupFormData={props.signupFormData} updateSignupForm={props.updateSignupForm} signup={props.signup} welcome={props.welcome}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
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
