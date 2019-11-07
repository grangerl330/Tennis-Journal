import React from 'react'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'
import logo from '../images/Logo.jpg'

const NavbarBrand = (props) => {
  return (
    <div id="NavbarBrand">
      <NavLink to='/home' className="navbar-brand">
        <img src={logo} alt="logo" className="mr-4" />
        <h3 className="d-inline align-middle">Tennis Journal</h3>
      </NavLink>
      <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
      </button>
    </div>
  )
}

export default withRouter(NavbarBrand)
