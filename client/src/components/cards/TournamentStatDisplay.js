import React from 'react';

const TournamentStatDisplay = (props) => {

  const iconDisplay = () => {
    if(props.icon) {
      return <i className={props.icon}></i>
    } else if(props.image) {
      return <img src={props.image} alt="stat-icon"/>
    }
  }

  return (
    <div className="col-md-2 pl-md-5 pr-md-0 text-center">
      <div className="row justify-content-center">
        <div className="col-5">
          {iconDisplay()}
        </div>
        <div className="col-7">
          <div className="row">
            <h6 className="font-italic text-info">{props.statName}</h6>
          </div>
          <div className="row">
            <h6 className={props.dateClass}>{props.stat}</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TournamentStatDisplay
