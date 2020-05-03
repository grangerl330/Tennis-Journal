import React, { useState, useEffect } from 'react';
import $ from 'jquery'
import matchesIcon from '../images/matches-icon.svg'
import searchIcon from '../images/search.svg'
import MatchesTable from '../components/matches-page/MatchesTable'
import SearchBarRow from '../components/SearchBarRow'

const MatchesPage = (props) => {

  useEffect(() => {
    $('[data-toggle="tooltip"]').tooltip();
  })

  const[search, setSearch] = useState("")

  let handleOnChange = event => {
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
      <div className="container-fluid p-0 background-light-grey">
      <div className="row py-4 background-light-grey text-green">
        <div className="col-10 px-0 mx-auto">
          <div className="row">
            <div className="col-1 ml-3 ml-md-0 px-0 text-center">
              <img className="icon" src={matchesIcon} alt="matches" />
            </div>
            <div className="col-5 px-0 ml-5 ml-md-2 mr-auto my-auto">
              <h2 className="text-green">Matches</h2>
            </div>
          </div>
        </div>
      </div>
        <div className="row pb-4 background-light-grey text-green">
          <div className="col-10 px-0 mx-auto bg-white shadow-light-green rounded">
            <SearchBarRow type="matches" search={search} onChange={handleOnChange} />
            <div className="row mt-5 justify-content-center desktop-view">
              <div className="col-11">
                <MatchesTable matches={filteredMatches()} />
              </div>
            </div>
            <div className="row mt-3 justify-content-center mobile-view">
              <div className="col-11">
                <MatchesTable matches={filteredMatches()} mobile={true}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MatchesPage
