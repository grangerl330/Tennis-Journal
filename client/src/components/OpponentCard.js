import React from 'react';
import { withRouter } from 'react-router'

const OpponentCard = (props) => {
  var opponentId = parseInt(props.id)
  var opponent = props.currentOpponent(opponentId)

  if(opponent) {
    return (
      <div className="main-content-text">
        <h2>{opponent.first_name} {opponent.last_name}</h2>
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
