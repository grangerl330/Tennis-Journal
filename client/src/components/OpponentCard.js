import React from 'react';
import OpponentForm from './OpponentForm'
import { NavLink, Route } from 'react-router-dom'
import { withRouter } from 'react-router'

const OpponentCard = (props) => {
  var opponentId = parseInt(props.id)
  var opponent = props.currentOpponent(opponentId)

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

  if(opponent) {
    return (
      <div className="main-content-text">
        <h2>{opponent.first_name} {opponent.last_name}</h2>
        <p>
          <NavLink to={`/tournaments/view/${opponent.match.tournament.id}`} className="main-content-link">{opponent.match.tournament.title}</NavLink>
          -
          <NavLink to={`/matches/view/${opponent.match.id}`} className="main-content-link">{match_round_display(opponent.match)}</NavLink>
        </p>
        <p><b>Age:</b> {opponent.age}</p>
        <p><b>Plays:</b> {opponent.handedness} handed</p>
        <p><b>UTR:</b> {opponent.utr}</p>
        <p><b>Notes:</b> {opponent.notes}</p>
        <p><NavLink to={`/opponents/view/${opponent.id}/edit`} className="button">Edit</NavLink></p>
        <Route path='/opponents/view/:opponentId/edit' render={() => <OpponentForm editOpponentInDatabase={props.editOpponentInDatabase} opponent={opponent} />} />
      </div>
    )
  } else {
    return <h3>Loading...</h3>
  }

}

export default withRouter(OpponentCard)
