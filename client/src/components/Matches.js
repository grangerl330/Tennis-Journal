import React from 'react'

const Matches = ({ matches }) => {
  const renderMatches = matches.map(match =>
    <p key={match.id}>
      Round of {match.round}
      <ul>
        <li>Result: {match.result}</li>
        <li>Score: {match.score}</li>
      </ul>
    </p>
  )

  return(
    <div>
      {renderMatches}
    </div>
  )
}

export default Matches
