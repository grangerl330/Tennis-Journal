import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/loginForm'
import { login } from '../actions/currentUser'

const Login = (props) => {

  const handleOnChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...props.loginFormData,
      [name]: value
    }
    props.updateLoginForm(updatedFormInfo)
  }

  const handleOnSubmit = event => {
    event.preventDefault()

    props.login(props.loginFormData)
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <input type="text" name="email" onChange={handleOnChange} value={props.loginFormData.email} placeholder="email" />
      <input type="text" name="password" onChange={handleOnChange} value={props.loginFormData.password} placeholder="password" />
      <input type="submit" value="Log In" />
    </form>
  )
}

const mapStateToProps = state => {
  return {
    loginFormData: state.loginForm
  }
}

export default connect(mapStateToProps, { updateLoginForm, login })(Login)
