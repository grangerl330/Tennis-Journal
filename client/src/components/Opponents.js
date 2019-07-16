import React from 'react';
import { NavLink } from 'react-router-dom'

const Opponents = (props) => {

  const renderOpponents = props.opponents.map(opponent =>
    <div key={opponent.id}>
      <p><NavLink className="main-content-link" to={`/opponents/${opponent.id}`}>{opponent.first_name} {opponent.last_name}</NavLink></p>
    </div>
  )

  return (
    <div className="main-content-text">
      <h2>Opponents</h2>
      {renderOpponents}
    </div>
  )
}

export default Opponents
