import React from 'react'
import NavbarBrand from '../components/navbar/NavbarBrand'
import NavbarRight from '../components/navbar/NavbarRight'
import NavbarLinks from '../components/navbar/NavbarLinks'
import { logout } from '../actions/currentUser'
import { connect } from 'react-redux'

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark py-3">
      <div className="container-fluid">
        <NavbarBrand />
        <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
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
