import React from 'react';
import OpponentInfoModal from '../../../components/modals/Opponent/OpponentInfoModal'
import OpponentNotesModal from '../../../components/modals/Opponent/OpponentNotesModal'
import OpponentStrengthsModal from '../../../components/modals/Opponent/OpponentStrengthsModal'
import OpponentWeaknessesModal from '../../../components/modals/Opponent/OpponentWeaknessesModal'
import tournamentDrawIcon from '../../../images/tournament-draw-icon.png'
import tennisBallIcon from '../../../images/tennis-ball-filled-icon.png'
import birthdayIcon from '../../../images/birthday-cake-icon.png'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'

const OpponentPage = (props) => {
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
            </div>
            <div className="col-md-3 pr-md-5 pl-md-0 text-center">
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
            </div>
            <div className="col-md-3 text-center">
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
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row mt-3 mb-3 justify-content-center">
            <div className="col-md-2">
              <button className="btn btn-info btn-block" data-toggle="modal" data-target="#opponentInfoModal">
                <i className="fas fa-edit"></i> Edit Info
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
              <div className="row justify-content-center">
                <ul className="mr-5">
                  {arrayDisplay(opponent.strengths)}
                </ul>
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
                <ul className="mr-5">
                  {arrayDisplay(opponent.weaknesses)}
                </ul>
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
          <div className="row justify-content-center bg-secondary mb-3">
            <div className="col text-center text-white">
              <h1>Notes</h1>
            </div>
          </div>
          <div className="row mt-1">
            <div className="col">
              {opponent.notes}
            </div>
          </div>
          <div className="row mt-5 mb-0 justify-content-center">
            <div className="col-md-2">
              <button className="btn btn-info btn-block" data-toggle="modal" data-target="#opponentNotesModal">
                <i className="fas fa-edit"></i> Edit Notes
              </button>
            </div>
          </div>
        </div>

          <OpponentInfoModal editOpponentInDatabase={props.editOpponentInDatabase} opponent={opponent} />
          <OpponentNotesModal editOpponentInDatabase={props.editOpponentInDatabase} opponent={opponent} />
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
      <li key={index+1}>{item}</li>
    )
  )

  return result
}

export default withRouter(OpponentPage)
