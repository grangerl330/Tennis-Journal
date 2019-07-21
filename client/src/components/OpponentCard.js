import React from 'react';
import { NavLink } from 'react-router-dom'
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
        <NavLink to={`/opponents/view/${opponent.id}/edit`}>Edit</NavLink>
        <p>
          <NavLink to={`/tournaments/view/${opponent.match.tournament.id}`}>{opponent.match.tournament.title}</NavLink>
          -
          <NavLink to={`/matches/view/${opponent.match.id}`}>{match_round_display(opponent.match)}</NavLink>
        </p>
        <p>Age: {opponent.age}</p>
        <p>Plays: {opponent.handedness} handed</p>
        <p>UTR: {opponent.utr}</p>
        <p>Notes: {opponent.notes}</p>
      </div>
    )
  } else {
    return <h3>Loading...</h3>
  }

}

export default withRouter(OpponentCard)
