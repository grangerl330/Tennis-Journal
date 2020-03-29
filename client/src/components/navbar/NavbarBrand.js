import React from 'react'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'
import logo from '../../images/Tennis-Journal-Logo.png'

const NavbarBrand = (props) => {
  if(props.login) {
    return (
      <div id="NavbarBrand">
        <div className="navbar-brand">
          <img src={logo} alt="logo" className="mr-4" />
          <h3 className="d-inline align-middle">Tennis Journal</h3>
        </div>
      </div>
    )
  } else {
    return (
      <div id="NavbarBrand">
        <NavLink to='/home' className="navbar-brand">
          <img src={logo} alt="logo" className="mr-4" />
          <h3 className="d-inline align-middle">Tennis Journal</h3>
        </NavLink>
      </div>
    )
  }
}

export default withRouter(NavbarBrand)
