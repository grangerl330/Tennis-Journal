import React from 'react'
import { NavLink } from 'react-router-dom'

const Profile = (props) => {
  return (
    <div className="main-content-text">
      <p><b>First Name:</b> {props.currentUser.first_name}</p>
      <p><b>Last Name:</b> {props.currentUser.last_name}</p>
      <p><b>Email:</b> {props.currentUser.email}</p>
      <NavLink to="/profile/edit" className="button">Edit</NavLink>
    </div>
  )
}

export default Profile
