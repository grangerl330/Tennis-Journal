import React from 'react';

const MatchCard = (props) => {
  var matchId = parseInt(props.id)
  var match = props.currentMatch(matchId)

  if(match) {
    return (
      <div className="match-card">
        <h2>Match Card</h2>
        <p>Round of {match.round}</p>
        <p>Result: {match.result}</p>
        <p>Score: {match.score}</p>
        <p>Date: {match.date}</p>
        <p>Time: {match.time}</p>
        <p>Notes: {match.notes}</p>
      </div>
    )
  } else {
    return <h3>Loading...</h3>
  }

}

export default MatchCard
