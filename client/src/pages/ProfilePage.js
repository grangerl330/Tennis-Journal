import React from 'react'
import ProfileForm from '../components/profile-page/ProfileForm'
import PasswordModal from '../components/profile-page/PasswordModal'
import DeleteAccountModal from '../components/profile-page/DeleteAccountModal'

const ProfilePage = (props) => {
  return (
    <section id="profile">
      <div className="container mb-4">
        <div className="row justify-content-center">
          <div className="col-md-3">
            <button className="btn btn-success btn-block" data-toggle="modal" data-target="#changePasswordModal">
              <i className="fas fa-lock"></i> Change Password
            </button>
          </div>
          <div className="col-md-3">
            <button className="btn btn-danger btn-block" data-toggle="modal" data-target="#deleteAccountModal">
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
                <ProfileForm currentUser={props.currentUser} updateCurrentUserInDatabase={props.updateCurrentUserInDatabase} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <PasswordModal currentUser={props.currentUser} updateCurrentUserPasswordInDatabase={props.updateCurrentUserPasswordInDatabase} />
      <DeleteAccountModal currentUser={props.currentUser} deleteCurrentUserFromDatabase={props.deleteCurrentUserFromDatabase}/>
    </section>
  )
}

export default ProfilePage
