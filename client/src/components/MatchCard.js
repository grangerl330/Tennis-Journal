import React from 'react';
import moment from 'moment'
import MatchForm from './MatchForm'
import { NavLink, Route } from 'react-router-dom'
import { withRouter } from 'react-router'

const MatchCard = (props) => {
  var matchId = parseInt(props.id)
  var currentMatch = props.currentMatch(matchId)

  const handleOnSubmit = event => {
    event.preventDefault()

    props.deleteMatchFromDatabase(matchId)
    props.history.push('/matches')
  }

  if(currentMatch) {
    return (
      <div className="main-content-text">
        <h2>Round of {currentMatch.round}</h2>
        <NavLink to={`/matches/view/${currentMatch.id}/edit`}>Edit</NavLink>
        <p>Result: {currentMatch.result}</p>
        <p>Score: {currentMatch.score}</p>
        <p>Date: {moment(currentMatch.date).format('MM/DD/YYYY')}</p>
        <p>Time: {moment(currentMatch.time).format('hh:mm a')}</p>
        <p>Notes: {currentMatch.notes}</p>
        <form onSubmit={handleOnSubmit}>
          <input type="submit" value="Delete"/>
        </form>
        <Route path='/matches/view/:matchId/edit' render={() => <MatchForm currentMatch={currentMatch} sendMatchToDatabase={props.editMatchInDatabase} edit="edit"/>} />
      </div>
    )
  } else {
    return <h3>Loading...</h3>
  }

}

export default withRouter(MatchCard)
