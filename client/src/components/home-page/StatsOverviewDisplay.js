import React from 'react'
import defaultProfile from '../../images/Default-Profile.jpeg'

const StatsOverviewDisplay = (props) => {
  return (
    <div id="Stats-Overview" className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-3 text-center">
          <img src={defaultProfile} alt="Profile"/>
        </div>
        <div className="col-9">
          <div className="row mb-3">
            <h1>Stats Overview</h1>
          </div>
          <div className="row mb-3">
            <div className="col-6">
              <h5 className="inline">Record:</h5> <span className="ml-3">{props.matchRecord}</span>
            </div>
            <div className="col-6">
              <h5 className="inline">Points:</h5> <span className="ml-3">{props.points}</span>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <h5 className="inline">UTR:</h5> <span className="ml-3">{props.utr}</span>
            </div>
            <div className="col-6">
              <h5 className="inline">Ranking:</h5> <span className="ml-3">{props.ranking}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatsOverviewDisplay