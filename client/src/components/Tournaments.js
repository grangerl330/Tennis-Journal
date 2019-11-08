import React from 'react';
import moment from 'moment'
import { NavLink } from 'react-router-dom'
import TournamentFormModal from './TournamentFormModal'

const Tournaments = (props) => {
    const sortedTournaments = props.tournaments.sort(function(a,b) {return moment(a.start_date) - moment(b.start_date)})

    const renderTournaments = sortedTournaments.map(tournament =>
      <div className="col-md-2 mb-4" key={tournament.id}>
        <div className="card card-tournament d-flex border border-secondary">
          <NavLink className="card-block stretched-link text-decoration-none text-dark h-100" to={`/tournaments/${tournament.id}`}>
            <div className="card-body d-flex align-items-center justify-content-center h-100">
                <p className="card-text text-center">{tournament.title} {moment(tournament.start_date).format('MM/DD/YYYY')}</p>
            </div>
          </NavLink>
        </div>
      </div>
    )

    return (
      <section id="tournaments-page">
        <div className="container-fluid py-2 bg-info text-white mb-4">
          <div className="row">
            <div className="col text-center">
              <h1>
                <i className="fas fa-trophy"></i> Tournaments
              </h1>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row justify-content-center mt-4">
            <div className="col-md-3">
              <button className="btn btn-dark btn-block" data-toggle="modal" data-target="#tournamentFormModal">
                <i className="fas fa-plus"></i> Add Tournament
              </button>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row justify-content-center mt-4">
            {renderTournaments}
          </div>
        </div>
        <TournamentFormModal sendTournamentToDatabase={props.addTournamentToDatabase} add="add"/>
      </section>
    )
}

export default Tournaments
