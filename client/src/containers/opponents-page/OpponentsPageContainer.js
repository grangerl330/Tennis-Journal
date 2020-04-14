import React, { useState } from 'react';
import OpponentsTable from './components/OpponentsTable'
import opponentsIcon from '../../images/opponents.svg'

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
    <section id="opponents-page">
      <div className="container-fluid p-0 background-light-grey">
        <div className="row py-4 background-light-grey text-green">
          <div className="col-10 px-0 mx-auto">
            <div className="row">
              <div className="col-1 px-0 text-center">
                <img className="icon" src={opponentsIcon} alt="tournament" />
              </div>
              <div className="col-5 px-0 ml-2 mr-auto my-auto">
                <h2 className="text-green">Opponents</h2>
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
                    <div className="input-group-text search-input-addon bg-transparent"><i className="fa fa-search"></i></div>
                  </span>
                </div>
              </div>
              <div className="col-1 mr-5 ml-auto my-auto">
                <span data-toggle="tooltip" data-placement="top" title="Add a new opponent by adding a new match on a tournament's view page">
                  <i className="fas fa-info-circle fa-lg text-green"></i>
                </span>
              </div>
            </div>
            <div className="row mt-5">
              <OpponentsTable opponents={filteredOpponents()} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OpponentsPageContainer
