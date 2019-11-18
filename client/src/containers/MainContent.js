import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import Profile from '../components/Profile'
import { updateCurrentUserInDatabase, updateCurrentUserPasswordInDatabase, deleteCurrentUserFromDatabase } from '../actions/currentUser'

import Home from '../components/Home'
import { getCurrentUser } from '../actions/currentUser'

import Matches from '../components/lists/Matches'
import MatchCard from '../components/MatchCard'
import MatchForm from '../components/MatchForm'
import { fetchMatches } from '../actions/matches'
import { addMatchToDatabase, editMatchInDatabase, deleteMatchFromDatabase } from '../actions/matches'

import Tournaments from '../components/lists/Tournaments'
import TournamentCard from '../components/TournamentCard'
import TournamentForm from '../components/TournamentForm'
import { fetchTournaments } from '../actions/tournaments'
import { addTournamentToDatabase, editTournamentInDatabase, deleteTournamentFromDatabase } from '../actions/tournaments'

import Opponents from '../components/lists/Opponents'
import OpponentCard from '../components/OpponentCard'
import { fetchOpponents, editOpponentInDatabase } from '../actions/opponents'

class MainContent extends Component {

  componentDidMount() {
    this.props.fetchMatches()
    this.props.fetchTournaments()
    this.props.fetchOpponents()
  }

  currentTournament = (id) => {
    var selectedTournament = this.props.tournaments.find(tournament => {
      return tournament.id === id
    })

    return selectedTournament
  }

  currentMatch = (id) => {
    var selectedMatch = this.props.matches.find(match => {
      return match.id === id
    })

    return selectedMatch
  }

  currentOpponent = (id) => {
    var selectedOpponent = this.props.opponents.find(opponent => {
      return opponent.id === id
    })

    return selectedOpponent
  }

  findTournamentMatches = (matches, id) => {
    var filteredMatches = matches.filter(match => {
      return match.tournament_id === parseInt(id)
    })

    return filteredMatches
  }

  render() {
    return(
      <div id="main-content">
        <Switch>
          <Route exact path='/tournaments/add' render={() => <TournamentForm sendTournamentToDatabase={this.props.addTournamentToDatabase} add="add"/>} />
          <Route exact path='/tournaments/:tournamentId/add' render={(urlData) => <MatchForm tournamentId={urlData.match.params.tournamentId} tournament={this.currentTournament} matches={this.findTournamentMatches(this.props.matches, urlData.match.params.tournamentId)}/>}/>
          <Route path='/tournaments/:tournamentId' render={(urlData) => <TournamentCard id={urlData.match.params.tournamentId} currentTournament={this.currentTournament} addMatchToDatabase={this.props.addMatchToDatabase} editTournamentInDatabase={this.props.editTournamentInDatabase} deleteTournamentFromDatabase={this.props.deleteTournamentFromDatabase} matches={this.findTournamentMatches(this.props.matches, urlData.match.params.tournamentId)}/>}/>
          <Route path='/tournaments' render={() => <Tournaments tournaments={this.props.tournaments} addTournamentToDatabase={this.props.addTournamentToDatabase} />} />
          <Route path='/matches/:matchId' render={(urlData) => <MatchCard id={urlData.match.params.matchId} currentMatch={this.currentMatch} matches={this.props.matches} editMatchInDatabase={this.props.editMatchInDatabase} deleteMatchFromDatabase={this.props.deleteMatchFromDatabase} findTournamentMatches={this.findTournamentMatches}/>}/>
          <Route path='/matches' render={() => <Matches matches={this.props.matches} addMatchToDatabase={this.props.addMatchToDatabase}/>} />
          <Route path='/opponents/:opponentId' render={(urlData) => <OpponentCard id={urlData.match.params.opponentId} currentOpponent={this.currentOpponent} editOpponentInDatabase={this.props.editOpponentInDatabase}/>}/>
          <Route path='/opponents' render={() => <Opponents opponents={this.props.opponents}/>} />
          <Route exact path='/profile/edit' render={() => <Profile currentUser={this.props.currentUser} updateCurrentUserInDatabase={this.props.updateCurrentUserInDatabase} updateCurrentUserPasswordInDatabase={this.props.updateCurrentUserPasswordInDatabase} deleteCurrentUserFromDatabase={this.props.deleteCurrentUserFromDatabase}/>}/>
          <Route path='/home' render={() => <Home currentUser={this.props.currentUser} updateCurrentUserInDatabase={this.props.updateCurrentUserInDatabase} getCurrentUser={this.props.getCurrentUser}/>}/>
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    tournaments: state.tournaments,
    matches: state.matches,
    opponents: state.opponents,
    currentUser: state.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTournamentToDatabase: tournament => dispatch(addTournamentToDatabase(tournament)),
    editTournamentInDatabase: tournament => dispatch(editTournamentInDatabase(tournament)),
    addMatchToDatabase: match => dispatch(addMatchToDatabase(match)),
    editMatchInDatabase: match => dispatch(editMatchInDatabase(match)),
    deleteMatchFromDatabase: matchId => dispatch(deleteMatchFromDatabase(matchId)),
    deleteTournamentFromDatabase: tournamentId => dispatch(deleteTournamentFromDatabase(tournamentId)),
    editOpponentInDatabase: opponent => dispatch(editOpponentInDatabase(opponent)),
    fetchMatches: () => {dispatch(fetchMatches())},
    fetchTournaments: () => {dispatch(fetchTournaments())},
    fetchOpponents: () => {dispatch(fetchOpponents())},
    updateCurrentUserInDatabase: user => {dispatch(updateCurrentUserInDatabase(user))},
    updateCurrentUserPasswordInDatabase: (user, newPassword) => {dispatch(updateCurrentUserPasswordInDatabase(user, newPassword))},
    deleteCurrentUserFromDatabase: (user) => {dispatch(deleteCurrentUserFromDatabase(user))},
    getCurrentUser: () => {dispatch(getCurrentUser())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContent)
