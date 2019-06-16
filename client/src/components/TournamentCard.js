import React from 'react';

const TournamentCard = (props) => {
  var tournamentId = parseInt(props.id)
  var tournament = props.currentTournament(tournamentId)

  if(tournament) {
    return (
      <div className="tournament-card">
        <h2>Tournament Card</h2>
        {tournament.title}
      </div>
    )
  } else {
    return <h3>Loading...</h3>
  }

}

export default TournamentCard
