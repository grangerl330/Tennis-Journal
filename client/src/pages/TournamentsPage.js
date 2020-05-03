import React, { useState } from 'react';
import tournamentIcon from '../images/tournament-icon.svg'
import TitleRow from '../components/TitleRow'
import SearchBarRow from '../components/SearchBarRow'
import TableRow from '../components/TableRow'

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
          <TitleRow icon={tournamentIcon} title="Tournaments" />
          <div className="row pb-4 background-light-grey text-green">
            <div className="col-10 px-0 mx-auto bg-white shadow-light-green rounded">
              <SearchBarRow type="tournaments" search={search} onChange={handleOnChange} />
              <TableRow type="tournaments" content={filteredTournaments()} mobile={false} />
              <TableRow type="tournaments" content={filteredTournaments()} mobile={true} />
            </div>
          </div>
        </div>
      </section>
    )
}

export default TournamentsPage
