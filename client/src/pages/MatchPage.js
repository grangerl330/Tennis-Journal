import React from 'react';
import moment from 'moment'
import TitleRow from '../components/TitleRow'
import BackButtonRow from '../components/BackButtonRow'
import ItemTitleRow from '../components/ItemTitleRow'
import ItemAttributeRow from '../components/ItemAttributeRow'
import NotesRow from '../components/NotesRow'
import MatchInfoModal from '../components/match-page/MatchInfoModal'
import MatchNotesModal from '../components/match-page/MatchNotesModal'
import MatchStatsModal from '../components/match-page/MatchStatsModal'
import LiveStatsModal from '../components/match-page/LiveStatsModal'
import DeleteMatchModal from '../components/match-page/DeleteMatchModal'
import NotFound from './NotFound.js'
import headToHeadIcon from '../images/head-to-head.png'
import scoreboardIcon from '../images/scoreboard.png'
import tournamentIcon from '../images/tournament-icon.svg'
import MatchStatDisplay from '../components/MatchStatDisplay'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'

const MatchPage = (props) => {
  let matchId = parseInt(props.id)
  let currentMatch = props.currentMatch(matchId)

  const matchRoundDisplay = (match) => {
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

  const resultTextColor = () => {
    if(currentMatch.result === "Won") {
      return 'text-green'
    } else if(currentMatch.result === "Lost") {
      return 'text-red'
    }
  }

  const renderSurfaceIcon = (surface) => {
    return (
      <span data-toggle="tooltip" data-placement="top" title={surface}>
        <i className={`fas fa-circle fa-lg ${surface.toLowerCase()}-court`}></i>
      </span>
    )
  }

  const opponentFullName = (opponent) => {
    return `${opponent.first_name} ${opponent.last_name}`
  }

  const deleteMatch = event => {
    props.deleteMatchFromDatabase(matchId)
    props.history.push(`/tournaments/${currentMatch.tournament.id}`)
  }

  if(currentMatch) {
    let tournamentMatches = props.findTournamentMatches(props.matches, currentMatch.tournament.id)

    return (
      <section id="match-view-page">
        <div className="container-fluid p-0 background-light-grey">
          <TitleRow icon={tournamentIcon} title="Tournaments" />
          <div className="row pb-4 background-light-grey text-green">
            <div className="col-10 px-0 mx-auto bg-white shadow-light-green rounded">
              <div className="row h-100">
                <div id="tournament-page-left" className="col-12 col-md-8">
                  <BackButtonRow goBack={props.history.goBack} />
                  <ItemTitleRow title={matchRoundDisplay(currentMatch)} page="match" />
                  <ItemAttributeRow name={`${moment(currentMatch.tournament.start_date).format('MMMM D')} - ${moment(currentMatch.tournament.end_date).format('D, YYYY')}`} value="" date={true} />
                  <ItemAttributeRow name="Result" value={<span className={resultTextColor()}>{currentMatch.result}</span>} />
                  <ItemAttributeRow name="Score" value={currentMatch.score} />
                  <ItemAttributeRow name="Opponent" value={opponentFullName(currentMatch.opponent)} />
                  <NotesRow name="Notes" value={currentMatch.notes} />
                </div>
                <div id="tournament-page-right" className="col-12 col-md-4 pl-0 h-md-100">
                  <MatchStatDisplay tournament={currentMatch.tournament} matches={props.matches} />
                </div>
              </div>
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
    return <NotFound />
  }

}



export default withRouter(MatchPage)
