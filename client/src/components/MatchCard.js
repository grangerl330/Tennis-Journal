import React from 'react';
import moment from 'moment'
import MatchForm from './MatchForm'
import { NavLink, Route } from 'react-router-dom'
import { withRouter } from 'react-router'

const MatchCard = (props) => {
  var matchId = parseInt(props.id)
  var currentMatch = props.currentMatch(matchId)

  const match_round_display = (match) => {
    if(match.round > 8){
      return `Round of ${match.round}`
    } else if(match.round === 8){
      return "Quarterfinal"
    } else if(match.round === 4){
      return "Semifinal"
    } else if(match.round === 2){
      return "Final"
    }
  }

  const handleOnSubmit = event => {
    event.preventDefault()

    props.deleteMatchFromDatabase(matchId)
    props.history.push('/matches')
  }

  if(currentMatch) {
    var tournamentMatches = props.findTournamentMatches(props.matches, currentMatch.tournament.id)

    return (
      <div className="main-content-text">
        <h2>{match_round_display(currentMatch)}</h2>
        <NavLink to={`/tournaments/view/${currentMatch.tournament.id}`} className="match-tournament-link">{currentMatch.tournament.title}</NavLink>
        <NavLink to={`/matches/view/${currentMatch.id}/edit`} className="button">Edit</NavLink>
        <p>vs: <NavLink to={`/opponents/view/${currentMatch.opponent.id}`}>{currentMatch.opponent.first_name} {currentMatch.opponent.last_name}</NavLink></p>
        <p>Result: {currentMatch.result}</p>
        <p>Score: {currentMatch.score}</p>
        <p>Date: {moment(currentMatch.date).format('MM/DD/YYYY')}</p>
        <p>Time: {moment.utc(currentMatch.time).format('hh:mm a')}</p>
        <p>Notes: {currentMatch.notes}</p>
        <form onSubmit={handleOnSubmit}>
          <input type="submit" value="Delete" className="button"/>
        </form>
        <Route path='/matches/view/:matchId/edit' render={() => <MatchForm currentMatch={currentMatch} sendMatchToDatabase={props.editMatchInDatabase} matches={tournamentMatches} edit="edit"/>} />
      </div>
    )
  } else {
    return <h3>Loading...</h3>
  }

}

export default withRouter(MatchCard)
