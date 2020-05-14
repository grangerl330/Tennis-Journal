import React from 'react'
import MatchesTable from '../tables/MatchesTable'
import OpponentsTable from '../tables/OpponentsTable'
import TournamentsTable from '../tables/TournamentsTable'

const TableRow = (props) => {

  const renderTable = () => {
    if(props.type === "matches") {
      return <MatchesTable matches={props.content} mobile={props.mobile} />
    } else if(props.type === "tournaments") {
      return <TournamentsTable tournaments={props.content} mobile={props.mobile} />
    } else if(props.type === "opponents") {
      return <OpponentsTable opponents={props.content} mobile={props.mobile} />
    }
  }

  if(props.mobile) {
    return (
      <div className="row mt-3 justify-content-center mobile-view">
        <div className="col-11">
          {renderTable()}
        </div>
      </div>
    )
  } else {
    return (
      <div className="row mt-5 justify-content-center desktop-view">
        <div className="col-11">
          {renderTable()}
        </div>
      </div>
    )
  }

}

export default TableRow
