import React from 'react';
import OpponentFormModal from './OpponentFormModal'
import editPencil from '../images/edit-pencil.png'
import { NavLink, Route } from 'react-router-dom'
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

        <div className="container-fluid px-4">
          <div className="row justify-content-center mt-2">
            <div className="col-md-2">
              <b>Played In:</b>
              <NavLink to={`/matches/view/${opponent.match.id}`} className="main-content-link">{match_round_display(opponent.match)}</NavLink>
              of
              <NavLink to={`/tournaments/view/${opponent.match.tournament.id}`} className="main-content-link">{opponent.match.tournament.title}</NavLink>
              - {opponent.match.result}
            </div>
            <div className="col-md-3 text-center">
              <p><b>Age:</b> {opponent.age}</p>
            </div>
            <div className="col-md-3 text-center">
              <p><b>Plays:</b> {opponent.handedness} handed</p>
            </div>
            <div className="col-md-3 text-center">
              <p><b>UTR:</b> {opponent.utr}</p>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-3">
              <button className="btn" data-toggle="modal" data-target="#matchFormModal">
                <i className="fas fa-edit"></i><span className="ml-2 font-italic">Edit Opponent</span>
              </button>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col">
            <h3>Notes:</h3>
          </div>
        </div>
        <div className="row mt-1">
          <div className="col">
            {opponent.notes}
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
