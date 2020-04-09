import React, { useEffect } from 'react';
import $ from 'jquery'
import moment from 'moment'
import TournamentMatchesTable from './components/TournamentMatchesTable'
import TournamentInfoModal from './components/modals/TournamentInfoModal'
import DeleteTournamentModal from './components/modals/DeleteTournamentModal'
import tournamentIcon from '../../images/tournament-icon.svg'
import menuDots from '../../images/menu-dots.svg'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router';

const TournamentPageContainer = (props) => {

  useEffect(() => {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover()
  })

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

  const renderSurfaceIcon = (surface) => {
    return (
      <span data-toggle="tooltip" data-placement="top" title={surface}>
        <i className={`fas fa-circle fa-lg ${surface.toLowerCase()}-court`}></i>
      </span>
    )
  }

  if(tournament) {
    return (
      <section id="tournament-view-page">
        <div className="container-fluid p-0 background-light-grey">
          <div className="row py-4 background-light-grey text-green">
            <div className="col-10 px-0 mx-auto">
              <div className="row">
                <div className="col-1 px-0 text-center">
                  <img className="icon" src={tournamentIcon} alt="tournament" />
                </div>
                <div className="col-5 px-0 ml-2 mr-auto my-auto">
                  <h2 className="text-green">Tournaments</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row pb-4 background-light-grey text-green">
            <div className="col-10 px-0 mx-auto bg-white shadow-light-green rounded">
              <div className="row mt-5 justify-content-start ml-5">
                <div className="col-1">
                  <button className="border-0">
                    <i className="fas fa-chevron-left fa-2x text-green" onClick={props.history.goBack}></i>
                  </button>
                </div>
              </div>
              <div className="row mt-5 justify-content-start ml-5">
                <div className="col-10">
                  <h3 className="text-black">{tournament.title}</h3>
                </div>
                <div className="col-1 ml-auto mr-5">
                  <div className="dropdown text-center">
                    <button id="tournament" type="button" className="border-0 dropdown-toggle" data-toggle="dropdown">
                      <img className="icon-small" src={menuDots} alt="menu dots" />
                    </button>
                    <div className="dropdown-menu dropdown-menu-center border-white shadow-light-green rounded">
                      <button className="border-0" data-toggle="modal" data-target="#tournamentInfoModal">
                        <i className="fas fa-pencil-alt pr-2 my-auto fa-s text-green"></i> Edit
                      </button>
                      <button className="border-0 mt-3" data-toggle="modal" data-target="#deleteTournamentModal">
                        <i className="fas fa-trash pr-2 my-auto fa-s text-green"></i> Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-3 justify-content-start ml-5">
                <div className='col-2'>
                  <span className="text-green">{moment(tournament.start_date).format('MMMM D')} - {moment(tournament.end_date).format('D, YYYY')}</span>
                </div>
                <div className='col-3'>
                  <span className="text-black">{tournament.location}</span>
                </div>
              </div>
              <div className="row mt-3 ml-5 pr-0 justify-content-start">
                <div className="col-2 text-grey">
                  <div className="row mt-3">
                    <div className="col">
                      <span>Division</span>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col">
                      <span>Surface</span>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col">
                      <span>Draw Size</span>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col">
                      <span>Points</span>
                    </div>
                  </div>
                </div>
                <div className="col-2 pl-0 text-black">
                  <div className="row mt-3">
                    <div className="col">
                      <span>{tournament.age_category}</span>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col">
                      <span>{renderSurfaceIcon(tournament.surface)}</span>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col">
                      <span>{tournament.draw_size}</span>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col">
                      <span>{tournament.points}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-3 ml-5 pr-0 justify-content-start">
                <div className="col-11">
                  <hr className="green-line" />
                </div>
              </div>
              <div className="row mt-3 ml-5 pr-0 justify-content-start">
                <div className="col-11">
                  <h4 className="text-black">Matches</h4>
                </div>
              </div>
              <div className="row mt-3 mb-5 ml-5 pr-0">
                <TournamentMatchesTable matches={props.matches} />
              </div>
            </div>
          </div>
        </div>

        <TournamentInfoModal tournament={tournament}/>
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

export default withRouter(TournamentPageContainer)
