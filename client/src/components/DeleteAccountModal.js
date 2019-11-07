import React from 'react'

const DeleteAccountModal = (props) => {
  const deleteAccount = event => {
    event.preventDefault()

    props.deleteCurrentUserFromDatabase(props.currentUser)
  }

  return (
    <div className="modal fade" id="deleteAccountModal">
      <div className="modal-dialog modal-md">
        <div className="modal-content">
          <div className="modal-header bg-danger text-white">
            <h5 className="modal-title">Delete Account</h5>
            <button className="close" data-dismiss="modal">
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="modal-body">
            <p>Are you sure you want to delete your account?</p>
          </div>
          <div className="modal-footer justify-content-center">
            <button className="btn btn-danger mr-4" data-dismiss="modal">No</button>
            <button className="btn btn-success" data-dismiss="modal" onClick={deleteAccount}>Yes</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeleteAccountModal
