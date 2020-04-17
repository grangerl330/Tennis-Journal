import React, { useState } from 'react';
import tournamentIcon from '../../images/tournament-icon.svg'
import searchIcon from '../../images/search.svg'
import TournamentsTable from './components/TournamentsTable'
import { NavLink } from 'react-router-dom'

const TournamentsPageContainer = (props) => {

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
              <div className="row mt-4 pt-3 justify-content-center">
                <div className="col-3 ml-5 mr-auto">
                  <div className="input-group">
                    <input className="search-input form-control py-2 pl-4 border-right-0 border" type="text" name="search" value={search} onChange={handleOnChange} placeholder="Search"/>
                    <span className="input-group-append">
                      <div className="input-group-text search-input-addon bg-transparent"><img src={searchIcon} alt="search" /></div>
                    </span>
                  </div>
                </div>
                <div className="col-3 text-right mr-5 ml-auto">
                  <button className="btn btn-green px-4">
                    <NavLink to="/tournaments/add" className="text-white">
                      Add Tournament
                    </NavLink>
                  </button>
                </div>
              </div>
              <div className="row mt-5">
                <TournamentsTable tournaments={filteredTournaments()} />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default TournamentsPageContainer
