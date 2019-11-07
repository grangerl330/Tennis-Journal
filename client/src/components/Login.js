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
    <div className="row" id="login">
      <div className="col-md-6 mx-auto">
        <div className="card">
          <div className="card-header">
            <h4>Login</h4>
          </div>
          <div className="card-body">
            <form onSubmit={handleOnSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input className="form-control" type="text" name="email" onChange={handleOnChange} value={props.loginFormData.email} placeholder="email" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input className="form-control" type="password" name="password" onChange={handleOnChange} value={props.loginFormData.password} placeholder="password" />
              </div>
              <input className="btn btn-primary btn-block" type="submit" value="Login" />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Login)
