import React from 'react';
import moment from 'moment'
import MatchForm from './MatchForm'
import TournamentForm from './TournamentForm'
import { NavLink, Route } from 'react-router-dom'
import deleteBin from '../images/delete-bin.png'
import editPencil from '../images/edit-pencil.png'
import plusIcon from '../images/plus-icon.png'
import { withRouter } from 'react-router';

const TournamentCard = (props) => {
  var tournamentId = parseInt(props.id)
  var tournament = props.currentTournament(tournamentId)

  const deleteTournament = event => {
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
        <div className="title-display">
          <h2>{tournament.title}</h2>
          <NavLink to={`/tournaments/view/${tournament.id}/edit`} className="edit-icon"><img src={editPencil} alt="Edit Tournament"/></NavLink>
          <img src={deleteBin} alt="Delete Tournament" className="delete-icon" onClick={() => { if(window.confirm('Are you sure you want to delete this tournament?')) deleteTournament()}} />
        </div>
        <p><b>Dates:</b> {moment(tournament.start_date).format('MM/DD/YYYY')} - {moment(tournament.end_date).format('MM/DD/YYYY')}</p>
        <p><b>Location:</b> {tournament.location}</p>
        <p><b>Surface:</b> {tournament.surface}</p>
        <p><b>Age Category:</b> {tournament.age_category}</p>
        <p><b>Draw Size:</b> {tournament.draw_size}</p>
        <p><b>Points Gained:</b> {tournament.points}</p>
        <div className="tournament-matches-list">
          <h2>Matches</h2>
          {renderMatches}
        </div>
        <NavLink to={`/tournaments/view/${tournament.id}/add_match`}><img src={plusIcon} alt="Add Tournament"/></NavLink>
        <Route path='/tournaments/view/:tournamentId/add_match' render={() => <MatchForm tournamentId={tournament.id} sendMatchToDatabase={props.addMatchToDatabase} matches={props.matches} tournament={tournament} add="add"/>} />
        <Route path='/tournaments/view/:tournamentId/edit' render={() => <TournamentForm tournamentId={tournament.id} sendTournamentToDatabase={props.editTournamentInDatabase} tournament={tournament} edit="edit"/>} />
      </div>
    )
  } else {
    return <h3>Loading...</h3>
  }

}

export default withRouter(TournamentCard)
