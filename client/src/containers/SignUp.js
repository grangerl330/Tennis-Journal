import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/loginForm'
import { signup } from '../actions/newUser'

const Signup = (props) => {
  const handleOnSubmit = event => {
    event.preventDefault()

    props.signup(props.loginFormData)
  }

  const handleOnChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...props.loginFormData,
      [name]: value
    }
    props.updateLoginForm(updatedFormInfo)
  }

  return (
    <div className="Signup-Form">
      <h2>Sign Up</h2>
      <form onSubmit={handleOnSubmit}>
        <input type="text" name="email" onChange={handleOnChange} value={props.loginFormData.email} placeholder="email" />
        <input type="text" name="password" onChange={handleOnChange} value={props.loginFormData.password} placeholder="password" />
        <input type="submit" value="Log In" />
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    loginFormData: state.loginForm
  }
}

export default connect(mapStateToProps, { updateLoginForm, signup })(Signup)
