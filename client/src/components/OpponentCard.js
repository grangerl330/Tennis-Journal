import React from 'react';
import OpponentAgeModal from './modals/Opponent/OpponentAgeModal'
import OpponentHandednessModal from './modals/Opponent/OpponentHandednessModal'
import OpponentUTRModal from './modals/Opponent/OpponentUTRModal'
import OpponentNotesModal from './modals/Opponent/OpponentNotesModal'
import OpponentNameModal from './modals/Opponent/OpponentNameModal'
import tournamentDrawIcon from '../images/tournament-draw-icon.png'
import tennisBallIcon from '../images/tennis-ball-filled-icon.png'
import ageIcon from '../images/age-icon.png'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'

const OpponentCard = (props) => {
  var opponentId = parseInt(props.id)
  var opponent = props.currentOpponent(opponentId)

  const match_round_display = (match) => {
    if(match.round > 8){
      return `Round of ${match.round}`
    } else if(match.round === 8){
      return "Quarterfinal"
    } else if(match.round === 4){
      return "Semifinal"
    } else if(match.round === 2){
      return "Final"
    }
  }

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

        <div className="container-fluid px-0">
            <div className="row justify-content-center mt-2">
              <div className="col-md-3 mx-md-4 mx-lg-0 px-0">
                <NavLink to={`/matches/${opponent.match.id}`} className="btn shadow-none w-100 shadow-none">
                  <div className="card card-stats text-center border-0">
                    <div className="card-body">
                      <div className="row justify-content-center">
                        <div className="col-3 col-md-6 px-0 pb-0 pt-2 text-right text-md-left text-lg-right">
                          <img src={tournamentDrawIcon} alt="tournament-draw-icon"/>
                        </div>
                        <div className="col-6 mx-0 px-0">
                          <div className="row justify-content-center mx-0">
                            <h5 className="card-title">{match_round_display(opponent.match)}</h5>
                          </div>
                          <div className="row justify-content-center mx-0">
                            {opponent.match.tournament.title}
                          </div>
                          <div className="row justify-content-center mx-0">
                            <p className="card-text font-italic">Played In</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </NavLink>
              </div>
              <div className="col-md-3 mx-md-4 mx-lg-0 px-0">
                <button className="btn shadow-none w-100 px-0" data-toggle="modal" data-target="#opponentAgeModal">
                  <div className="card card-stats text-center border-0">
                    <div className="card-body">
                      <div className="row justify-content-center">
                        <div className="col-3 col-md-6 px-0 pb-0 pt-2 text-right text-md-left text-lg-right">
                          <img src={ageIcon} alt="age-icon"/>
                        </div>
                        <div className="col-6 mx-0 px-0">
                          <div className="row justify-content-center mx-0">
                            <h5 className="card-title">{opponent.age}</h5>
                          </div>
                          <div className="row justify-content-center mx-0">
                            <p className="card-text font-italic">Age</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
              <div className="col-md-3 mx-md-4 mx-lg-0 px-0">
                <button className="btn shadow-none w-100 px-0" data-toggle="modal" data-target="#opponentHandednessModal">
                  <div className="card card-stats text-center border-0">
                    <div className="card-body">
                      <div className="row justify-content-center">
                        <div className="col-3 col-md-6 px-0 pb-0 pt-2 text-right text-md-left text-lg-right">
                          <i className="fas fa-hand-paper fa-3x home-icon"></i>
                        </div>
                        <div className="col-6 mx-0 px-0 px-lg-2">
                          <div className="row justify-content-center mx-0">
                            <h5 className="card-title">{opponent.handedness} handed</h5>
                          </div>
                          <div className="row justify-content-center mx-0">
                            <p className="card-text font-italic">Plays</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
              <div className="col-md-3 mx-md-4 mx-lg-0 px-0">
                <button className="btn shadow-none w-100 px-0" data-toggle="modal" data-target="#opponentUTRModal">
                  <div className="card card-stats text-center border-0">
                    <div className="card-body">
                      <div className="row justify-content-center">
                        <div className="col-3 col-md-6 col-lg-3 px-0 pb-0 pt-2 text-center text-md-left text-lg-center">
                          <img src={tennisBallIcon} alt="utr-icon"/>
                        </div>
                        <div className="col-3 mx-0 ml-0 px-0">
                          <div className="row justify-content-center mx-0">
                            <h5 className="card-title">{opponent.utr}</h5>
                          </div>
                          <div className="row justify-content-center mx-0">
                            <p className="card-text font-italic">UTR</p>
                          </div>
                        </div>
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
            <button className="btn shadow-none text-left" data-toggle="modal" data-target="#opponentNotesModal">
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
