import React from 'react'

const AllMatchStatsDisplay = (props) => {

  let totalMatchesPlayed = props.currentUser.matches.length
  let totalWinners = 0
  let totalUnforcedErrors = 0
  let totalForcedErrors = 0
  let totalAces = 0
  let totalDoubleFaults = 0
  let totalServiceWinners = 0

  const calculateTotalWinners = match => {
    return match.forehand_winners + match.backhand_winners + match.slice_winners + match.forehand_volley_winners + match.backhand_volley_winners + match.overhead_winners
  }

  const calculateTotalUnforcedErrors = match => {
    return match.forehand_unforced_errors + match.backhand_unforced_errors + match.slice_unforced_errors + match.forehand_volley_unforced_errors + match.backhand_volley_unforced_errors + match.overhead_unforced_errors
  }

  const calculateTotalForcedErrors = match => {
    return match.forehand_forced_errors + match.backhand_forced_errors + match.slice_forced_errors + match.forehand_volley_forced_errors + match.backhand_volley_forced_errors + match.overhead_forced_errors
  }

  const calculateTotalAces = match => {
    return match.deuce_side_aces + match.ad_side_aces
  }

  const calculateTotalDoubleFaults = match => {
    return match.deuce_side_double_faults + match.ad_side_double_faults
  }

  const calculateTotalServiceWinners = match => {
    return match.deuce_side_service_winners + match.ad_side_service_winners
  }

  for(let match of props.currentUser.matches) {
    totalWinners += calculateTotalWinners(match)
    totalUnforcedErrors += calculateTotalUnforcedErrors(match)
    totalForcedErrors += calculateTotalForcedErrors(match)
    totalAces += calculateTotalAces(match)
    totalDoubleFaults += calculateTotalDoubleFaults(match)
    totalServiceWinners += calculateTotalServiceWinners(match)
  }

  return (
    <div id="Advanced-Stats-Display" className="container border rounded">
      <div className="row justify-content-center text-white background-dark">
        <h3>All Match Stats</h3>
      </div>
      <div className="row mt-4 justify-content-center">
        <div className="col-3 text-center">
          <h5>Matches Played: {totalMatchesPlayed}</h5>
        </div>
        <div className="col-3 text-center">
          <h5>Total Winners: {totalWinners}</h5>
        </div>
        <div className="col-3 text-center">
          <h5>Total Forced Errors: {totalForcedErrors}</h5>
        </div>
        <div className="col-3 text-center">
          <h5>Total Unforced Errors: {totalUnforcedErrors}</h5>
        </div>
      </div>
      <div className="row mt-5 justify-content-center">
        <div className="col-3 text-center">
          <h5>Total Aces: {totalAces}</h5>
        </div>
        <div className="col-3 text-center">
          <h5>Total Service Winners: {totalServiceWinners}</h5>
        </div>
        <div className="col-3 text-center">
          <h5>Total Double Faults: {totalDoubleFaults}</h5>
        </div>
      </div>
    </div>
  )
}

export default AllMatchStatsDisplay
