import React from 'react'
import Login from '../components/Login'
import Signup from '../components/SignUp'

const WelcomePage = () => {
  return (
    <div className="Welcome-Page">
      <Login />
      <h2>or</h2>
      <Signup />
    </div>
  )
}

export default WelcomePage
