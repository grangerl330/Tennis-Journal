import React from 'react'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'

const NavbarLinks = (props) => {
  return (
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink to='/home' className="nav-link">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/tournaments" className="nav-link">Tournaments</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/matches" className="nav-link">All Matches</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/opponents" className="nav-link">All Opponents</NavLink>
      </li>
    </ul>
  )
}

export default withRouter(NavbarLinks)
