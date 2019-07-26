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
      return <span className="message-display">* This list will populate automatically when a new match is added</span>
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
