import React from 'react';
import OpponentAllStatsModal from '../modals/Opponent/OpponentAllStatsModal'
import OpponentAgeModal from '../modals/Opponent/OpponentAgeModal'
import OpponentHandednessModal from '../modals/Opponent/OpponentHandednessModal'
import OpponentUTRModal from '../modals/Opponent/OpponentUTRModal'
import OpponentNotesModal from '../modals/Opponent/OpponentNotesModal'
import OpponentNameModal from '../modals/Opponent/OpponentNameModal'
import OpponentStrengthsModal from '../modals/Opponent/OpponentStrengthsModal'
import OpponentWeaknessesModal from '../modals/Opponent/OpponentWeaknessesModal'
import tournamentDrawIcon from '../../images/tournament-draw-icon.png'
import tennisBallIcon from '../../images/tennis-ball-filled-icon.png'
import birthdayIcon from '../../images/birthday-cake-icon.png'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'

const OpponentCard = (props) => {
  var opponentId = parseInt(props.id)
  var opponent = props.currentOpponent(opponentId)

  if(opponent) {
    return (
      <section id="opponent-card-page">
        <div className="container-fluid py-2 bg-info text-white mb-4">
          <div className="row">
            <button className="btn w-100 shadow-none px-0 text-white" data-toggle="modal" data-target="#opponentNameModal">
              <div className="col text-center">
                <h1>{opponent.first_name} {opponent.last_name}</h1>
              </div>
            </button>
          </div>
        </div>

        <div className="container px-0">
            <div className="row justify-content-center mt-2">
              <div className="col-md-3">
                <NavLink to={`/matches/${opponent.match.id}`} className="btn shadow-none btn-block shadow-none">
                  <div className="row justify-content-center">
                    <div className="col-5">
                      <img src={tournamentDrawIcon} alt="age-icon"/>
                    </div>
                    <div className="col-7">
                      <div className="row">
                        <h6 className="font-italic text-info">Played In</h6>
                      </div>
                      <div className="row">
                        <h5>{opponent.match.tournament.title}</h5>
                      </div>
                    </div>
                  </div>
                </NavLink>
              </div>
              <div className="col-md-3 pl-md-5 pr-md-0 text-center">
                <button className="btn shadow-none btn-block px-0" data-toggle="modal" data-target="#opponentAgeModal">
                  <div className="row justify-content-center">
                    <div className="col-5">
                      <img src={birthdayIcon} alt="age-icon"/>
                    </div>
                    <div className="col-7">
                      <div className="row">
                        <h6 className="font-italic text-info">Age</h6>
                      </div>
                      <div className="row">
                        <h5>{opponent.age}</h5>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
              <div className="col-md-3 pr-md-5 pl-md-0 text-center">
                <button className="btn shadow-none btn-block px-0" data-toggle="modal" data-target="#opponentHandednessModal">
                  <div className="row justify-content-center">
                    <div className="col-5">
                      <i className="fas fa-hand-paper fa-3x home-icon"></i>
                    </div>
                    <div className="col-7">
                      <div className="row">
                        <h6 className="font-italic text-info">Plays</h6>
                      </div>
                      <div className="row">
                        <h5>{opponent.handedness} Handed</h5>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
              <div className="col-md-3 text-center">
                <button className="btn shadow-none btn-block px-0" data-toggle="modal" data-target="#opponentUTRModal">
                  <div className="row justify-content-center">
                    <div className="col-5">
                      <img src={tennisBallIcon} alt="utr-icon"/>
                    </div>
                    <div className="col-7">
                      <div className="row">
                        <h6 className="font-italic text-info">UTR</h6>
                      </div>
                      <div className="row">
                        <h5>{opponent.utr}</h5>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
        </div>

        <div className="container-fluid">
          <div className="row mt-3 mb-3 justify-content-center">
            <div className="col-md-2">
              <button className="btn btn-info btn-block" data-toggle="modal" data-target="#opponentStatsModal">
                <i className="fas fa-edit"></i> Edit Opponent
              </button>
            </div>
          </div>
        </div>

        <div className="container border rounded pb-4 mt-5 mb-4">
          <div className="row justify-content-center text-white bg-secondary">
            <h1>Skills</h1>
          </div>
          <div className="row mt-5">
            <div className="col-6 text-center">
              <div className="row justify-content-center mb-3">
                <h3 className="mb-0">Strengths</h3>
              </div>
              <div className="row justify-content-center text-center">
                <div className="card-deck mt-4 d-flex justify-content-center">
                  {arrayDisplay(opponent.strengths)}
                </div>
              </div>
              <div className="row justify-content-center mt-3 text-center">
                <div className="col-md-4">
                  <button className="btn btn-info btn-block" data-toggle="modal" data-target="#opponentStrengthsModal">
                    <i className="fas fa-edit"></i> Edit Strengths
                  </button>
                </div>
              </div>
            </div>
            <div className="col-6 text-center">
              <div className="row justify-content-center mb-3">
                <h3 className="mb-0">Weaknesses</h3>
              </div>
              <div className="row justify-content-center text-center">
                <div className="card-deck mt-4 d-flex justify-content-center">
                  {arrayDisplay(opponent.weaknesses)}
                </div>
              </div>
              <div className="row justify-content-center mt-3 text-center">
                <div className="col-md-5">
                  <button className="btn btn-info btn-block" data-toggle="modal" data-target="#opponentWeaknessesModal">
                    <i className="fas fa-edit"></i> Edit Weaknesses
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container border rounded pb-4 mt-5 mb-4">
          <div className="row justify-content-center bg-secondary">
          <button className="btn p-0 shadow-none text-white" data-toggle="modal" data-target="#matchNotesModal">
            <div className="col">
              <h1>Notes</h1>
            </div>
          </button>
          </div>
          <div className="row mt-1">
            <button className="btn shadow-none text-left" data-toggle="modal" data-target="#matchNotesModal">
              <div className="col">
                {opponent.notes}
              </div>
            </button>
          </div>
        </div>

          <OpponentAllStatsModal editOpponentInDatabase={props.editOpponentInDatabase} opponent={opponent} />
          <OpponentAgeModal editOpponentInDatabase={props.editOpponentInDatabase} opponent={opponent} />
          <OpponentHandednessModal editOpponentInDatabase={props.editOpponentInDatabase} opponent={opponent} />
          <OpponentUTRModal editOpponentInDatabase={props.editOpponentInDatabase} opponent={opponent} />
          <OpponentNotesModal editOpponentInDatabase={props.editOpponentInDatabase} opponent={opponent} />
          <OpponentNameModal editOpponentInDatabase={props.editOpponentInDatabase} opponent={opponent} />
          <OpponentStrengthsModal editOpponentInDatabase={props.editOpponentInDatabase} opponent={opponent} />
          <OpponentWeaknessesModal editOpponentInDatabase={props.editOpponentInDatabase} opponent={opponent} />
      </section>
    )
  } else {
    return <h3>Opponent Does Not Exist</h3>
  }
}

const arrayDisplay = (array) => {
  const result = []

  array.forEach((item, index) =>
    result.push(
      <div className="col-auto px-0 mb-3" key={index+1}>
        <div className="card card-tournament border border-secondary">
          <div className="card-body text-center">
            <p className="card-text">{item}</p>
          </div>
        </div>
      </div>
    )
  )

  return result
}

export default withRouter(OpponentCard)
