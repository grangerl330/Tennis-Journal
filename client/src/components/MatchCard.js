import React from 'react';
import { withRouter } from 'react-router'

const MatchCard = (props) => {
  var matchId = parseInt(props.id)
  var match = props.currentMatch(matchId)

  const handleOnSubmit = event => {
    event.preventDefault()

    props.deleteMatchFromDatabase(matchId)
    props.history.push('/matches/add_match')
  }

  if(match) {
    return (
      <div className="match-card">
        <h2>Round of {match.round}</h2>
        <p>Result: {match.result}</p>
        <p>Score: {match.score}</p>
        <p>Date: {match.date}</p>
        <p>Time: {match.time}</p>
        <p>Notes: {match.notes}</p>
        <form onSubmit={handleOnSubmit}>
          <input type="submit" value="Delete"/>
        </form>
      </div>
    )
  } else {
    return <h3>Loading...</h3>
  }

}

export default withRouter(MatchCard)
