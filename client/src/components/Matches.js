import React from 'react';

const Matches = (props) => {

  const renderMatches = props.matches.map(match =>
    <div key={match.id}>
      <p><b>Round of {match.round}</b></p>
      <p>Result: {match.result}</p>
      <p>Score: {match.score}</p>
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
