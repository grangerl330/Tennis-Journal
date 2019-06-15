import React from 'react';

const Tournaments = (props) => {

    const renderTournaments = props.tournaments.map(tournament =>
      <div key={tournament.id}>
        <p>{tournament.title}</p>
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
