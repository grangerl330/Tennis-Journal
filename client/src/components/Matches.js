import React from 'react';
import { NavLink } from 'react-router-dom'

const Matches = (props) => {

  const renderMatches = props.matches.map(match =>
    <div key={match.id}>
      <p><NavLink className="sidebarlink" to={`/matches/${match.id}`}>Round of {match.round}</NavLink></p>
    </div>
  )

  return (
    <div>
      <h2>Matches</h2>
      {renderMatches}
    </div>
  )
}

export default Matches
