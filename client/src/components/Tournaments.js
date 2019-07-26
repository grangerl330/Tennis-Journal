import React from 'react';
import moment from 'moment'
import { NavLink, Route } from 'react-router-dom'
import TournamentForm from './TournamentForm'

const Tournaments = (props) => {
    const sortedTournaments = props.tournaments.sort(function(a,b) {return moment(a.start_date) - moment(b.start_date)})

    const renderTournaments = sortedTournaments.map(tournament =>
      <div key={tournament.id}>
        <p><NavLink className="main-content-link" to={`/tournaments/view/${tournament.id}`}>{tournament.title}</NavLink></p>
      </div>
    )

    return (
      <div className="main-content-text">
        {renderTournaments}
        <p><NavLink className="button" to={`/tournaments/add_tournament`}>Add Tournament</NavLink></p>
        <Route exact path='/tournaments/add_tournament' render={() => <TournamentForm sendTournamentToDatabase={props.addTournamentToDatabase} add="add"/>}/>
      </div>
    )
}

export default Tournaments
