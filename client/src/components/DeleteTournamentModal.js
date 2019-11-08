import React from 'react'

const DeleteTournamentModal = (props) => {
  const deleteTournament = event => {
    event.preventDefault()

    props.deleteTournament(props.tournamentId)
  }

  return (
    <div className="modal fade" id="deleteTournamentModal">
      <div className="modal-dialog modal-md">
        <div className="modal-content">
          <div className="modal-header bg-danger text-white">
            <h5 className="modal-title">Delete Tournament</h5>
            <button className="close" data-dismiss="modal">
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="modal-body">
            <p>Are you sure you want to delete this tournament?</p>
          </div>
          <div className="modal-footer justify-content-center">
            <button className="btn btn-danger mr-4" data-dismiss="modal">No</button>
            <button className="btn btn-success" data-dismiss="modal" onClick={deleteTournament}>Yes</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeleteTournamentModal
