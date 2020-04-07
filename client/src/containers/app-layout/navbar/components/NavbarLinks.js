import React from 'react'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'

const NavbarLinks = (props) => {
  const handleOnSubmit = event => {
    event.preventDefault()

    props.logout()
    props.history.push('/')
  }

  return (
    <ul className="navbar-nav">
      <li className="nav-item dropdown mr-3 d-md-none">
        <button href="#" className="btn btn-link nav-link dropdown-toggle" data-toggle="dropdown">
          <i className="fas fa-user mr-2"></i> Welcome {props.currentUser.first_name} {props.currentUser.last_name}
        </button>
        <div className="dropdown-menu">
          <NavLink to='/profile/edit' className="dropdown-item">
            <i className="fas fa-user-circle mr-2"></i> Edit Profile
          </NavLink>
          <a href="/login" className="dropdown-item" onClick={handleOnSubmit}>
            <i className="fas fa-user-times mr-2"></i> Logout
          </a>
        </div>
      </li>
      <li className="nav-item">
        <NavLink to='/home' className="nav-link">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/tournaments" className="nav-link">Tournaments</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/matches" className="nav-link">Matches</NavLink>
      </li>
    </ul>
  )
}

export default withRouter(NavbarLinks)
