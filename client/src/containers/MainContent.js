import React from 'react'
import MatchForm from '../components/MatchForm'
import { addMatchToDatabase, deleteMatchFromDatabase } from '../actions/matches'
import TournamentForm from '../components/TournamentForm'
import { addTournamentToDatabase, deleteTournamentFromDatabase } from '../actions/tournaments'
import TournamentCard from '../components/TournamentCard'
import MatchCard from '../components/MatchCard'
import Profile from '../components/Profile'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'


const MainContent = (props) => {
  const currentTournament = (id) => {
    var selectedTournament = props.tournaments.find(tournament => {
      return tournament.id === id
    })

    return selectedTournament
  }

  const currentMatch = (id) => {
    var selectedMatch = props.matches.find(match => {
      return match.id === id
    })

    return selectedMatch
  }

  return(
    <div className="main-content">
      <Switch>
        <Route exact path='/matches/add_match' render={() => <MatchForm addMatchToDatabase={props.addMatchToDatabase}/>}/>
        <Route exact path='/tournaments/add_tournament' render={() => <TournamentForm addTournamentToDatabase={props.addTournamentToDatabase}/>}/>
        <Route exact path='/tournaments/:tournamentId' render={(urlData) => <TournamentCard id={urlData.match.params.tournamentId} currentTournament={currentTournament} deleteTournamentFromDatabase={props.deleteTournamentFromDatabase}/>}/>
        <Route exact path='/matches/:matchId' render={(urlData) => <MatchCard id={urlData.match.params.matchId} currentMatch={currentMatch} deleteMatchFromDatabase={props.deleteMatchFromDatabase}/>}/>
        <Route exact path='/profile' render={() => <Profile currentUser={props.currentUser}/>}/>
      </Switch>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    tournaments: state.tournaments,
    matches: state.matches,
    currentUser: state.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTournamentToDatabase: tournament => dispatch(addTournamentToDatabase(tournament)),
    addMatchToDatabase: match => dispatch(addMatchToDatabase(match)),
    deleteMatchFromDatabase: matchId => dispatch(deleteMatchFromDatabase(matchId)),
    deleteTournamentFromDatabase: tournamentId => dispatch(deleteTournamentFromDatabase(tournamentId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContent)
