import React from 'react';
import { NavLink, Route } from 'react-router-dom'
import MatchForm from './MatchForm'

const Matches = (props) => {
  const renderMatches = props.matches.map(match =>
    <div key={match.id}>
      <p><NavLink className="main-content-link" to={`/matches/view/${match.id}`}>{match.tournament.title} - Round of {match.round}</NavLink></p>
    </div>
  )

  return (
    <div className="main-content-text">
      <h2>Matches List</h2>
      {renderMatches}
      <p><NavLink className="main-content-link" to={`/matches/add_match`}>Add Match</NavLink></p>
      <Route exact path='/matches/add_match' render={() => <MatchForm addMatchToDatabase={props.addMatchToDatabase}/>}/>
    </div>
  )
}

export default Matches
