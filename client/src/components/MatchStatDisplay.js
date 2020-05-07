import React from 'react';
import MatchStatRow from './match-page/MatchStatRow'
import StatExpansion from './match-page/StatExpansion'
import editIcon from '../images/edit-white.svg'

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

  const addStats = (array) => {
    let count = 0;

    for(let stat of array) {
      count += stat.value
    }

    return count
  }

  // Winners
  const winnersArray = [
    {
      name: "Forehand",
      value: calculateStatTotal("forehand_winners")
    },
    {
      name: "Backhand",
      value: calculateStatTotal("backhand_winners")
    },
    {
      name: "Slice",
      value: calculateStatTotal("slice_winners")
    },
    {
      name: "Forehand Volley",
      value: calculateStatTotal("forehand_volley_winners")
    },
    {
      name: "Backhand Volley",
      value: calculateStatTotal("backhand_volley_winners")
    },
    {
      name: "Overhead",
      value: calculateStatTotal("overhead_winners")
    }
  ]

  // Forced Errors
  const forcedErrorsArray = [
    {
      name: "Forehand",
      value: calculateStatTotal("forehand_forced_errors")
    },
    {
      name: "Backhand",
      value: calculateStatTotal("backhand_forced_errors")
    },
    {
      name: "Slice",
      value: calculateStatTotal("slice_forced_errors")
    },
    {
      name: "Forehand Volley",
      value: calculateStatTotal("forehand_volley_forced_errors")
    },
    {
      name: "Backhand Volley",
      value: calculateStatTotal("backhand_volley_forced_errors")
    },
    {
      name: "Overhead",
      value: calculateStatTotal("overhead_forced_errors")
    }
  ]

  // Unforced Errors
  const unforcedErrorsArray = [
    {
      name: "Forehand",
      value: calculateStatTotal("forehand_unforced_errors")
    },
    {
      name: "Backhand",
      value: calculateStatTotal("backhand_unforced_errors")
    },
    {
      name: "Slice",
      value: calculateStatTotal("slice_unforced_errors")
    },
    {
      name: "Forehand Volley",
      value: calculateStatTotal("forehand_volley_unforced_errors")
    },
    {
      name: "Backhand Volley",
      value: calculateStatTotal("backhand_volley_unforced_errors")
    },
    {
      name: "Overhead",
      value: calculateStatTotal("overhead_unforced_errors")
    }
  ]


  // Aces
  let acesArray = [
    {
      name: "Deuce Side",
      value: calculateStatTotal("deuce_side_aces")
    },
    {
      name: "Ad Side",
      value: calculateStatTotal("ad_side_aces")
    }
  ]

  // Service Winners
  let serviceWinnersArray = [
    {
      name: "Deuce Side",
      value: calculateStatTotal("deuce_side_service_winners")
    },
    {
      name: "Ad Side",
      value: calculateStatTotal("ad_side_service_winners")
    }
  ]

  // Double Faults
  let doubleFaultsArray = [
    {
      name: "Deuce Side",
      value: calculateStatTotal("deuce_side_double_faults")
    },
    {
      name: "Ad Side",
      value: calculateStatTotal("ad_side_double_faults")
    }
  ]

  // Totals
  let winners = addStats(winnersArray)
  let unforcedErrors = addStats(unforcedErrorsArray)
  let forcedErrors = addStats(forcedErrorsArray)
  let aces = addStats(acesArray)
  let serviceWinners = addStats(serviceWinnersArray)
  let doubleFaults = addStats(doubleFaultsArray)

  return (
    <div className="row justify-content-center my-5">
      <div className="col-10 ml-3 ml-md-0 mr-md-5 bg-light-green tournament-stats-chart rounded my-auto pt-5 pb-4">
        <div className="row justify-content-center">
          <div className="col-8 text-left px-0 pb-3">
            <h5 className="text-white" style={{fontSize: '25px'}}>Match Stats</h5>
          </div>
          <div className="col-1">
            <span data-toggle="tooltip" data-placement="top" title="Edit Match Stats">
              <img src={editIcon} alt="edit" data-toggle="modal" data-target="#matchStatsModal" />
            </span>
          </div>
        </div>

        {/* Unforced Errors */}
        <MatchStatRow name="Unforced Errors" value={unforcedErrors} expansionId="unforcedErrors" />
        <StatExpansion stats={unforcedErrorsArray} expansionId="unforcedErrors"/>

        {/* Forced Errors */}
        <MatchStatRow name="Forced Errors" value={forcedErrors} expansionId="forcedErrors" />
        <StatExpansion stats={forcedErrorsArray} expansionId="forcedErrors"/>

        {/* Winners */}
        <MatchStatRow name="Winners" value={winners} expansionId="winners" />
        <StatExpansion stats={winnersArray} expansionId="winners"/>

        {/* Double Faults */}
        <MatchStatRow name="Double Faults" value={doubleFaults} expansionId="doubleFaults" />
        <StatExpansion stats={doubleFaultsArray} expansionId="doubleFaults"/>

        {/* Service Winners */}
        <MatchStatRow name="Service Winners" value={serviceWinners} expansionId="serviceWinners" />
        <StatExpansion stats={serviceWinnersArray} expansionId="serviceWinners"/>

        {/* Aces */}
        <MatchStatRow name="Aces" value={aces} expansionId="aces" />
        <StatExpansion stats={acesArray} expansionId="aces"/>

        {/* Bottom Border */}
        <MatchStatRow name="" value="" expansionId="" noIcon={true} />
      </div>
    </div>
  )
}

export default MatchStatDisplay
