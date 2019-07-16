import React from 'react';
import { NavLink } from 'react-router-dom'

const Tournaments = (props) => {
    const renderTournaments = props.tournaments.map(tournament =>
      <div key={tournament.id}>
        <p><NavLink className="main-content-link" to={`/tournaments/${tournament.id}`}>{tournament.title}</NavLink></p>
      </div>
    )

    return (
      <div>
        <h2>Tournaments List</h2>
        {renderTournaments}
        <p><NavLink className="main-content-link" to={`/tournaments/add_tournament`}>Add Tournament</NavLink></p>
      </div>
    )
}

export default Tournaments
