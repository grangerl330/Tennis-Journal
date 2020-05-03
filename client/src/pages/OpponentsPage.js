import React, { useState } from 'react';
import opponentsIcon from '../images/opponents.svg'
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
        <div className="row py-4 background-light-grey text-green">
          <div className="col-10 px-0 mx-auto">
            <div className="row">
              <div className="col-1 ml-3 ml-md-0 px-0 text-center">
                <img className="icon" src={opponentsIcon} alt="tournament" />
              </div>
              <div className="col-5 px-0 ml-5 ml-md-2 mr-auto my-auto">
                <h2 className="text-green">Opponents</h2>
              </div>
            </div>
          </div>
        </div>
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
