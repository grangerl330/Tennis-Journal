import React from 'react';

const MatchCard = (props) => {
  var matchId = parseInt(props.id)
  var match = props.currentMatch(matchId)

  if(match) {
    return (
      <div className="match-card">
        <h2>Match Card</h2>
        {match.round}
      </div>
    )
  } else {
    return <h3>Loading...</h3>
  }

}

export default MatchCard
