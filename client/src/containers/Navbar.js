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
      <NavLink to='/profile' className="navlink">Profile</NavLink>
      <NavLink to="/matches/add_match" className="navlink">Matches</NavLink>
      <NavLink to="/tournaments/add_tournament" className="navlink">Tournaments</NavLink>
    </div>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps, { logout })(Navbar)
