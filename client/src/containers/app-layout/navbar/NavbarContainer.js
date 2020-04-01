import React from 'react'
import NavbarLogin from './components/NavbarLogin'
import NavbarBrand from './components/NavbarBrand'
import NavbarRight from './components/NavbarRight'
import NavbarLinks from './components/NavbarLinks'
import { logout } from '../../../actions/currentUser'
import { connect } from 'react-redux'

const NavbarContainer = (props) => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark background-dark py-3">
      <div className="container-fluid">
        <NavbarBrand login={props.isLogin}/>
        <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          {renderNavbarComponents(props)}
        </div>
      </div>
    </nav>
  )
}

const renderNavbarComponents = (props) => {
  if(props.isLogin === true) {
    return (
      <>
        <NavbarLogin authenticatePassword={props.authenticatePassword} login={props.login}/>
      </>
    )
  } else if(props.isLogin === false) {
    return (
      <>
        <NavbarLinks logout={props.logout} currentUser={props.currentUser}/>
        <NavbarRight logout={props.logout} currentUser={props.currentUser} />
      </>
    )
  }
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps, { logout })(NavbarContainer)
