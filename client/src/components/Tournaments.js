import React from 'react';
import moment from 'moment'
import { NavLink } from 'react-router-dom'
import TournamentFormModal from './TournamentFormModal'

const Tournaments = (props) => {
    const sortedTournaments = props.tournaments.sort(function(a,b) {return moment(a.start_date) - moment(b.start_date)})

    const renderTournaments = sortedTournaments.map(tournament =>
      <div className="col-auto px-0 mb-3" key={tournament.id}>
        <div className="card card-tournament pt-3 border border-secondary" key={tournament.id}>
          <NavLink className="card-block stretched-link text-decoration-none text-dark h-100" to={`/tournaments/${tournament.id}`}>
            <div className="card-body text-center">
                <h5 className="card-text">{tournament.title}</h5>
                <p className="card-text">{moment(tournament.start_date).format('MM/DD/YYYY')}</p>
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
              <h1>Tournaments</h1>
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
          <div className="card-deck mt-4 d-flex justify-content-center">
            {renderTournaments}
          </div>
        </div>
        <TournamentFormModal sendTournamentToDatabase={props.addTournamentToDatabase} add="add"/>
      </section>
    )
}

export default Tournaments
