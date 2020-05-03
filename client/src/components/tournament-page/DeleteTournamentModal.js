import React from 'react'

const DeleteTournamentModal = (props) => {
  const deleteTournament = event => {
    event.preventDefault()

    props.deleteTournament(props.tournamentId)
  }

  return (
    <div className="modal fade" id="deleteTournamentModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header border-0">
            <button className="close" data-dismiss="modal">
              <i className="fas fa-times fa-sm text-grey"></i>
            </button>
          </div>
          <div className="modal-body px-5">
            <div className="row">
              <div className="col">
                <h5 className="text-green mb-4">Are you sure you want to delete this tournament?</h5>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-4">
                <button className="btn mr-4 text-grey" data-dismiss="modal">Cancel</button>
              </div>
              <div className="col-4">
                <button className="btn btn-green btn-block" data-dismiss="modal" onClick={deleteTournament}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeleteTournamentModal
