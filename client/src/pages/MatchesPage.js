import React, { useState, useEffect } from 'react';
import $ from 'jquery'
import matchesIcon from '../images/matches-icon.svg'
import TitleRow from '../components/TitleRow'
import SearchBarRow from '../components/SearchBarRow'
import TableRow from '../components/TableRow'

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
        <TitleRow icon={matchesIcon} title="Matches" />
        <div className="row pb-4 background-light-grey text-green">
          <div className="col-10 px-0 mx-auto bg-white shadow-light-green rounded">
            <SearchBarRow type="matches" search={search} onChange={handleOnChange} />
            <TableRow type="matches" matches={filteredMatches()} mobile={false}/>
            <TableRow type="matches" matches={filteredMatches()} mobile={true}/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MatchesPage
