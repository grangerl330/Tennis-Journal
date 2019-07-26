import React from 'react';
import { NavLink } from 'react-router-dom'

const Opponents = (props) => {
  const renderOpponents = props.opponents.map(opponent =>
    <div key={opponent.id}>
      <p><NavLink className="main-content-link" to={`/opponents/view/${opponent.id}`}>{opponent.first_name} {opponent.last_name}</NavLink></p>
    </div>
  )

  const message = () => {
    if(!props.opponents.length > 0){
      return (
        <div className="message-display">
          <p>* This list will populate automatically when a new match is added</p>
          <p>Add a new match by clicking the Add Match button on an individual Tournament view page</p>
        </div>
      )
    }
  }

  return (
    <div className="main-content-text">
      {renderOpponents}
      {message()}
    </div>
  )
}

export default Opponents
