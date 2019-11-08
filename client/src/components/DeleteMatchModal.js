import React from 'react'

const DeleteMatchModal = (props) => {
  const deleteMatch = event => {
    event.preventDefault()

    props.deleteMatch(props.matchId)
  }

  return (
    <div className="modal fade" id="deleteMatchModal">
      <div className="modal-dialog modal-md">
        <div className="modal-content">
          <div className="modal-header bg-danger text-white">
            <h5 className="modal-title">Delete Match</h5>
            <button className="close" data-dismiss="modal">
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="modal-body">
            <p>Are you sure you want to delete this match?</p>
          </div>
          <div className="modal-footer justify-content-center">
            <button className="btn btn-danger btn-block mr-4" data-dismiss="modal">No</button>
            <button className="btn btn-success btn-block" data-dismiss="modal" onClick={deleteMatch}>Yes</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeleteMatchModal
