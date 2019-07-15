import React from 'react'
import Logout from '../components/Logout'
import { logout } from '../actions/currentUser'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Topbar = (props) => {
  return (
    <div className="topbar">
      <span className="welcome-message">{`Hello ${props.currentUser.first_name}!`} Welcome to Tennis Journal!</span>
      <Logout logout={props.logout}/>
      <NavLink to='/profile' className="navlink">Profile</NavLink>
      <NavLink to="/tournaments/add_tournament" className="navlink">Tournaments</NavLink>
      <NavLink to="/matches/add_match" className="navlink">Matches</NavLink>
      <NavLink to="/opponents" className="navlink">Opponents</NavLink>
    </div>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps, { logout })(Topbar)
