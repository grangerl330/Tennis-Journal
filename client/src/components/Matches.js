import React from 'react';
import { NavLink, Route } from 'react-router-dom'
import MatchForm from './MatchForm'

const Matches = (props) => {
  const sortedMatches = props.matches.sort(function(a,b) {return parseFloat(a.id) - parseFloat(b.id)})

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
    <div key={match.id}>
      <p><NavLink className="main-content-link" to={`/matches/view/${match.id}`}>{match.tournament.title} - {match_round_display(match)}</NavLink></p>
    </div>
  )

  return (
    <div className="main-content-text">
      {renderMatches}
      <Route exact path='/matches/add_match' render={() => <MatchForm sendMatchToDatabase={props.addMatchToDatabase} add="add"/>}/>
    </div>
  )
}

export default Matches
