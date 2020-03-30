import React from 'react';
import moment from 'moment'
import { NavLink } from 'react-router-dom'

const MatchesPageContainer = (props) => {
  const sortedMatches = props.matches.sort(function(a,b) {return moment(a.date) - moment(b.date)})

  const match_round_display = (match) => {
    if(match.round > 8){
      return `Round of ${match.round}`
    } else if(match.round === 8){
      return "Quarterfinal"
    } else if(match.round === 4){
      return "Semifinal"
    } else if(match.round === 2){
      return "Final"
    }
  }

  const renderMatches = sortedMatches.map(match =>
    <div className="col-auto px-0 mb-3" key={match.id}>
      <div className="card card-tournament border border-secondary">
        <NavLink className="card-block stretched-link text-decoration-none text-dark h-100" to={`/matches/${match.id}`}>
          <div className="card-body text-center">
              <h5 className="card-text">{match_round_display(match)}</h5>
              <p className="card-text">{match.tournament.title}</p>
              <h6 className="card-text">{match.result}</h6>
          </div>
        </NavLink>
      </div>
    </div>
  )

  const message = () => {
    if(!props.matches.length > 0){
      return (
        <div id="opponent-message" className="row mt-3">
          <div className="col text-center">
            <p className="card-title font-weight-bold ml-1">* This list will populate automatically when a new match is added</p>
            <p className="card-title font-weight-bold ml-1">Add a new match by clicking the Add Match button under "Matches" on a Tournament's view page</p>
          </div>
        </div>
      )
    }
  }

  return (
    <section id="matches-page">
      <div className="container-fluid py-2 bg-info text-white mb-4">
        <div className="row">
          <div className="col text-center">
            <h1>Matches</h1>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="card-deck mt-4 d-flex justify-content-center">
          {message()}
          {renderMatches}
        </div>
      </div>
    </section>
  )
}

export default MatchesPageContainer
