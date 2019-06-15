import React from 'react'
import Logout from '../components/Logout'
import { logout } from '../actions/currentUser'
import { connect } from 'react-redux'

const Navbar = (props) => {
  return (
    <div className="navbar">
      {`Welcome ${props.currentUser.first_name}`}
      <Logout logout={props.logout}/>
    </div>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps, { logout })(Navbar)
