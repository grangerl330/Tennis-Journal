import React from 'react';
import moment from 'moment'
import { withRouter } from 'react-router'

const MatchCard = (props) => {
  var matchId = parseInt(props.id)
  var match = props.currentMatch(matchId)

  const handleOnSubmit = event => {
    event.preventDefault()

    props.deleteMatchFromDatabase(matchId)
    props.history.push('/matches')
  }

  if(match) {
    return (
      <div className="main-content-text">
        <h2>Round of {match.round}</h2>
        <p>Result: {match.result}</p>
        <p>Score: {match.score}</p>
        <p>Date: {moment(match.date).format('MM/DD/YYYY')}</p>
        <p>Time: {moment(match.time).format('hh:mm a')}</p>
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
