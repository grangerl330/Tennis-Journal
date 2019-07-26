import React from 'react';
import moment from 'moment'
import MatchForm from './MatchForm'
import TournamentForm from './TournamentForm'
import { NavLink, Route } from 'react-router-dom'
import { withRouter } from 'react-router';

const TournamentCard = (props) => {
  var tournamentId = parseInt(props.id)
  var tournament = props.currentTournament(tournamentId)

  const handleOnSubmit = event => {
    event.preventDefault()

    props.deleteTournamentFromDatabase(tournamentId)
    props.history.push('/tournaments')
  }

  const match_round_display = (match) => {
    if(match.round > 8){
      return `Round of ${match.round}`
    } else if(match.round === 8){
      return "Quarterfinal"
    } else if(match.round === 4){
      return "Semifinal"
    } else if(match.round === 2){
      return "Final"
    }
  }

  const renderMatches = props.matches.map(match =>
    <div key={match.id}>
      <p><NavLink className="main-content-link" to={`/matches/view/${match.id}`}>{match_round_display(match)}</NavLink></p>
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
        <p>Points Gained: {tournament.points}</p>
        <p><NavLink to={`/tournaments/view/${tournament.id}/edit`} className="button">Edit</NavLink></p>
        <form onSubmit={handleOnSubmit}>
          <input type="submit" value="Delete" className="button"/>
        </form>
        <div className="tournament-matches-list">
          <h2>Matches</h2>
          {renderMatches}
        </div>
        <NavLink to={`/tournaments/view/${tournament.id}/add_match`} className="button">Add Match</NavLink>
        <Route path='/tournaments/view/:tournamentId/add_match' render={() => <MatchForm tournamentId={tournament.id} sendMatchToDatabase={props.addMatchToDatabase} matches={props.matches} tournament={tournament} add="add"/>} />
        <Route path='/tournaments/view/:tournamentId/edit' render={() => <TournamentForm tournamentId={tournament.id} sendTournamentToDatabase={props.editTournamentInDatabase} tournament={tournament} edit="edit"/>} />
      </div>
    )
  } else {
    return <h3>Loading...</h3>
  }

}

export default withRouter(TournamentCard)
