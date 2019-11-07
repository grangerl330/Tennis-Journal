import React from 'react'
import { withRouter } from 'react-router';

const Signup = (props) => {
  const handleOnSubmit = event => {
    event.preventDefault()

    props.signup(props.signupFormData)

    props.history.push('/welcome')
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
    <div className="row" id="login">
      <div className="col-md-6 mx-auto">
        <div className="card">
          <div className="card-header">
            <h4>Sign Up</h4>
          </div>
          <div className="card-body">
            <form onSubmit={handleOnSubmit}>
              <div className="form-group">
                <label htmlFor="First Name">First Name</label>
                <input className="form-control" type="text" name="first_name" onChange={handleOnChange} value={props.signupFormData.firstName} placeholder="First Name" />
              </div>
              <div className="form-group">
                <label htmlFor="Last Name">Last Name</label>
                <p><input className="form-control" type="text" name="last_name" onChange={handleOnChange} value={props.signupFormData.lastName} placeholder="Last Name" /></p>
              </div>
              <div className="form-group">
                <label htmlFor="Email">Email</label>
                <p><input className="form-control" type="text" name="email" onChange={handleOnChange} value={props.signupFormData.email} placeholder="Email" /></p>
              </div>
              <div className="form-group">
                <label htmlFor="Password">Password</label>
                <p><input className="form-control" type="password" name="password" onChange={handleOnChange} value={props.signupFormData.password} placeholder="Password" /></p>
              </div>
                <input className="btn btn-dark btn-block" type="submit" value="Sign Up" />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Signup)
