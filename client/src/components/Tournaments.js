import React from 'react';
import moment from 'moment'
import { NavLink } from 'react-router-dom'
import TournamentFormModal from './TournamentFormModal'

const Tournaments = (props) => {
    const sortedTournaments = props.tournaments.sort(function(a,b) {return moment(a.start_date) - moment(b.start_date)})

    const renderTournaments = sortedTournaments.map(tournament =>
      <div key={tournament.id}>
        <p><NavLink className="main-content-link" to={`/tournaments/view/${tournament.id}`}>{tournament.title}</NavLink></p>
      </div>
    )

    return (

      <section id="home-page">
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
              <button className="btn btn-dark btn-block" data-toggle="modal" data-target="#addTournamentModal">
                <i className="fas fa-plus"></i> Add Tournament
              </button>
            </div>
          </div>
        </div>

        {renderTournaments}
        <TournamentFormModal sendTournamentToDatabase={props.addTournamentToDatabase} add="add"/>
      </section>
    )
}

export default Tournaments
