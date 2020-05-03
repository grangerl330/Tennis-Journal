import React, { useState } from 'react';
import tournamentIcon from '../images/tournament-icon.svg'
import searchIcon from '../images/search.svg'
import TournamentsTable from '../components/tournaments-page/TournamentsTable'
import { NavLink } from 'react-router-dom'

const TournamentsPage = (props) => {

    const[search, setSearch] = useState("")

    const handleOnChange = event => {
      const {value} = event.target

      setSearch(value)
    }

    const filteredTournaments = () => {
      if(search === "") {
        return props.tournaments
      } else {
        return (
          props.tournaments.filter(tournament =>
            Object.keys(tournament).some(key => tournament[key].toString().toLowerCase().includes(search.toLowerCase()))
          )
        )
      }
    }

    return (
      <section id="tournaments-page">
        <div className="container-fluid p-0 background-light-grey">
          <div className="row py-4 background-light-grey text-green">
            <div className="col-10 px-0 mx-auto">
              <div className="row">
                <div className="col-1 ml-3 ml-md-0 px-0 text-center">
                  <img className="icon" src={tournamentIcon} alt="tournament" />
                </div>
                <div className="col-5 px-0 ml-5 ml-md-2 mr-auto my-auto">
                  <h2 className="text-green">Tournaments</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row pb-4 background-light-grey text-green">
            <div className="col-10 px-0 mx-auto bg-white shadow-light-green rounded">
              <div className="row mt-4 pt-3 justify-content-center">
                <div className="col-8 col-md-3 mt-4 ml-md-5 mr-md-auto">
                  <div className="input-group">
                    <input className="search-input form-control py-2 pl-4 border-right-0 border" type="text" name="search" value={search} onChange={handleOnChange} placeholder="Search"/>
                    <span className="input-group-append">
                      <div className="input-group-text search-input-addon bg-transparent"><img src={searchIcon} alt="search" /></div>
                    </span>
                  </div>
                </div>
                <div className="col-8 col-md-3 text-center text-md-right mx-auto mr-md-5 ml-md-auto order-first order-md-last">
                  <NavLink to="/tournaments/add" className="text-white btn btn-green px-4">
                    Add Tournament
                  </NavLink>
                </div>
              </div>
              <div className="row mt-5 justify-content-center desktop-view">
                <div className="col-11">
                  <TournamentsTable tournaments={filteredTournaments()} />
                </div>
              </div>
              <div className="row mt-3 justify-content-center mobile-view">
                <div className="col-11">
                  <TournamentsTable tournaments={filteredTournaments()} mobile={true} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default TournamentsPage
