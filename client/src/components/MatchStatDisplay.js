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

  // Winners
  let forehandWinners = calculateStatTotal("forehand_winners")
  let backhandWinners = calculateStatTotal("backhand_winners")
  let sliceWinners = calculateStatTotal("slice_winners")
  let forehandVolleyWinners = calculateStatTotal("forehand_volley_winners")
  let backhandVolleyWinners = calculateStatTotal("backhand_volley_winners")
  let overheadWinners = calculateStatTotal("overhead_winners")

  // Forced Errors
  let forehandForcedErrors = calculateStatTotal("forehand_forced_errors")
  let backhandForcedErrors = calculateStatTotal("backhand_forced_errors")
  let sliceForcedErrors = calculateStatTotal("slice_forced_errors")
  let forehandVolleyForcedErrors = calculateStatTotal("forehand_volley_forced_errors")
  let backhandVolleyForcedErrors = calculateStatTotal("backhand_volley_forced_errors")
  let overheadForcedErrors = calculateStatTotal("overhead_forced_errors")

  // Unforced Errors
  let forehandUnforcedErrors = calculateStatTotal("forehand_unforced_errors")
  let backhandUnforcedErrors = calculateStatTotal("backhand_unforced_errors")
  let sliceUnforcedErrors = calculateStatTotal("slice_unforced_errors")
  let forehandVolleyUnforcedErrors = calculateStatTotal("forehand_volley_unforced_errors")
  let backhandVolleyUnforcedErrors = calculateStatTotal("backhand_volley_unforced_errors")
  let overheadUnforcedErrors = calculateStatTotal("overhead_unforced_errors")

  // Aces
  let deuceSideAces = calculateStatTotal("deuce_side_aces")
  let adSideAces = calculateStatTotal("ad_side_aces")

  // Service Winners
  let deuceSideServiceWinners = calculateStatTotal("deuce_side_service_winners")
  let adSideServiceWinners = calculateStatTotal("ad_side_service_winners")

  // Double Faults
  let deuceSideDoubleFaults = calculateStatTotal("deuce_side_double_faults")
  let adSideDoubleFaults = calculateStatTotal("ad_side_double_faults")

  // Totals
  let winners = forehandWinners + backhandWinners + sliceWinners + forehandVolleyWinners + backhandVolleyWinners + overheadWinners
  let unforcedErrors = forehandUnforcedErrors + backhandUnforcedErrors + sliceUnforcedErrors + forehandVolleyUnforcedErrors + backhandVolleyUnforcedErrors + overheadUnforcedErrors
  let forcedErrors = forehandForcedErrors + backhandForcedErrors + sliceForcedErrors + forehandVolleyForcedErrors + backhandVolleyForcedErrors + overheadForcedErrors
  let aggressiveMargin = winners + forcedErrors - unforcedErrors
  let aces = deuceSideAces + adSideAces
  let serviceWinners = deuceSideServiceWinners + adSideServiceWinners
  let doubleFaults = deuceSideDoubleFaults + adSideDoubleFaults

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
        <StatRow name="Aggressive Margin" value={aggressiveMargin} />
        <StatRow name="Double Faults" value={doubleFaults} />
        <StatRow name="Service Winners" value={serviceWinners}  />
        <StatRow name="Aces" value={aces} />
      </div>
    </div>
  )
}

export default MatchStatDisplay
