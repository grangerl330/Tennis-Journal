import React from 'react';
import moment from 'moment'
import MatchResultModal from './modals/Match/MatchResultModal'
import MatchScoreModal from './modals/Match/MatchScoreModal'
import MatchDateModal from './modals/Match/MatchDateModal'
import MatchTimeModal from './modals/Match/MatchTimeModal'
import MatchRoundModal from './modals/Match/MatchRoundModal'
import MatchNotesModal from './modals/Match/MatchNotesModal'
import DeleteMatchModal from './DeleteMatchModal'
import headToHeadIcon from '../images/head-to-head.png'
import scoreboardIcon from '../images/scoreboard.png'
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
          <div className="row justify-content-center">
            <div className="col-4 ml-auto px-0 d-flex justify-content-end">
              <button className="btn text-white py-0" data-toggle="modal" data-target="#matchRoundModal">
                <h1>
                  {match_round_display(currentMatch)} -
                </h1>
              </button>
            </div>
            <div className="col-4 mr-auto px-0 text-left">
              <h1>
                <NavLink className="text-white" to={`/tournaments/${currentMatch.tournament.id}`}>{currentMatch.tournament.title}</NavLink>
              </h1>
            </div>
          </div>
        </div>

        <div className="container px-0">
            <div className="row justify-content-center mt-2">
              <div className="col-md-3 pl-5">
                <NavLink to={`/opponents/${currentMatch.opponent.id}`} className="btn w-100 shadow-none">
                  <div className="row justify-content-center">
                    <div className="col-5">
                      <img src={headToHeadIcon} alt="head-to-head-icon"/>
                    </div>
                    <div className="col-7">
                      <div className="row">
                        <h6 className="font-italic text-info">Vs</h6>
                      </div>
                      <div className="row">
                        <h5>{currentMatch.opponent.first_name} {currentMatch.opponent.last_name}</h5>
                      </div>
                    </div>
                  </div>
                </NavLink>
              </div>
              <div className="col-md-2 pl-md-5 pr-md-0 text-center">
                <button className="btn shadow-none btn-block px-0" data-toggle="modal" data-target="#matchResultModal">
                  <div className="row justify-content-center">
                    <div className="col-5">
                      <i className="fas fa-clipboard-check fa-3x home-icon"></i>
                    </div>
                    <div className="col-7">
                      <div className="row">
                        <h6 className="font-italic text-info">Result</h6>
                      </div>
                      <div className="row">
                        <h5>{currentMatch.result}</h5>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
              <div className="col-md-3 pl-md-5 pr-md-0 text-center">
                <button className="btn shadow-none btn-block px-0" data-toggle="modal" data-target="#matchScoreModal">
                  <div className="row justify-content-center">
                    <div className="col-5">
                      <img src={scoreboardIcon} alt="age-icon"/>
                    </div>
                    <div className="col-7">
                      <div className="row">
                        <h6 className="font-italic text-info">Score</h6>
                      </div>
                      <div className="row">
                        <h5>{currentMatch.score}</h5>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
              <div className="col-md-2 pr-md-5">
                <button className="btn shadow-none btn-block px-0" data-toggle="modal" data-target="#matchDateModal">
                  <div className="row justify-content-center">
                    <div className="col-5">
                      <i className="fas fa-calendar-day fa-3x home-icon"></i>
                    </div>
                    <div className="col-7">
                      <div className="row">
                        <h6 className="font-italic text-info">Date</h6>
                      </div>
                      <div className="row">
                        <h5>{moment(currentMatch.date).format('MM/DD/YY')}</h5>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
              <div className="col-md-2 pr-md-5 pl-md-0 text-center">
                <button className="btn shadow-none btn-block px-0" data-toggle="modal" data-target="#matchTimeModal">
                  <div className="row justify-content-center">
                    <div className="col-5">
                      <i className="fas fa-clock fa-3x home-icon"></i>
                    </div>
                    <div className="col-7">
                      <div className="row">
                        <h6 className="font-italic text-info">Time</h6>
                      </div>
                      <div className="row">
                        <h5>{moment.utc(currentMatch.time).format('hh:mm a')}</h5>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
        </div>

        <div className="container-fluid">
            <div className="row mt-4">
            <button className="btn shadow-none" data-toggle="modal" data-target="#matchNotesModal">
              <div className="col">
                <h1>Notes:</h1>
              </div>
            </button>
            </div>
            <div className="row mt-1">
              <button className="btn shadow-none text-left" data-toggle="modal" data-target="#matchNotesModal">
                <div className="col">
                  {currentMatch.notes}
                </div>
              </button>
            </div>
        </div>

        <div className="container-fluid">
          <div className="row my-5 justify-content-center">
            <div className="col-md-3">
              <button className="btn btn-danger btn-block" data-toggle="modal" data-target="#deleteMatchModal">
                <i className="fas fa-trash"></i> Delete Match
              </button>
            </div>
          </div>
        </div>
          <MatchResultModal currentMatch={currentMatch} sendMatchToDatabase={props.editMatchInDatabase} matches={tournamentMatches} edit="edit"/>
          <MatchScoreModal currentMatch={currentMatch} sendMatchToDatabase={props.editMatchInDatabase} matches={tournamentMatches} edit="edit"/>
          <MatchDateModal currentMatch={currentMatch} sendMatchToDatabase={props.editMatchInDatabase} matches={tournamentMatches} edit="edit"/>
          <MatchTimeModal currentMatch={currentMatch} sendMatchToDatabase={props.editMatchInDatabase} matches={tournamentMatches} edit="edit"/>
          <MatchRoundModal currentMatch={currentMatch} sendMatchToDatabase={props.editMatchInDatabase} matches={tournamentMatches} edit="edit"/>
          <MatchNotesModal currentMatch={currentMatch} sendMatchToDatabase={props.editMatchInDatabase} matches={tournamentMatches} edit="edit"/>
          <DeleteMatchModal matchId={currentMatch.id} deleteMatch={deleteMatch} />
      </section>
    )
  } else {
    return <h3>Loading...</h3>
  }

}



export default withRouter(MatchCard)
