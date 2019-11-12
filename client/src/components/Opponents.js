import React from 'react';
import { NavLink } from 'react-router-dom'

const Opponents = (props) => {
  const renderOpponents = props.opponents.map(opponent =>
    <div className="col-auto px-0 mb-3" key={opponent.id}>
      <div className="card card-tournament border border-secondary">
        <NavLink className="card-block stretched-link text-decoration-none text-dark h-100" to={`/opponents/view/${opponent.id}`}>
          <div className="card-body h-100 text-center">
              <h5 className="card-text">{opponent.first_name} {opponent.last_name}</h5>
          </div>
        </NavLink>
      </div>
    </div>
  )

  const message = () => {
    if(!props.opponents.length > 0){
      return (
        <div className="message-display">
          <p>* This list will populate automatically when a new match is added and opponent information is entered</p>
          <p>Add a new match by clicking the plus icon under "Matches" on a Tournament's view page</p>
        </div>
      )
    }
  }

  return (
    <section id="opponents-page">
      <div className="container-fluid py-2 bg-info text-white mb-4">
        <div className="row">
          <div className="col text-center">
            <h1>Opponents</h1>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="card-deck mt-4 d-flex justify-content-center">
          {message()}
          {renderOpponents}
        </div>
      </div>
    </section>
  )
}

export default Opponents
