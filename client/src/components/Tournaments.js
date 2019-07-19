import React from 'react';
import { NavLink, Route } from 'react-router-dom'
import TournamentForm from './TournamentForm'

const Tournaments = (props) => {
    const sortedTournaments = props.tournaments.sort(function(a,b) {return parseFloat(a.id) - parseFloat(b.id)})
    const renderTournaments = sortedTournaments.map(tournament =>
      <div key={tournament.id}>
        <p><NavLink className="main-content-link" to={`/tournaments/view/${tournament.id}`}>{tournament.title}</NavLink></p>
      </div>
    )

    return (
      <div className="main-content-text">
        <h2>Tournaments List</h2>
        {renderTournaments}
        <p><NavLink className="main-content-link" to={`/tournaments/add_tournament`}>Add Tournament</NavLink></p>
        <Route exact path='/tournaments/add_tournament' render={() => <TournamentForm sendTournamentToDatabase={props.addTournamentToDatabase} add="add"/>}/>
      </div>
    )
}

export default Tournaments
