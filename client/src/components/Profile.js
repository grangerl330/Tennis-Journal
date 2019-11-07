import React from 'react'
import ProfileForm from './ProfileForm'

const Profile = (props) => {
  return (
    <section id="profile">
      <div className="container-fluid py-2 bg-info text-white mb-4">
        <div className="row">
          <div className="col text-center">
            <h1>
              <i className="fas fa-user"></i> Edit Profile
            </h1>
          </div>
        </div>
      </div>

      <div className="container mb-4">
        <div className="row justify-content-center">
          <div className="col-md-3">
            <button className="btn btn-success btn-block">
              <i className="fas fa-lock"></i> Change Password
            </button>
          </div>
          <div className="col-md-3">
            <button className="btn btn-danger btn-block">
              <i className="fas fa-trash"></i> Delete Account
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-9">
            <div className="card">
              <div className="card-header">
                <h4>Edit Profile</h4>
              </div>
              <div className="card-body">
                <ProfileForm currentUser={props.currentUser} updateCurrentUserInDatabase={props.updateCurrentUserInDatabase}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    // <div className="main-content-text">
    //   <p><b>First Name:</b> {props.currentUser.first_name}</p>
    //   <p><b>Last Name:</b> {props.currentUser.last_name}</p>
    //   <p><b>Email:</b> {props.currentUser.email}</p>
    //   <NavLink to="/profile/edit"><img src={editPencil} alt="Edit Profile"/></NavLink>
    // </div>
  )
}

export default Profile
