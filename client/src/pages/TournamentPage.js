import React, { useEffect } from 'react';
import $ from 'jquery'
import moment from 'moment'
import TitleRow from '../components/TitleRow'
import BackButtonRow from '../components/BackButtonRow'
import ItemTitleRow from '../components/ItemTitleRow'
import ItemAttributeRow from '../components/ItemAttributeRow'
import TournamentMatchesList from '../components/tournament-page/TournamentMatchesList'
import TournamentStatDisplay from '../components/tournament-page/TournamentStatDisplay'
import TournamentModal from '../components/tournament-page/TournamentModal'
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
          <TitleRow icon={tournamentIcon} title="Tournaments" />
          <div className="row pb-4 background-light-grey text-green">
            <div className="col-10 px-0 mx-auto bg-white shadow-light-green rounded">
              <div className="row h-100">
                <div id="tournament-page-left" className="col-12 col-md-8">
                  <BackButtonRow goBack={props.history.goBack} />
                  <ItemTitleRow title={tournament.title} page="tournament"/>
                  <ItemAttributeRow name={`${moment(tournament.start_date).format('MMMM D')} - ${moment(tournament.end_date).format('D, YYYY')}`} value={tournament.location} date={true} />
                  <ItemAttributeRow name="Division" value={tournament.age_category} />
                  <ItemAttributeRow name="Surface" value={renderSurfaceIcon(tournament.surface)} />
                  <ItemAttributeRow name="Draw Size" value={tournament.draw_size} />
                  <ItemAttributeRow name="Points" value={tournament.points} />
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

        <TournamentModal tournament={tournament} type="Edit" editTournamentInDatabase={props.editTournamentInDatabase}/>
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
