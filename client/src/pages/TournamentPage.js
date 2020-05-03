import React, { useEffect } from 'react';
import $ from 'jquery'
import moment from 'moment'
import BackButtonRow from '../components/tournament-page/BackButtonRow'
import TournamentTitleRow from '../components/tournament-page/TournamentTitleRow'
import TournamentAttributeRow from '../components/tournament-page/TournamentAttributeRow'
import TournamentMatchesList from '../components/tournament-page/TournamentMatchesList'
import TournamentStatDisplay from '../components/tournament-page/TournamentStatDisplay'
import TournamentInfoModal from '../components/tournament-page/TournamentInfoModal'
import DeleteTournamentModal from '../components/tournament-page/DeleteTournamentModal'
import tournamentIcon from '../images/tournament-icon.svg'

import { withRouter } from 'react-router';

const TournamentPage = (props) => {

  useEffect(() => {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover()
  })

  var tournamentId = parseInt(props.id)
  var tournament = props.currentTournament(tournamentId)

  const deleteTournament = event => {
    props.deleteTournamentFromDatabase(tournamentId)
    props.history.push('/tournaments')
  }

  const renderSurfaceIcon = (surface) => {
    return (
      <span data-toggle="tooltip" data-placement="top" title={surface}>
        <i className={`fas fa-circle fa-lg ${surface.toLowerCase()}-court`}></i>
      </span>
    )
  }

  if(tournament) {
    return (
      <section id="tournament-view-page">
        <div className="container-fluid p-0 background-light-grey">
          <div className="row py-4 background-light-grey text-green">
            <div className="col-10 px-0 mx-auto">
              <div className="row">
                <div className="col-1 ml-3 ml-md-0 px-0 text-center">
                  <img className="icon" src={tournamentIcon} alt="tournament" />
                </div>
                <div className="col-5 px-0 ml-5 ml-md-2 mr-auto my-auto">
                  <h2 className="text-green">Tournaments</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row pb-4 background-light-grey text-green">
            <div className="col-10 px-0 mx-auto bg-white shadow-light-green rounded">
              <div className="row h-100">
                <div id="tournament-page-left" className="col-12 col-md-8">
                  <BackButtonRow goBack={props.history.goBack} />
                  <TournamentTitleRow title={tournament.title} />
                  <TournamentAttributeRow name={`${moment(tournament.start_date).format('MMMM D')} - ${moment(tournament.end_date).format('D, YYYY')}`} value={tournament.location} date={true} />
                  <TournamentAttributeRow name="Division" value={tournament.age_category} />
                  <TournamentAttributeRow name="Surface" value={renderSurfaceIcon(tournament.surface)} />
                  <TournamentAttributeRow name="Draw Size" value={tournament.draw_size} />
                  <TournamentAttributeRow name="Points" value={tournament.points} />
                  <div className="row mt-3 ml-3 ml-md-5 pr-0 justify-content-start">
                    <div className="col-11">
                      <hr className="light-grey-line" />
                    </div>
                  </div>
                  <TournamentMatchesList matches={props.matches} tournamentId={tournament.id} />
                </div>
                <div id="tournament-page-right" className="col-12 col-md-4 pl-0 h-md-100">
                  <TournamentStatDisplay tournament={tournament} matches={props.matches} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <TournamentInfoModal tournament={tournament}/>
        <DeleteTournamentModal tournamentId={tournament.id} deleteTournament={deleteTournament} />
      </section>
    )
  } else {
    return (
      <div>Not Found</div>
    )
  }
}

export default withRouter(TournamentPage)