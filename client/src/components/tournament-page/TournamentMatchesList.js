import React from 'react'
import TournamentMatchesTable from '../tables/TournamentMatchesTable'
import { NavLink } from 'react-router-dom'

const TournamentMatchList = (props) => {
  return (
    <div id="match-list">
      <div className="row mt-3 ml-3 ml-md-5 pr-0 justify-content-start">
        <div className="col-8">
          <h4 className="text-black">Matches</h4>
        </div>
      </div>
      <div className="row mt-3 ml-3 ml-md-5 pr-0">
        <TournamentMatchesTable matches={props.matches} />
      </div>
      <div className="row mt-4 ml-md-5 justify-content-center justify-content-md-start mb-5">
        <div className="col-8 col-md-3">
          <NavLink to={`/tournaments/${props.tournamentId}/add-match`} className="text-white btn btn-green btn-block">
            Add Match
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default TournamentMatchList
