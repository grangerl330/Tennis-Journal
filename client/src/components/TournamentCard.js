import React from 'react';
import moment from 'moment'
import TournamentDatesModal from './modals/TournamentDatesModal'
import TournamentLocationModal from './modals/TournamentLocationModal'
import TournamentDivisionModal from './modals/TournamentDivisionModal'
import TournamentSurfaceModal from './modals/TournamentSurfaceModal'
import TournamentDrawSizeModal from './modals/TournamentDrawSizeModal'
import TournamentPointsModal from './modals/TournamentPointsModal'
import TournamentTitleModal from './modals/TournamentTitleModal'
import DeleteTournamentModal from './DeleteTournamentModal'
import tennisCourtIcon from '../images/tennis-court-icon.png'
import tournamentDrawIcon from '../images/tournament-draw-icon.png'
import ageIcon from '../images/age-icon.png'
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
            <button className="btn w-100 px-0 text-white" data-toggle="modal" data-target="#tournamentTitleModal">
              <div className="col text-center">
                <h1>{tournament.title}</h1>
              </div>
            </button>
          </div>
        </div>

        <div className="container-fluid px-4">
          <div className="row justify-content-center mt-2">
            <div className="col-md-2">
              <button className="btn w-100 px-0" data-toggle="modal" data-target="#tournamentDatesModal">
                <div className="card card-stats text-center border-0">
                  <div className="card-body">
                    <div className="row justify-content-center">
                      <div className="col-3 col-md-6 px-0 pb-0 pt-2 text-left">
                        <i className="fas fa-calendar-alt fa-3x home-icon"></i>
                      </div>
                      <div className="col-6 mx-0 px-0">
                        <div className="row justify-content-center mx-0">
                          <h5 className="card-title">{moment(tournament.start_date).format('MM/DD/YY')} - {moment(tournament.end_date).format('MM/DD/YY')}</h5>
                        </div>
                        <div className="row justify-content-center mx-0">
                          <p className="card-text font-italic">Dates</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </div>
            <div className="col-md-2">
              <button className="btn w-100 px-0" data-toggle="modal" data-target="#tournamentLocationModal">
                <div className="card card-stats text-center border-0">
                    <div className="card-body">
                      <div className="row justify-content-center">
                        <div className="col-3 col-md-6 px-0 pb-0 pt-2 text-center">
                          <i className="fas fa-map-marker-alt fa-3x home-icon"></i>
                        </div>
                        <div className="col-6 mx-0 pl-4 px-lg-0">
                          <div className="row justify-content-center mx-0">
                            <h5 className="card-title">{tournament.location}</h5>
                          </div>
                          <div className="row justify-content-center mx-0">
                            <p className="card-text font-italic">Location</p>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
              </button>
            </div>
            <div className="col-md-2">
              <button className="btn w-100 px-0" data-toggle="modal" data-target="#tournamentDivisionModal">
                <div className="card card-stats text-center border-0">
                  <div className="card-body">
                    <div className="row justify-content-center">
                      <div className="col-3 col-md-6 px-0 pb-0 pt-2 text-center">
                        <img src={ageIcon} alt="age-icon"/>
                      </div>
                      <div className="col-6 mx-0 px-0">
                        <div className="row justify-content-center mx-0">
                          <h5 className="card-title">{tournament.age_category}</h5>
                        </div>
                        <div className="row justify-content-center mx-0">
                          <p className="card-text font-italic">Ages</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </div>
            <div className="col-md-2">
              <button className="btn w-100 px-0" data-toggle="modal" data-target="#tournamentSurfaceModal">
                <div className="card card-stats text-center border-0">
                    <div className="card-body">
                      <div className="row justify-content-center">
                        <div className="col-3 col-md-6 px-0 pb-2 pt-1 text-center">
                          <img src={tennisCourtIcon} alt="tennis-court-icon"/>
                        </div>
                        <div className="col-6 mx-0 pl-4 px-lg-0">
                          <div className="row justify-content-center mx-0">
                            <h5 className="card-title">{tournament.surface}</h5>
                          </div>
                          <div className="row justify-content-center mx-0">
                            <p className="card-text font-italic">Surface</p>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
              </button>
            </div>
            <div className="col-md-2">
              <button className="btn w-100 px-0" data-toggle="modal" data-target="#tournamentDrawSizeModal">
                <div className="card card-stats text-center border-0">
                  <div className="card-body">
                    <div className="row justify-content-center">
                    <div className="col-3 col-md-6 pt-2 px-0 text-right">
                      <img src={tournamentDrawIcon} alt="tournament-draw-icon"/>
                    </div>
                      <div className="col-6 mx-0 px-0">
                        <div className="row justify-content-center mx-0">
                          <h5 className="card-title">{tournament.draw_size}</h5>
                        </div>
                        <div className="row justify-content-center mx-0">
                          <p className="card-text font-italic">Draw Size</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </div>
            <div className="col-md-2">
              <button className="btn w-100 px-0" data-toggle="modal" data-target="#tournamentPointsModal">
                <div className="card card-stats text-center border-0">
                  <div className="card-body">
                    <div className="row justify-content-center">
                      <div className="col-3 col-md-6 px-0 pb-0 pt-2 text-right">
                        <i className="far fa-dot-circle fa-3x home-icon"></i>
                      </div>
                      <div className="col-6 mx-0 px-0">
                        <div className="row justify-content-center mx-0">
                          <h5 className="card-title">{tournament.points}</h5>
                        </div>
                        <div className="row justify-content-center mx-0">
                          <p className="card-text font-italic">Points</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="container-fluid my-5">
          <div className="row mt-4">
            <div className="col-md-2">
              <h1>Matches</h1>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-2">
              <NavLink to={`/tournaments/${tournament.id}/add`} className="btn btn-dark btn-block">
                <i className="fas fa-plus"></i> Add Match
              </NavLink>
            </div>
          </div>
        </div>

        <div className="container-fluid mb-3">
          <div className="card-deck mt-4">
            {renderMatches}
          </div>
        </div>

        <div className="container-fluid">
          <div className="row my-5 justify-content-center">
            <div className="col-md-3">
              <button className="btn btn-danger btn-block" data-toggle="modal" data-target="#deleteTournamentModal">
                <i className="fas fa-trash"></i> Delete Tournament
              </button>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row my-5">
          </div>
        </div>
          <TournamentDatesModal tournamentId={tournament.id} sendTournamentToDatabase={props.editTournamentInDatabase} tournament={tournament} />
          <TournamentLocationModal tournamentId={tournament.id} sendTournamentToDatabase={props.editTournamentInDatabase} tournament={tournament} />
          <TournamentDivisionModal tournamentId={tournament.id} sendTournamentToDatabase={props.editTournamentInDatabase} tournament={tournament} />
          <TournamentSurfaceModal tournamentId={tournament.id} sendTournamentToDatabase={props.editTournamentInDatabase} tournament={tournament} />
          <TournamentDrawSizeModal tournamentId={tournament.id} sendTournamentToDatabase={props.editTournamentInDatabase} tournament={tournament} />
          <TournamentPointsModal tournamentId={tournament.id} sendTournamentToDatabase={props.editTournamentInDatabase} tournament={tournament} />
          <TournamentTitleModal tournamentId={tournament.id} sendTournamentToDatabase={props.editTournamentInDatabase} tournament={tournament} />
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
