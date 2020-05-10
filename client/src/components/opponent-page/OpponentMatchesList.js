import React from 'react'
import OpponentMatchesTable from '../tables/OpponentMatchesTable'
import { NavLink } from 'react-router-dom'

const OpponentMatchesList = (props) => {
  return (
    <div id="match-list">
      <div className="row mt-3 ml-3 ml-md-5 pr-0 justify-content-start">
        <div className="col-8">
          <h4 className="text-black">Matches Played</h4>
        </div>
      </div>
      <div className="row mt-3 ml-3 ml-md-5 pr-0">
        <OpponentMatchesTable matches={props.matches} />
      </div>
    </div>
  )
}

export default OpponentMatchesList
