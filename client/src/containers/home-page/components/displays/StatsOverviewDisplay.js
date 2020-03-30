import React from 'react'
// import ProfilePicture from './ProfilePicture'
// import defaultProfile from '../../images/Default-Profile.jpeg'

const StatsOverviewDisplay = (props) => {
  return (
    <div id="Stats-Overview" className="container-fluid">
      <div className="row ml-3">
        <div className="col-12">
          <div className="row mb-3">
            <h2 className="text-green">{props.currentUser.first_name} {props.currentUser.last_name}</h2>
          </div>
          <div className="row mb-3">
            <div className="col-3">
              <h5 className="inline">Record:</h5> <span className="ml-3">{props.currentUser.match_record}</span>
            </div>
            <div className="col-3">
              <h5 className="inline">Points:</h5> <span className="ml-3">{props.currentUser.points}</span>
            </div>
            <div className="col-3">
              <h5 className="inline">UTR:</h5> <span className="ml-3">{props.currentUser.utr}</span>
            </div>
            <div className="col-3">
              <h5 className="inline">Ranking:</h5> <span className="ml-3">{props.currentUser.current_ranking}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatsOverviewDisplay
