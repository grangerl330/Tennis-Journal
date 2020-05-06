import React from 'react';
import StatRow from './tournament-page/StatRow'

const MatchStatDisplay = (props) => {
  const calculateStatTotal = (stat) => {
    let count = 0;

    for(let key of Object.keys(props.match)) {
      if(key.includes(stat)) {
        count += props.match[key]
      }
    }

    return count
  }

  let winners = calculateStatTotal("winners")
  let forcedErrors = calculateStatTotal("forced_errors")
  let unforcedErrors = calculateStatTotal("unforced_errors")
  let aggressiveMargin = winners + forcedErrors - unforcedErrors
  let aces = calculateStatTotal("aces")
  let serviceWinners = calculateStatTotal("service_winners")
  let doubleFaults = calculateStatTotal("double_faults")

  return (
    <div className="row justify-content-center my-5">
      <div className="col-10 ml-3 ml-md-0 mr-md-5 bg-light-green tournament-stats-chart rounded my-auto py-5">
        <div className="row justify-content-center">
          <div className="col-9 text-center pb-3 border-bottom">
            <h5 className="text-white" style={{fontSize: '25px'}}>Match Stats</h5>
          </div>
        </div>
        <StatRow name="Unforced Errors" value={unforcedErrors} />
        <StatRow name="Forced Errors" value={forcedErrors} />
        <StatRow name="Winners" value={winners} />
        <StatRow name="Double Faults" value={doubleFaults} />
        <StatRow name="Service Winners" value={serviceWinners}  />
        <StatRow name="Aces" value={aces} />
      </div>
    </div>
  )
}

export default MatchStatDisplay
