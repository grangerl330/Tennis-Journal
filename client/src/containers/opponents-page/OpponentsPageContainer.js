import React, { useState } from 'react';
import OpponentsTable from './components/OpponentsTable'
import tournamentIcon from '../../images/tournament-icon.svg'
import { NavLink } from 'react-router-dom'

const OpponentsPageContainer = (props) => {
  const[search, setSearch] = useState("")

  const handleOnChange = event => {
    const {value} = event.target

    setSearch(value)
  }

  const filteredOpponents = () => {
    if(search === "") {
      return props.opponents
    } else {
      return (
        props.opponents.filter(opponent =>
          Object.keys(opponent).some(key => opponent[key].toString().toLowerCase().includes(search.toLowerCase()))
        )
      )
    }
  }

  return (
    <section id="tournaments-page">
      <div className="container-fluid">
        <div className="row py-4 background-light-grey text-green">
          <div className="col-1 px-0 ml-4 text-center">
            <img className="icon" src={tournamentIcon} alt="tournament" />
          </div>
          <div className="col-5 px-0 ml-2 mr-auto my-auto">
            <h2 className="text-green">Opponents</h2>
          </div>
        </div>
        <div className="row mt-4 pt-3 justify-content-center">
          <div className="col-3 ml-5 mr-auto">
            <div className="input-group">
              <input className="search-input form-control py-2 pl-4 border-right-0 border" type="text" name="search" value={search} onChange={handleOnChange} placeholder="Search"/>
              <span className="input-group-append">
                <div className="input-group-text search-input-addon bg-transparent"><i className="fa fa-search"></i></div>
              </span>
            </div>
          </div>
          <div className="col-1 mr-5 ml-auto">
            <span data-toggle="tooltip" data-placement="top" title="Add a new opponent by adding a new match on a tournament's view page">
              <i className="fas fa-info-circle fa-lg text-green"></i>
            </span>
          </div>
        </div>
        <div className="row mt-5">
          <OpponentsTable opponents={filteredOpponents()} />
        </div>
      </div>
    </section>
  )
}

export default OpponentsPageContainer
