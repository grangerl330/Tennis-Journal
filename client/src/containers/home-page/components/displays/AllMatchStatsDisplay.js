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

  let aggressiveMargin = (totalWinners + totalForcedErrors - totalUnforcedErrors)

  return (
    <div id="Advanced-Stats-Display" className="container shadow-light-green">
      <div className="row justify-content-center border rounded-top text-white background-dark py-2">
        <h4>All Match Stats</h4>
      </div>
      <div className="row my-4 justify-content-center">
        <div className="col-6 border-right">
          <div className="row justify-content-center border-bottom py-4 mx-3">
            <div className="col-9">
              <div className="row">
                <div className="col-10">
                  <span className="my-auto">Matches Played:</span>
                </div>
                <div className="col-2">
                  <span className="my-auto text-green">{totalMatchesPlayed}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center border-bottom py-4 mx-3">
            <div className="col-9">
              <div className="row">
                <div className="col-10">
                  <span className="my-auto">Total Winners:</span>
                </div>
                <div className="col-2">
                  <span className="my-auto text-green">{totalWinners}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center border-bottom py-4 mx-3">
            <div className="col-9">
              <div className="row">
                <div className="col-10">
                  <span className="my-auto">Total Forced Errors:</span>
                </div>
                <div className="col-2">
                  <span className="my-auto text-green">{totalForcedErrors}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center py-4 mx-3">
            <div className="col-9">
              <div className="row">
                <div className="col-10">
                  <span className="my-auto">Total Unforced Errors:</span>
                </div>
                <div className="col-2">
                  <span className="my-auto text-green">{totalUnforcedErrors}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="row justify-content-center border-bottom py-4 mx-3">
            <div className="col-9">
              <div className="row">
                <div className="col-10">
                  <span className="my-auto">Aggressive Margin:</span>
                </div>
                <div className="col-2">
                  <span className="my-auto text-green">{aggressiveMargin}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center border-bottom py-4 mx-3">
            <div className="col-9">
              <div className="row">
                <div className="col-10">
                  <span className="my-auto">Total Aces:</span>
                </div>
                <div className="col-2">
                  <span className="my-auto text-green">{totalAces}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center border-bottom py-4 mx-3">
            <div className="col-9">
              <div className="row">
                <div className="col-10">
                  <span className="my-auto">Total Service Winners:</span>
                </div>
                <div className="col-2">
                  <span className="my-auto text-green">{totalServiceWinners}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center py-4 mx-3">
            <div className="col-9">
              <div className="row">
                <div className="col-10">
                  <span className="my-auto">Total Double Faults:</span>
                </div>
                <div className="col-2">
                  <span className="my-auto text-green">{totalDoubleFaults}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllMatchStatsDisplay
