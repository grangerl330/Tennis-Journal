import React, { useState, useEffect } from 'react';
import $ from 'jquery'
import tournamentIcon from '../../images/tournament-icon.png'
import MatchesTable from './components/MatchesTable'
import { NavLink } from 'react-router-dom'

const MatchesPageContainer = (props) => {

  useEffect(() => {
    $('[data-toggle="tooltip"]').tooltip();
  })

  const[search, setSearch] = useState("")

  const handleOnChange = event => {
    const {value} = event.target

    setSearch(value)
  }

  const filteredMatches = () => {
    const matches = []

    for(let match of props.matches) {
      match.tournamentTitle = match.tournament.title

      matches.push(match)
    }

    if(search === "") {
      return matches
    } else {
      return (
        matches.filter(match =>
          Object.keys(match).some(key => match[key].toString().toLowerCase().includes(search.toLowerCase().trim()))
        )
      )
    }
  }

  return (
    <section id="matches-page">
      <div className="container-fluid">
        <div className="row py-4 background-light-grey text-green">
          <div className="col-1 px-0 ml-4 text-center">
            <img src={tournamentIcon} alt="tournament" />
          </div>
          <div className="col-5 px-0 ml-3 mr-auto my-auto">
            <h2 className="text-green">Matches</h2>
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
            <span data-toggle="tooltip" data-placement="top" title="Add a new match on a tournament's view page">
              <i className="fas fa-info-circle text-green"></i>
            </span>
          </div>
        </div>
        <div className="row mt-5">
          <MatchesTable matches={filteredMatches()} />
        </div>
      </div>
    </section>
  )
}

export default MatchesPageContainer
