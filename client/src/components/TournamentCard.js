import React from 'react';
import moment from 'moment'
import MatchForm from './MatchForm'
import { NavLink, Route } from 'react-router-dom'
import { withRouter } from 'react-router';

const TournamentCard = (props) => {
  var tournamentId = parseInt(props.id)
  var tournament = props.currentTournament(tournamentId)

  const handleOnSubmit = event => {
    event.preventDefault()

    props.deleteTournamentFromDatabase(tournamentId)
    props.history.push('/tournaments/add_tournament')
  }

  const renderMatches = props.matches.map(match =>
    <div key={match.id}>
      <p><NavLink className="main-content-link" to={`/matches/${match.id}`}>Round of {match.round}</NavLink></p>
    </div>
  )

  if(tournament) {
    return (
      <div className="main-content-text">
        <h2>{tournament.title}</h2>
        <p>Start Date: {moment(tournament.start_date).format('MM/DD/YYYY')}</p>
        <p>End Date: {moment(tournament.end_date).format('MM/DD/YYYY')}</p>
        <p>Location: {tournament.location}</p>
        <p>Surface: {tournament.surface}</p>
        <p>Age Category: {tournament.age_category}</p>
        <p>Draw Size: {tournament.draw_size}</p>
        <p>Points: {tournament.points}</p>
        <form onSubmit={handleOnSubmit}>
          <input type="submit" value="Delete"/>
        </form>
        <div className="tournament-matches-list">
          <h2>Matches</h2>
          {renderMatches}
        </div>
        <NavLink to={`/tournaments/${tournament.id}/add_match`}>Add Match</NavLink>
        <Route path='/tournaments/:tournamentId/add_match' render={() => <MatchForm tournamentId={tournament.id} addMatchToDatabase={props.addMatchToDatabase}/>} />
      </div>
    )
  } else {
    return <h3>Loading...</h3>
  }

}

export default withRouter(TournamentCard)
