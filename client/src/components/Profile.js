import React from 'react'

const Profile = (props) => {
  return (
    <div className="main-content-text">
      <p>First Name: {props.currentUser.first_name}</p>
      <p>Last Name: {props.currentUser.last_name}</p>
      <p>Email: {props.currentUser.email}</p>
    </div>
  )
}

export default Profile
