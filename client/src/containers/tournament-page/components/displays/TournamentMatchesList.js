import React from 'react'
import TournamentMatchesTable from '../TournamentMatchesTable'
import { NavLink } from 'react-router-dom'

const TournamentMatchList = (props) => {
  return (
    <div id="match-list">
      <div className="row mt-3 ml-5 pr-0 justify-content-start">
        <div className="col-8">
          <h4 className="text-black">Matches</h4>
        </div>
      </div>
      <div className="row mt-3 ml-5 pr-0">
        <TournamentMatchesTable matches={props.matches} />
      </div>
      <div className="row mt-4 ml-5 justify-content-start mb-5">
        <div className="col-3">
          <button className="btn btn-green btn-block">
            <NavLink to={`/tournaments/${props.tournamentId}/add-match`} className="text-white">
              Add Match
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  )
}

export default TournamentMatchList
