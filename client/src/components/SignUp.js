import React from 'react'

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
        <p><input type="text" name="first_name" onChange={handleOnChange} value={props.signupFormData.firstName} placeholder="First Name" /></p>
        <p><input type="text" name="last_name" onChange={handleOnChange} value={props.signupFormData.lastName} placeholder="Last Name" /></p>
        <p><input type="text" name="email" onChange={handleOnChange} value={props.signupFormData.email} placeholder="email" /></p>
        <p><input type="password" name="password" onChange={handleOnChange} value={props.signupFormData.password} placeholder="password" /></p>
        <input type="submit" value="Log In" />
      </form>
    </div>
  )
}

export default Signup
