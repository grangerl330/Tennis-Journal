import React from 'react'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'

const NavbarRight = (props) => {
  const handleOnSubmit = event => {
    event.preventDefault()

    props.logout()
    props.history.push('/')
  }

  return (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item dropdown mr-3">
        <button href="#" className="btn btn-link nav-link dropdown-toggle" data-toggle="dropdown">
          <i className="fas fa-user"></i> Welcome {props.currentUser.first_name} {props.currentUser.last_name}
        </button>
        <div className="dropdown-menu">
          <NavLink to='/profile/edit' className="dropdown-item">
            <i className="fas fa-user-circle"></i> Edit Profile
          </NavLink>
        </div>
      </li>
      <li className= "nav-item">
        <a href="/login" className="nav-link" onClick={handleOnSubmit}>
          <i className="fas fa-user-times"></i> Logout
        </a>
      </li>
    </ul>
  )
}

export default withRouter(NavbarRight)
