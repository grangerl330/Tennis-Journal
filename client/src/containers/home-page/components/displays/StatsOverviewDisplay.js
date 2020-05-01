import React from 'react'
import editIcon from '../../../../images/edit.svg'
// import ProfilePicture from './ProfilePicture'
// import defaultProfile from '../../images/Default-Profile.jpeg'

const StatsOverviewDisplay = (props) => {
  const renderRanking = () => {
    if (props.currentUser.current_ranking === null){
      return (
        <span className="ml-auto" data-toggle="tooltip" data-placement="top" title="Please enter your current ranking for this month">
          <i className="fas fa-exclamation-triangle text-green"></i>
        </span>
      )
    } else {
      return (
        props.currentUser.current_ranking
      )
    }
  }

  const renderUTR = () => {
    if (props.currentUser.utr === null){
      return (
        <span className="ml-auto" data-toggle="tooltip" data-placement="top" title="Please enter your current UTR">
          <i className="fas fa-exclamation-triangle text-green"></i>
        </span>
      )
    } else {
      return (
        props.currentUser.utr
      )
    }
  }

  return (
    <div id="Stats-Overview" className="container-fluid">
      <div className="row ml-3 ml-xl-0">
        <div className="col-12">
          <div className="row mb-3">
            <h2 className="text-green">{props.currentUser.first_name} {props.currentUser.last_name}</h2>
          </div>
          <div className="row mb-3">
            <div className="col-6 mt-3 mt-xl-0 col-xl-3 p-0">
              <h5 className="inline">Record:</h5> <span className="ml-3">{props.currentUser.match_record}</span>
            </div>
            <div className="col-6 mt-3 mt-xl-0 col-xl-3">
              <h5 className="inline">Points:</h5> <span className="ml-3">{props.currentUser.points}</span>
            </div>
            <div className="col-6 mt-3 mt-xl-0 col-xl-3">
              <h5 className="inline">UTR:</h5> <span className="ml-3">{renderUTR()}</span>
            </div>
            <div className="col-6 mt-3 mt-xl-0 col-xl-3 pl-0">
              <div className="row">
                <div className="col-9 col-xl-10 p-0 text-left">
                  <h5 className="inline">Ranking:</h5> <span className="ml-3">{renderRanking()}</span>
                </div>
                <div className="col-3 col-xl-2 text-right">
                  <span className="ml-auto" data-toggle="tooltip" data-placement="top" title="Edit UTR and Ranking">
                    <img src={editIcon} alt="edit" data-toggle="modal" data-target="#statsOverviewModal"/>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatsOverviewDisplay
