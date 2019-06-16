import React from 'react'
import Logout from '../components/Logout'
import { logout } from '../actions/currentUser'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <div className="navbar">
      {`Welcome ${props.currentUser.first_name}`}
      <Logout logout={props.logout}/>
      <NavLink to="/matches/add-match" className="navlink">Matches</NavLink>
      <NavLink to="/tournaments/add-tournament" className="navlink">Tournaments</NavLink>
    </div>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps, { logout })(Navbar)
