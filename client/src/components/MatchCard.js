import React from 'react';
import moment from 'moment'
import MatchForm from './MatchForm'
import { NavLink, Route } from 'react-router-dom'
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
        <NavLink to={`/matches/view/${match.id}/edit`}>Edit</NavLink>
        <p>Result: {match.result}</p>
        <p>Score: {match.score}</p>
        <p>Date: {moment(match.date).format('MM/DD/YYYY')}</p>
        <p>Time: {moment(match.time).format('hh:mm a')}</p>
        <p>Notes: {match.notes}</p>
        <form onSubmit={handleOnSubmit}>
          <input type="submit" value="Delete"/>
        </form>
        <Route path='/matches/view/:matchId/edit' render={() => <MatchForm matchId={match.id} sendMatchToDatabase={props.editMatchInDatabase} edit="edit"/>} />
      </div>
    )
  } else {
    return <h3>Loading...</h3>
  }

}

export default withRouter(MatchCard)
