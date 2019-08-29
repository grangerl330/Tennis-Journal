import React from 'react';
import moment from 'moment'
import MatchForm from './MatchForm'
import deleteBin from '../images/delete-bin.png'
import editPencil from '../images/edit-pencil.png'
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

  const deleteMatch = event => {
    props.deleteMatchFromDatabase(matchId)
    props.history.push('/matches')
  }

  if(currentMatch) {
    var tournamentMatches = props.findTournamentMatches(props.matches, currentMatch.tournament.id)

    return (
      <div className="main-content-text">
        <div className="title-display">
          <h2>{match_round_display(currentMatch)}</h2>
          <NavLink to={`/matches/view/${currentMatch.id}/edit`} className="edit-icon"><img src={editPencil} alt="Edit Match"/></NavLink>
          <img src={deleteBin} alt="Delete Match" className="delete-icon" onClick={() => { if(window.confirm('Are you sure you want to delete this match?')) deleteMatch()}} />
        </div>
        <NavLink to={`/tournaments/view/${currentMatch.tournament.id}`} className="match-tournament-link">{currentMatch.tournament.title}</NavLink>
        <p><b>vs:</b> <NavLink to={`/opponents/view/${currentMatch.opponent.id}`} className="main-content-link">{currentMatch.opponent.first_name} {currentMatch.opponent.last_name}</NavLink></p>
        <p><b>Result:</b> {currentMatch.result}</p>
        <p><b>Score:</b> {currentMatch.score}</p>
        <p><b>Date:</b> {moment(currentMatch.date).format('MM/DD/YYYY')}</p>
        <p><b>Time:</b> {moment.utc(currentMatch.time).format('hh:mm a')}</p>
        <p><b>Notes:</b> {currentMatch.notes}</p>
        <Route path='/matches/view/:matchId/edit' render={() => <MatchForm currentMatch={currentMatch} sendMatchToDatabase={props.editMatchInDatabase} matches={tournamentMatches} edit="edit"/>} />
      </div>
    )
  } else {
    return <h3>Loading...</h3>
  }

}

export default withRouter(MatchCard)
