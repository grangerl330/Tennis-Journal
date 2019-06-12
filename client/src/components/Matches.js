import React from 'react'

const Matches = ({ matches }) => {
  const renderMatches = matches.map(match =>
    <div key={match.id}>
      Round of {match.round}
      <ul>
        <li>Result: {match.result}</li>
        <li>Score: {match.score}</li>
      </ul>
    </div>
  )

  return(
    <div>
      {renderMatches}
    </div>
  )
}

export default Matches
