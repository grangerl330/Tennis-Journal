import React from 'react';
import moment from 'moment'
import MatchFormModal from './MatchFormModal'
import DeleteMatchModal from './DeleteMatchModal'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'

const MatchCard = (props) => {
  var matchId = parseInt(props.id)
  var currentMatch = props.currentMatch(matchId)

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

  const deleteMatch = event => {
    props.deleteMatchFromDatabase(matchId)
    props.history.push(`/tournaments/${currentMatch.tournament.id}`)
  }

  if(currentMatch) {
    var tournamentMatches = props.findTournamentMatches(props.matches, currentMatch.tournament.id)

    return (
      <section id="match-card-page">
        <div className="container-fluid py-2 bg-info text-white mb-4">
          <div className="row">
            <div className="col text-center">
              <h1>
                {match_round_display(currentMatch)} - <NavLink className="text-white" to={`/tournaments/${currentMatch.tournament.id}`}>{currentMatch.tournament.title}</NavLink>
              </h1>
            </div>
          </div>
        </div>

        <div className="container-fluid px-4">
          <div className="row justify-content-center mt-2">
            <div className="col-md-2">
              <p><b>vs:</b> <NavLink to={`/opponents/view/${currentMatch.opponent.id}`} className="main-content-link">{currentMatch.opponent.first_name} {currentMatch.opponent.last_name}</NavLink></p>
            </div>
            <div className="col-md-2">
              <p><b>Result:</b> {currentMatch.result}</p>
            </div>
            <div className="col-md-2">
              <p><b>Score:</b> {currentMatch.score}</p>
            </div>
            <div className="col-md-2">
              <p><b>Date:</b> {moment(currentMatch.date).format('MM/DD/YYYY')}</p>
            </div>
            <div className="col-md-2">
              <p><b>Time:</b> {moment.utc(currentMatch.time).format('hh:mm a')}</p>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-2">
              <button className="btn" data-toggle="modal" data-target="#matchFormModal">
                <i className="fas fa-edit"></i><span className="ml-2 font-italic">Edit Match</span>
              </button>
            </div>
            <div className="col-md-3">
              <button className="btn btn-danger btn-block" data-toggle="modal" data-target="#deleteMatchModal">
                <i className="fas fa-trash"></i> Delete Match
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
            {currentMatch.notes}
          </div>
        </div>
          <MatchFormModal currentMatch={currentMatch} sendMatchToDatabase={props.editMatchInDatabase} matches={tournamentMatches} edit="edit"/>
          <DeleteMatchModal matchId={currentMatch.id} deleteMatch={deleteMatch} />
      </section>
    )
  } else {
    return <h3>Loading...</h3>
  }

}



export default withRouter(MatchCard)
