import React from 'react'
import menuDots from '../../../../../images/menu-dots.svg'
import editIcon from '../../../../../images/edit.svg'

const TournamentTitleRow = (props) => {
  return (
    <div className="row mt-5 justify-content-start ml-md-5">
      <div className="col-8 col-md-9 ml-4 ml-md-0">
        <h3 className="text-black">{props.title}</h3>
      </div>
      <div className="col-1 col-md-2 ml-md-auto mr-auto mr-md-4">
        <div className="dropdown text-center">
          <button id="tournament" type="button" className="border-0 dropdown-toggle bg-white" data-toggle="dropdown">
            <img className="icon-small" src={menuDots} alt="menu dots" />
          </button>
          <div className="dropdown-menu dropdown-menu-center border-white shadow-light-green rounded">
            <button className="border-0" data-toggle="modal" data-target="#tournamentInfoModal">
              <img src={editIcon} className="pr-2 my-auto" alt="edit" /> <span className="mr-3">Edit</span>
            </button>
            <button className="border-0 mt-3" data-toggle="modal" data-target="#deleteTournamentModal">
              <i className="fas fa-trash pr-2 my-auto fa-s text-green"></i> Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TournamentTitleRow
