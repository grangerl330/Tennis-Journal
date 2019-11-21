import React from 'react';
import moment from 'moment'
import TournamentInfoModal from '../modals/Tournament/TournamentInfoModal'
import DeleteTournamentModal from '../modals/DeleteTournamentModal'
import tennisCourtIcon from '../../images/tennis-court-icon.png'
import tournamentDrawIcon from '../../images/tournament-draw-icon.png'
import { NavLink } from 'react-router-dom'
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
    <div className="col-auto px-0 mb-3" key={match.id}>
      <div className="card card-tournament border border-secondary">
        <NavLink className="card-block stretched-link text-decoration-none text-dark h-100" to={`/matches/${match.id}`}>
          <div className="card-body text-center">
              <h6 className="card-text">{match_round_display(match)}</h6>
          </div>
        </NavLink>
      </div>
    </div>
  )

  if(tournament) {
    return (
      <section id="tournament-card-page">
        <div className="container-fluid py-2 bg-info mb-4">
          <div className="row">
            <div className="col text-white text-center">
              <h1>{tournament.title}</h1>
            </div>
          </div>
        </div>

        <div className="container-fluid px-4">
          <div className="row justify-content-center mt-2">
            <div className="col-md-2 pl-md-5 pr-md-0 text-center">
              <div className="row justify-content-center">
                <div className="col-5">
                  <i className="fas fa-calendar-alt fa-3x home-icon"></i>
                </div>
                <div className="col-7">
                  <div className="row">
                    <h6 className="font-italic text-info">Dates</h6>
                  </div>
                  <div className="row">
                    <h6 className="text-left">{moment(tournament.start_date).format('MM/DD/YY')} - {moment(tournament.end_date).format('MM/DD/YY')}</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2 pl-md-5 pr-md-0 text-center">
              <div className="row justify-content-center">
                <div className="col-5">
                  <i className="fas fa-map-marker-alt fa-3x home-icon"></i>
                </div>
                <div className="col-7">
                  <div className="row">
                    <h6 className="font-italic text-info">Location</h6>
                  </div>
                  <div className="row">
                    <h6>{tournament.location}</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2 pl-md-5 pr-md-0 text-center">
              <div className="row justify-content-center">
                <div className="col-5">
                  <i className="fas fa-folder-open fa-3x home-icon"></i>
                </div>
                <div className="col-7">
                  <div className="row">
                    <h6 className="font-italic text-info">Division</h6>
                  </div>
                  <div className="row">
                    <h6>{tournament.age_category}</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2 pl-md-5 pr-md-0 text-center">
              <div className="row justify-content-center">
                <div className="col-5">
                  <img src={tennisCourtIcon} alt="age-icon"/>
                </div>
                <div className="col-7">
                  <div className="row">
                    <h6 className="font-italic text-info">Surface</h6>
                  </div>
                  <div className="row">
                    <h6>{tournament.surface}</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2 pl-md-5 pr-md-0 text-center">
              <div className="row justify-content-center">
                <div className="col-5">
                  <img src={tournamentDrawIcon} alt="age-icon"/>
                </div>
                <div className="col-7">
                  <div className="row">
                    <h6 className="font-italic text-info">Draw Size</h6>
                  </div>
                  <div className="row">
                    <h6>{tournament.draw_size}</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2 pl-md-5 pr-md-0 text-center">
              <div className="row justify-content-center">
                <div className="col-5">
                  <i className="far fa-dot-circle fa-3x home-icon"></i>
                </div>
                <div className="col-7">
                  <div className="row">
                    <h6 className="font-italic text-info">Points</h6>
                  </div>
                  <div className="row">
                    <h6>{tournament.points}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row mt-3 mb-3 justify-content-center">
            <div className="col-md-2">
              <button className="btn btn-info btn-block" data-toggle="modal" data-target="#tournamentInfoModal">
                <i className="fas fa-edit"></i> Edit Tournament
              </button>
            </div>
            <div className="col-md-2">
              <button className="btn btn-danger btn-block" data-toggle="modal" data-target="#deleteTournamentModal">
                <i className="fas fa-trash"></i> Delete Tournament
              </button>
            </div>
          </div>
        </div>

        <div className="container border rounded pb-4 mt-5 mb-4">
          <div className="row justify-content-center text-white bg-secondary">
            <div className="col-md-2">
              <h1>Matches</h1>
            </div>
          </div>
          <div className="row ml-2 justify-content-center">
            <div className="card-deck mt-4">
              {renderMatches}
            </div>
          </div>
          <div className="row mt-4 justify-content-center">
            <div className="col-md-2">
              <NavLink to={`/tournaments/${tournament.id}/add`} className="btn btn-dark btn-block">
                <i className="fas fa-plus"></i> Add Match
              </NavLink>
            </div>
          </div>
        </div>

          <TournamentInfoModal tournamentId={tournament.id} sendTournamentToDatabase={props.editTournamentInDatabase} tournament={tournament} />
          <DeleteTournamentModal tournamentId={tournament.id} deleteTournament={deleteTournament} />
      </section>
    )
  } else {
    return (
      <section id="tournament-card-page">
        <div className="container-fluid mt-4 text-danger">
          <h3>Tournament Not Available</h3>
        </div>
      </section>
    )
  }
}

export default withRouter(TournamentCard)
