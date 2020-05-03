import React, { useState } from 'react';
import opponentsIcon from '../images/opponents.svg'
import TitleRow from '../components/TitleRow'
import SearchBarRow from '../components/SearchBarRow'
import TableRow from '../components/TableRow'

const OpponentsPage = (props) => {
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
    <section id="opponents-page">
      <div className="container-fluid p-0 background-light-grey">
        <TitleRow icon={opponentsIcon} title="Opponents" />
        <div className="row pb-4 background-light-grey text-green">
          <div className="col-10 px-0 mx-auto bg-white shadow-light-green rounded">
            <SearchBarRow type="opponents" search={search} onChange={handleOnChange} />
            <TableRow type="opponents" opponents={filteredOpponents()} mobile={false} />
            <TableRow type="opponents" opponents={filteredOpponents()} mobile={true} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default OpponentsPage
