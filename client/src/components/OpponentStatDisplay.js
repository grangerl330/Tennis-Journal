import React from 'react';
import MatchStatRow from './match-page/MatchStatRow'
import StatExpansion from './match-page/StatExpansion'
import editIcon from '../images/edit-white.svg'

const OpponentStatDisplay = (props) => {
  return(
    <section id="opponent-stat-display">
      <div className="row justify-content-center my-5 ml-3">
        <div className="col-10 ml-3 ml-md-0 mr-md-5 bg-light-green opponent-stats-window rounded my-auto pt-5 pb-4">
          <h4 className="ml-4 text-white inline">Strengths</h4>
          <span data-toggle="tooltip" data-placement="top" title="Edit Strengths" style={{position: 'absolute', left: '85%'}}>
            <img src={editIcon} className="mr-3" alt="edit" data-toggle="modal" data-target="#opponentStrengthsModal" />
          </span>
          <p className="text-white ml-4 mt-3">{props.opponent.strengths}</p>
        </div>
      </div>
      <div className="row justify-content-center my-5 ml-3">
        <div className="col-10 ml-3 ml-md-0 mr-md-5 bg-light-green opponent-stats-window rounded my-auto pt-5 pb-4">
          <h4 className="ml-4 text-white inline">Weaknesses</h4>
          <span data-toggle="tooltip" data-placement="top" title="Edit Weaknesses" style={{position: 'absolute', left: '85%'}}>
            <img src={editIcon} className="mr-3" alt="edit" data-toggle="modal" data-target="#opponentWeaknessesModal" />
          </span>
          <p className="text-white ml-4 mt-3">{props.opponent.weaknesses}</p>
        </div>
      </div>
    </section>
  )
}

export default OpponentStatDisplay
