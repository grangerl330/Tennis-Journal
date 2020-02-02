import React from 'react';
import moment from 'moment'
import MatchInfoModal from '../modals/Match/MatchInfoModal'
import MatchNotesModal from '../modals/Match/MatchNotesModal'
import MatchStatsModal from '../modals/Match/MatchStatsModal'
import LiveStatsModal from '../modals/Match/LiveStatsModal'
import DeleteMatchModal from '../modals/Delete/DeleteMatchModal'
import headToHeadIcon from '../../images/head-to-head.png'
import scoreboardIcon from '../../images/scoreboard.png'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'

const MatchCard = (props) => {
  let matchId = parseInt(props.id)
  let currentMatch = props.currentMatch(matchId)

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
    let tournamentMatches = props.findTournamentMatches(props.matches, currentMatch.tournament.id)

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
            </div>
            <div className="col-md-3 pl-md-5 pr-md-0 text-center">
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
            </div>
            <div className="col-md-2 pr-md-5">
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
            </div>
            <div className="col-md-2 pr-md-5 pl-md-0 text-center">
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
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row mt-3 mb-3 justify-content-center">
            <div className="col-md-2">
              <button className="btn btn-info btn-block" data-toggle="modal" data-target="#matchInfoModal">
                <i className="fas fa-edit"></i> Edit Info
              </button>
            </div>
            <div className="col-md-2">
              <button className="btn btn-danger btn-block" data-toggle="modal" data-target="#deleteMatchModal">
                <i className="fas fa-trash"></i> Delete Match
              </button>
            </div>
          </div>
        </div>

        <div className="container border rounded pb-4 mt-5 mb-4">
          <div className="row justify-content-center bg-secondary">
          <button className="btn p-0 shadow-none text-white" data-toggle="modal" data-target="#matchNotesModal">
            <div className="col">
              <h1>Stats</h1>
            </div>
          </button>
          </div>
          <div className="row mt-3">
            <div className="col text-center">
              <h5 className="font-italic text-info mb-3">Unforced Errors</h5>
              <h6 className="mb-3">Forehand: {currentMatch.forehand_unforced_errors}</h6>
              <h6 className="mb-3">Backhand: {currentMatch.backhand_unforced_errors}</h6>
              <h6 className="mb-3">Slice: {currentMatch.slice_unforced_errors}</h6>
              <h6 className="mb-3">Forehand Volley: {currentMatch.forehand_volley_unforced_errors}</h6>
              <h6 className="mb-3">Backhand Volley: {currentMatch.backhand_volley_unforced_errors}</h6>
              <h6 className="mb-3">Overhead: {currentMatch.overhead_unforced_errors}</h6>
            </div>
            <div className="col text-center">
              <h5 className="font-italic text-info mb-3">Forced Errors</h5>
              <h6 className="mb-3">Forehand: {currentMatch.forehand_forced_errors}</h6>
              <h6 className="mb-3">Backhand: {currentMatch.backhand_forced_errors}</h6>
              <h6 className="mb-3">Slice: {currentMatch.slice_forced_errors}</h6>
              <h6 className="mb-3">Forehand Volley: {currentMatch.forehand_volley_forced_errors}</h6>
              <h6 className="mb-3">Backhand Volley: {currentMatch.backhand_volley_forced_errors}</h6>
              <h6 className="mb-3">Overhead: {currentMatch.overhead_forced_errors}</h6>
            </div>
            <div className="col text-center">
              <h5 className="font-italic text-info mb-3">Winners</h5>
              <h6 className="mb-3">Forehand: {currentMatch.forehand_winners}</h6>
              <h6 className="mb-3">Backhand: {currentMatch.backhand_winners}</h6>
              <h6 className="mb-3">Slice: {currentMatch.slice_winners}</h6>
              <h6 className="mb-3">Forehand Volley: {currentMatch.forehand_volley_winners}</h6>
              <h6 className="mb-3">Backhand Volley: {currentMatch.backhand_volley_winners}</h6>
              <h6 className="mb-3">Overhead: {currentMatch.overhead_winners}</h6>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col text-center">
              <h5 className="font-italic text-info mb-3">Double Faults</h5>
              <h6 className="mb-3">Deuce Side: {currentMatch.deuce_side_double_faults}</h6>
              <h6 className="mb-3">Ad Side: {currentMatch.ad_side_double_faults}</h6>
            </div>
            <div className="col text-center">
              <h5 className="font-italic text-info mb-3">Aces</h5>
              <h6 className="mb-3">Deuce Side: {currentMatch.deuce_side_aces}</h6>
              <h6 className="mb-3">Ad Side: {currentMatch.ad_side_aces}</h6>
            </div>
          </div>
          <div className="row mt-4 mb-0 justify-content-center">
            <div className="col-md-2">
              <button className="btn btn-info btn-block" data-toggle="modal" data-target="#matchStatsModal">
                <i className="fas fa-edit"></i> Edit Stats
              </button>
            </div>
            <div className="col-md-3">
              <button className="btn btn-info btn-block w-75" data-toggle="modal" data-target="#liveStatsModal">
                <i className="fas fa-rss mr-2"></i> Live Stat Tracker
              </button>
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
              {currentMatch.notes}
            </div>
          </div>
          <div className="row mt-5 mb-0 justify-content-center">
            <div className="col-md-2">
              <button className="btn btn-info btn-block" data-toggle="modal" data-target="#matchNotesModal">
                <i className="fas fa-edit"></i> Edit Notes
              </button>
            </div>
          </div>
        </div>

          <MatchInfoModal currentMatch={currentMatch} sendMatchToDatabase={props.editMatchInDatabase} matches={tournamentMatches} edit="edit"/>
          <MatchStatsModal currentMatch={currentMatch} sendMatchToDatabase={props.editMatchInDatabase} matches={tournamentMatches} edit="edit"/>
          <LiveStatsModal currentMatch={currentMatch} sendMatchToDatabase={props.editMatchInDatabase} matches={tournamentMatches} edit="edit"/>
          <MatchNotesModal currentMatch={currentMatch} sendMatchToDatabase={props.editMatchInDatabase} matches={tournamentMatches} edit="edit"/>
          <DeleteMatchModal matchId={currentMatch.id} deleteMatch={deleteMatch} />
      </section>
    )
  } else {
    return <h3>Loading...</h3>
  }

}



export default withRouter(MatchCard)
