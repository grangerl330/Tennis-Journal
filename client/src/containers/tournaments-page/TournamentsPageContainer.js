import React from 'react';
import tournamentIcon from '../../images/tournament-icon.png'
import moment from 'moment'
import TournamentsTable from './components/TournamentsTable'
import { NavLink } from 'react-router-dom'

const TournamentsPageContainer = (props) => {
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
          <div className="row mt-5">
            <TournamentsTable tournaments={props.tournaments}/>
          </div>
        </div>
      </section>
    )
}

export default TournamentsPageContainer
