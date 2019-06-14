import React from 'react'
import { connect } from 'react-redux'
import { updateSignupForm } from '../actions/signupForm'
import { signup } from '../actions/newUser'

const Signup = (props) => {
  const handleOnSubmit = event => {
    event.preventDefault()

    props.signup(props.signupFormData)
  }

  const handleOnChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...props.signupFormData,
      [name]: value
    }
    props.updateSignupForm(updatedFormInfo)
  }

  return (
    <div className="Signup-Form">
      <h2>Sign Up</h2>
      <form onSubmit={handleOnSubmit}>
        <input type="text" name="firstName" onChange={handleOnChange} value={props.signupFormData.firstName} placeholder="First Name" />
        <input type="text" name="lastName" onChange={handleOnChange} value={props.signupFormData.lastName} placeholder="Last Name" />
        <input type="text" name="email" onChange={handleOnChange} value={props.signupFormData.email} placeholder="email" />
        <input type="text" name="password" onChange={handleOnChange} value={props.signupFormData.password} placeholder="password" />
        <input type="submit" value="Log In" />
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    signupFormData: state.signupForm
  }
}

export default connect(mapStateToProps, { updateSignupForm, signup })(Signup)
