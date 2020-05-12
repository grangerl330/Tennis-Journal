import React from 'react'
import OpponentMatchesTable from '../tables/OpponentMatchesTable'

const OpponentMatchesList = (props) => {
  return (
    <div id="match-list" className="mb-md-5">
      <div className="row mt-3 ml-3 ml-md-5 pr-0 justify-content-start">
        <div className="col-8">
          <h4 className="text-black">Matches Played</h4>
        </div>
      </div>
      <div className="row mt-3 ml-3 ml-md-5 pr-0 d-none d-md-flex">
        <OpponentMatchesTable matches={props.matches} mobile={false}/>
      </div>
      <div className="row mt-3 ml-3 ml-md-5 pr-0 d-flex d-md-none">
        <OpponentMatchesTable matches={props.matches} mobile={true}/>
      </div>
    </div>
  )
}

export default OpponentMatchesList
