import React from 'react';
import moment from 'moment'
import { NavLink } from 'react-router-dom'

const Matches = (props) => {
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
    <div className="col-md-2 mb-4 mr-0 mr-md-5 mr-lg-0" key={match.id}>
      <div className="card card-tournament d-flex border border-secondary">
        <NavLink className="card-block stretched-link text-decoration-none text-dark h-100" to={`/matches/${match.id}`}>
          <div className="card-body d-flex align-items-center justify-content-center h-100">
              <p className="card-text text-center">{match_round_display(match)}  {match.tournament.title}  {match.result}</p>
          </div>
        </NavLink>
      </div>
    </div>
  )

  const message = () => {
    if(!props.matches.length > 0){
      return (
        <div className="message-display">
          <p>* This list will populate automatically when a new match is added</p>
          <p>Add a new match by clicking the plus icon under "Matches" on a Tournament's view page</p>
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
        <div className="row justify-content-center mt-4">
          {message()}
          {renderMatches}
        </div>
      </div>
    </section>
  )
}

export default Matches
