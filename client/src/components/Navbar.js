import React from 'react'
import { connect } from 'react-redux'
import Logout from '../containers/Logout'

const Navbar = (props) => {
  return (
    <div className="navbar">
      {`Welcome ${props.currentUser.first_name}`}
      <Logout />
    </div>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(Navbar)
