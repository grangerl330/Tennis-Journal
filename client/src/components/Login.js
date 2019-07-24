import React from 'react'
import { withRouter } from 'react-router';

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
    props.history.push('/stats')
  }

  return (
    <div className="Login-Form">
      <h2>Log In</h2>
      <form onSubmit={handleOnSubmit}>
        <p><input type="text" name="email" onChange={handleOnChange} value={props.loginFormData.email} placeholder="email" /></p>
        <p><input type="password" name="password" onChange={handleOnChange} value={props.loginFormData.password} placeholder="password" /></p>
        <input type="submit" value="Log In" />
      </form>
    </div>
  )
}

export default withRouter(Login)
