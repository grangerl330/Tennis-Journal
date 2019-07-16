import React from 'react';
import { NavLink } from 'react-router-dom'

const Matches = (props) => {
  const renderMatches = props.matches.map(match =>
    <div key={match.id}>
      <p><NavLink className="main-content-link" to={`/matches/${match.id}`}>Round of {match.round}</NavLink></p>
    </div>
  )

  return (
    <div className="main-content-text">
      <h2>Matches List</h2>
      {renderMatches}
      <p><NavLink className="main-content-link" to={`/matches/add_match`}>Add Match</NavLink></p>
    </div>
  )
}

export default Matches
