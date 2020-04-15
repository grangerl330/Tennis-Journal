import React from 'react';
import StatRow from './components/StatRow'

const TournamentStatDisplay = (props) => {
  const calculateStatTotal = (stat) => {
    let count = 0;

    for(let match of props.matches) {
      for(let key of Object.keys(match)) {
        if(key.includes(stat)) {
          count += match[key]
        }
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
    <div className="row justify-content-center h-100">
      <div className="col-10 mr-5 bg-light-green tournament-stats-chart rounded my-auto py-5">
        <div className="row justify-content-center">
          <div className="col-9 text-center pb-3 border-bottom">
            <h5 className="text-white" style={{fontSize: '25px'}}>Tournament Stats</h5>
          </div>
        </div>
        <StatRow name="Matches Played" value={props.matches.length} />
        <StatRow name="Total Winners" value={winners} />
        <StatRow name="Total Forced Errors" value={forcedErrors} />
        <StatRow name="Total Unforced Errors" value={unforcedErrors} />
        <StatRow name="Aggressive Margin" value={aggressiveMargin}  />
        <StatRow name="Total Aces" value={aces} />
        <StatRow name="Total Service Winners" value={serviceWinners} />
        <StatRow name="Total Double Faults" value={doubleFaults} />
      </div>
    </div>
  )
}

export default TournamentStatDisplay
