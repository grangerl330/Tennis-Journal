import React from 'react'
import { NavLink } from 'react-router-dom'

const Profile = (props) => {
  return (
    <div className="main-content-text">
      <p>First Name: {props.currentUser.first_name}</p>
      <p>Last Name: {props.currentUser.last_name}</p>
      <p>Email: {props.currentUser.email}</p>
      <NavLink to="/profile/edit" className="button">Edit</NavLink>
    </div>
  )
}

export default Profile
