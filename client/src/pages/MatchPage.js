import React, { useEffect } from 'react';
import moment from 'moment';
import $ from 'jquery'
import TitleRow from '../components/general/TitleRow';
import BackButtonRow from '../components/general/BackButtonRow';
import ItemTitleRow from '../components/general/ItemTitleRow';
import ItemAttributeRow from '../components/general/ItemAttributeRow';
import NotesRow from '../components/general/NotesRow';
import MatchModal from '../components/match-page/MatchModal';
import MatchStatsModal from '../components/match-page/MatchStatsModal';
import LiveStatsModal from '../components/match-page/LiveStatsModal';
import DeleteMatchModal from '../components/match-page/DeleteMatchModal';
import NotFound from './NotFound.js';
import matchesIcon from '../images/matches-icon.svg';
import MatchStatDisplay from '../components/match-page/MatchStatDisplay';
import { withRouter } from 'react-router';

const MatchPage = (props) => {
  useEffect(() => {
    $('[data-toggle="tooltip"]').tooltip();
  })

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
          <TitleRow icon={matchesIcon} title="Matches" page="match" />
          <div className="row pb-4 background-light-grey text-green">
            <div className="col-10 px-0 mx-auto bg-white shadow-light-green rounded">
              <BackButtonRow goBack={props.history.goBack} />
              <div className="row h-100">
                <div id="tournament-page-left" className="col-12 col-md-8">
                  <ItemTitleRow title={matchRoundDisplay(currentMatch)} page="match" />
                  <ItemAttributeRow name={`${moment(currentMatch.tournament.start_date).format('MMMM D')} - ${moment(currentMatch.tournament.end_date).format('D, YYYY')}`} value="" date={true} />
                  <ItemAttributeRow name="Time" value={moment.utc(currentMatch.time).format('hh:mm a')} />
                  <ItemAttributeRow name="Result" value={<span className={resultTextColor()}>{currentMatch.result}</span>} />
                  <ItemAttributeRow name="Score" value={currentMatch.score} />
                  <ItemAttributeRow name="Opponent" value={opponentFullName(currentMatch.opponent)} link={`/opponents/${currentMatch.opponent.id}`}/>
                  <NotesRow name="Notes" value={currentMatch.notes} />
                </div>
                <div id="tournament-page-right" className="col-12 col-md-4 pl-0 h-md-100">
                  <MatchStatDisplay match={currentMatch} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <MatchModal currentMatch={currentMatch} tournament={currentMatch.tournament} editMatchInDatabase={props.editMatchInDatabase} matches={tournamentMatches} type="Edit"/>
        <MatchStatsModal currentMatch={currentMatch} sendMatchToDatabase={props.editMatchInDatabase} matches={tournamentMatches} edit="edit"/>
        <LiveStatsModal currentMatch={currentMatch} sendMatchToDatabase={props.editMatchInDatabase} matches={tournamentMatches} edit="edit"/>
        <DeleteMatchModal matchId={currentMatch.id} deleteMatch={deleteMatch} />
      </section>
    )
  } else {
    return <NotFound />
  }

}



export default withRouter(MatchPage)
