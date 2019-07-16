import React from 'react'
import Logout from '../components/Logout'
import { logout } from '../actions/currentUser'
import { connect } from 'react-redux'
import { NavLink, Switch, Route } from 'react-router-dom'

const Topbar = (props) => {
  return (
    <div className="topbar">
      <div className="topbar-logo">
        Tennis Journal
      </div>
      <div className="username-display">
        <NavLink to='/profile' className="navlink">{props.currentUser.first_name} {props.currentUser.last_name}</NavLink>
        <div className="logout-display">
          <Logout logout={props.logout}/>
        </div>
      </div>
      <Route path='/profile' render={() => <div className="page-name-display">Profile</div>}/>
      <Route path='/tournaments' render={() => <div className="page-name-display">Tournaments</div>}/>
      <Route path='/matches' render={() => <div className="page-name-display">Matches</div>}/>
      <Route path='/opponents' render={() => <div className="page-name-display">Opponents</div>}/>
    </div>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps, { logout })(Topbar)
