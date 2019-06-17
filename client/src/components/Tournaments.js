import React from 'react';
import { NavLink } from 'react-router-dom'

const Tournaments = (props) => {

    const renderTournaments = props.tournaments.map(tournament =>
      <div key={tournament.id}>
        <p><NavLink className="sidebarlink" to={`/tournaments/${tournament.id}`}>{tournament.title}</NavLink></p>
      </div>
    )

    return (
      <div>
        <h2>Tournaments</h2>
        {renderTournaments}
      </div>
    )
}

export default Tournaments
