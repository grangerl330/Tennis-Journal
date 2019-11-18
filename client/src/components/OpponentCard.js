import React from 'react';
import OpponentAgeModal from './modals/Opponent/OpponentAgeModal'
import OpponentHandednessModal from './modals/Opponent/OpponentHandednessModal'
import OpponentUTRModal from './modals/Opponent/OpponentUTRModal'
import OpponentNotesModal from './modals/Opponent/OpponentNotesModal'
import OpponentNameModal from './modals/Opponent/OpponentNameModal'
import tournamentDrawIcon from '../images/tournament-draw-icon.png'
import tennisBallIcon from '../images/tennis-ball-filled-icon.png'
import birthdayIcon from '../images/birthday-cake-icon.png'
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
                        <h5>{opponent.handedness} handed</h5>
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
          <div className="row mt-4">
          <button className="btn shadow-none" data-toggle="modal" data-target="#opponentNotesModal">
            <div className="col">
              <h1>Notes:</h1>
            </div>
          </button>
          </div>
          <div className="row mt-1">
            <button className="btn shadow-none text-md-left" data-toggle="modal" data-target="#opponentNotesModal">
              <div className="col">
                {opponent.notes}
              </div>
            </button>
          </div>
        </div>
          <OpponentAgeModal editOpponentInDatabase={props.editOpponentInDatabase} opponent={opponent} />
          <OpponentHandednessModal editOpponentInDatabase={props.editOpponentInDatabase} opponent={opponent} />
          <OpponentUTRModal editOpponentInDatabase={props.editOpponentInDatabase} opponent={opponent} />
          <OpponentNotesModal editOpponentInDatabase={props.editOpponentInDatabase} opponent={opponent} />
          <OpponentNameModal editOpponentInDatabase={props.editOpponentInDatabase} opponent={opponent} />
      </section>
    )
  } else {
    return <h3>Opponent Does Not Exist</h3>
  }
}

export default withRouter(OpponentCard)
