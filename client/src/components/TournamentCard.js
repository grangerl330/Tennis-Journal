import React from 'react';

const TournamentCard = (props) => {
  var tournamentId = parseInt(props.id)
  var tournament = props.currentTournament(tournamentId)

  if(tournament) {
    return (
      <div className="tournament-card">
        <h2>Tournament Card</h2>
        <p>Start Date: {tournament.start_date}</p>
        <p>End Date: {tournament.end_date}</p>
        <p>Location: {tournament.location}</p>
        <p>Surface: {tournament.surface}</p>
        <p>Age Category: {tournament.age_category}</p>
        <p>Draw Size: {tournament.draw_size}</p>
        <p>Points: {tournament.points}</p>
      </div>
    )
  } else {
    return <h3>Loading...</h3>
  }

}

export default TournamentCard
