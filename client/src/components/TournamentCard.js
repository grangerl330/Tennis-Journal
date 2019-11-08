import React from 'react';
import moment from 'moment'
import MatchForm from './MatchForm'
import TournamentFormModal from './TournamentFormModal'
import DeleteTournamentModal from './DeleteTournamentModal'
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
      <section id="tournaments-page">
        <div className="container-fluid py-2 bg-info text-white mb-4">
          <div className="row">
            <div className="col text-center">
              <h1>
                <i className="fas fa-trophy"></i> {tournament.title}
              </h1>
            </div>
          </div>
        </div>

        <div className="container-fluid px-4">
          <div className="row justify-content-center mt-2">
            <div className="col-md-2">
              <p><b>Dates:</b> {moment(tournament.start_date).format('MM/DD/YYYY')} - {moment(tournament.end_date).format('MM/DD/YYYY')}</p>
            </div>
            <div className="col-md-2">
              <p><b>Location:</b> {tournament.location}</p>
            </div>
            <div className="col-md-2">
              <p><b>Surface:</b> {tournament.surface}</p>
            </div>
            <div className="col-md-2">
              <p><b>Age Category:</b> {tournament.age_category}</p>
            </div>
            <div className="col-md-2">
              <p><b>Draw Size:</b> {tournament.draw_size}</p>
            </div>
            <div className="col-md-2">
              <p><b>Points Gained:</b> {tournament.points}</p>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-2">
              <button className="btn" data-toggle="modal" data-target="#tournamentFormModal">
                <i className="fas fa-edit"></i><span className="ml-2 font-italic">Edit Tournament</span>
              </button>
            </div>
            <div className="col-md-3">
              <button className="btn btn-danger btn-block" data-toggle="modal" data-target="#deleteTournamentModal">
                <i className="fas fa-trash"></i> Delete Tournament
              </button>
            </div>
          </div>
        </div>
          <div className="tournament-matches-list">
            <h2>Matches</h2>
            {renderMatches}
          </div>
          <NavLink to={`/tournaments/view/${tournament.id}/add_match`}><img src={plusIcon} alt="Add Tournament"/></NavLink>
          <Route path='/tournaments/view/:tournamentId/add_match' render={() => <MatchForm tournamentId={tournament.id} sendMatchToDatabase={props.addMatchToDatabase} matches={props.matches} tournament={tournament} add="add"/>} />
          <TournamentFormModal tournamentId={tournament.id} sendTournamentToDatabase={props.editTournamentInDatabase} tournament={tournament} edit="edit"/>
          <DeleteTournamentModal tournamentId={tournament.id} deleteTournament={deleteTournament} />
      </section>
    )
  } else {
    return <h3>Loading...</h3>
  }
}

export default withRouter(TournamentCard)
