import React from 'react'
import NavbarBrand from '../components/NavbarBrand'
import NavbarRight from '../components/NavbarRight'
import NavbarLinks from '../components/NavbarLinks'
import { logout } from '../actions/currentUser'
import { connect } from 'react-redux'
import { NavLink, Route } from 'react-router-dom'
import logo from '../images/Logo.jpg'

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top py-3">
      <div className="container-fluid">
        <NavbarBrand />
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <NavbarLinks />
          <NavbarRight logout={props.logout} currentUser={props.currentUser} />
        </div>
      </div>
    </nav>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps, { logout })(Navbar)
