import React from 'react'
import { connect } from 'react-redux'
import Login from '../containers/Login'
import Signup from '../containers/SignUp'

const WelcomePage = () => {
  return (
    <div className="Welcome-Page">
      <Login />
        or
      <Signup />
    </div>
  )
}

export default WelcomePage
