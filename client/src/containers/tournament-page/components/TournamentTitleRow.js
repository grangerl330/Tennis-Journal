import React from 'react'
import menuDots from '../../../images/menu-dots.svg'

const TournamentTitleRow = (props) => {
  return (
    <div className="row mt-5 justify-content-start ml-5">
      <div className="col-9">
        <h3 className="text-black">{props.title}</h3>
      </div>
      <div className="col-2 ml-auto mr-5">
        <div className="dropdown text-center">
          <button id="tournament" type="button" className="border-0 dropdown-toggle" data-toggle="dropdown">
            <img className="icon-small" src={menuDots} alt="menu dots" />
          </button>
          <div className="dropdown-menu dropdown-menu-center border-white shadow-light-green rounded">
            <button className="border-0" data-toggle="modal" data-target="#tournamentInfoModal">
              <i className="fas fa-pencil-alt pr-2 my-auto fa-s text-green"></i> Edit
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
