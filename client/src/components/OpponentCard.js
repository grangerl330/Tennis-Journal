import React from 'react';
import OpponentFormModal from './OpponentFormModal'
import tournamentDrawIcon from '../images/tournament-draw-icon.png'
import ageIcon from '../images/age-icon.png'
import utrIcon from '../images/utr-icon.png'
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
            <div className="col text-center">
              <h1>{opponent.first_name} {opponent.last_name}</h1>
            </div>
          </div>
        </div>

        <div className="container-fluid px-0">
            <div className="row justify-content-center mt-2">
              <div className="col-md-3 mx-md-4 mx-lg-0 px-0">
                <div className="card card-stats text-center border-0">
                  <div className="card-body">
                    <div className="row justify-content-center">
                      <div className="col-3 col-md-6 px-0 pb-0 pt-2 text-right text-md-left text-lg-right">
                        <img src={tournamentDrawIcon} alt="tournament-draw-icon"/>
                      </div>
                      <div className="col-6 mx-0 px-0">
                        <div className="row justify-content-center mx-0">
                          <h5 className="card-title"><NavLink to={`/matches/${opponent.match.id}`} className="main-content-link">{match_round_display(opponent.match)}</NavLink></h5>
                        </div>
                        <div className="row justify-content-center mx-0">
                          <NavLink to={`/tournaments/${opponent.match.tournament.id}`} className="main-content-link">{opponent.match.tournament.title}</NavLink>
                        </div>
                        <div className="row justify-content-center mx-0">
                          <p className="card-text font-italic">Played In</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mx-md-4 mx-lg-0 px-0">
                <button className="btn w-100 px-0" data-toggle="modal" data-target="#opponentFormModal">
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
                <button className="btn w-100 px-0" data-toggle="modal" data-target="#opponentFormModal">
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
                <button className="btn w-100 px-0" data-toggle="modal" data-target="#opponentFormModal">
                  <div className="card card-stats text-center border-0">
                    <div className="card-body">
                      <div className="row justify-content-center">
                        <div className="col-3 col-md-6 px-0 pb-0 pt-2 text-right text-md-left text-lg-right">
                          <img src={utrIcon} alt="utr-icon"/>
                        </div>
                        <div className="col-6 mx-0 px-0">
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
            <div className="col">
              <h1>Notes:</h1>
            </div>
          </div>
          <div className="row mt-1">
            <div className="col">
              {opponent.notes}
            </div>
          </div>
        </div>

          <OpponentFormModal editOpponentInDatabase={props.editOpponentInDatabase} opponent={opponent} />
      </section>
    )
  } else {
    return <h3>Loading...</h3>
  }

}

export default withRouter(OpponentCard)
