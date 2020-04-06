import React from 'react';
import tournamentIcon from '../../images/tournament-icon.png'
import moment from 'moment'
import { NavLink } from 'react-router-dom'

const TournamentsPageContainer = (props) => {
    const sortedTournaments = props.tournaments.sort(function(a,b) {return moment(a.start_date) - moment(b.start_date)})

    const renderTournaments = sortedTournaments.map(tournament =>
      <div className="col-auto px-0 mb-3" key={tournament.id}>
        <div className="card card-tournament border border-secondary">
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
        <div className="container-fluid">
          <div className="row py-4 background-light-grey text-green">
            <div className="col-1 px-0 ml-4 text-center">
              <img src={tournamentIcon} alt="tournament" />
            </div>
            <div className="col-5 px-0 ml-3 mr-auto my-auto">
              <h2 className="text-green">Tournaments</h2>
            </div>
          </div>
          <div className="row mt-4 pt-3 justify-content-center">
            <div className="col-3 ml-5 mr-auto">
              <div className="input-group">
                <input id="example-search-input" className="search-input form-control py-2 pl-4 border-right-0 border" type="text" placeholder="Search"/>
                <span className="input-group-append">
                  <div className="input-group-text search-input-addon bg-transparent"><i className="fa fa-search"></i></div>
                </span>
              </div>
            </div>
            <div className="col-2 mr-5 ml-auto">
              <button className="btn btn-green d-block px-4">
                <NavLink to="/tournaments/add" className="text-white">
                  Add Tournament
                </NavLink>
              </button>
            </div>
          </div>
          <div className="row justify-content-center mt-5">
            <div className="col-md-3">
              <NavLink to="/tournaments/add" className="btn btn-dark btn-block">
                <i className="fas fa-plus"></i> Add Tournament
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    )
}

export default TournamentsPageContainer
