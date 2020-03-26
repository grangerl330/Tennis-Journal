import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'

// Profile Page Components
import ProfilePage from '../page-containers/individual-pages/ProfilePage'
import { updateCurrentUserInDatabase, updateCurrentUserPasswordInDatabase, deleteCurrentUserFromDatabase } from '../../actions/currentUser'

// Home Page Components
import HomePage from '../page-containers/individual-pages/HomePage'
import { getCurrentUser } from '../../actions/currentUser'

// Matches Components
import Matches from '../page-containers/index-pages/Matches'
import MatchPage from '../page-containers/individual-pages/MatchPage'
import MatchForm from '../../components/forms/MatchForm'
import { fetchMatches } from '../../actions/matches'
import { addMatchToDatabase, editMatchInDatabase, deleteMatchFromDatabase } from '../../actions/matches'

// Tournaments Components
import Tournaments from '../page-containers/index-pages/Tournaments'
import TournamentPage from '../page-containers/individual-pages/TournamentPage'
import TournamentForm from '../../components/forms/TournamentForm'
import { fetchTournaments } from '../../actions/tournaments'
import { addTournamentToDatabase, editTournamentInDatabase, deleteTournamentFromDatabase } from '../../actions/tournaments'

// Opponents Components
import Opponents from '../page-containers/index-pages/Opponents'
import OpponentPage from '../page-containers/individual-pages/OpponentPage'
import { fetchOpponents, editOpponentInDatabase } from '../../actions/opponents'

class MainContent extends Component {
  componentDidMount() {
    this.props.fetchMatches()
    this.props.fetchTournaments()
    this.props.fetchOpponents()
  }

  currentTournament = (id) => {
    let selectedTournament = this.props.tournaments.find(tournament => {
      return tournament.id === parseInt(id)
    })

    return selectedTournament
  }

  currentMatch = (id) => {
    let selectedMatch = this.props.matches.find(match => {
      return match.id === id
    })

    return selectedMatch
  }

  currentOpponent = (id) => {
    let selectedOpponent = this.props.opponents.find(opponent => {
      return opponent.id === id
    })

    return selectedOpponent
  }

  findTournamentMatches = (matches, id) => {
    let filteredMatches = matches.filter(match => {
      return match.tournament_id === parseInt(id)
    })

    return filteredMatches
  }

  render() {
    return(
      <div id="main-content">
        <Switch>
          <Route exact path="/" render={() => (
              <Redirect to="/home"/>
          )}/>
          <Route exact path='/tournaments/add' render={() => <TournamentForm sendTournamentToDatabase={this.props.addTournamentToDatabase} add="add"/>} />
          <Route exact path='/tournaments/:tournamentId/add' render={(urlData) => <MatchForm tournamentId={urlData.match.params.tournamentId} tournament={this.currentTournament(urlData.match.params.tournamentId)} addMatchToDatabase={this.props.addMatchToDatabase} matches={this.findTournamentMatches(this.props.matches, urlData.match.params.tournamentId)}/>}/>
          <Route path='/tournaments/:tournamentId' render={(urlData) => <TournamentPage id={urlData.match.params.tournamentId} currentTournament={this.currentTournament} addMatchToDatabase={this.props.addMatchToDatabase} editTournamentInDatabase={this.props.editTournamentInDatabase} deleteTournamentFromDatabase={this.props.deleteTournamentFromDatabase} matches={this.findTournamentMatches(this.props.matches, urlData.match.params.tournamentId)}/>}/>
          <Route path='/tournaments' render={() => <Tournaments tournaments={this.props.tournaments} addTournamentToDatabase={this.props.addTournamentToDatabase} />} />
          <Route path='/matches/:matchId' render={(urlData) => <MatchPage id={urlData.match.params.matchId} currentMatch={this.currentMatch} matches={this.props.matches} editMatchInDatabase={this.props.editMatchInDatabase} deleteMatchFromDatabase={this.props.deleteMatchFromDatabase} findTournamentMatches={this.findTournamentMatches}/>}/>
          <Route path='/matches' render={() => <Matches matches={this.props.matches} addMatchToDatabase={this.props.addMatchToDatabase}/>} />
          <Route path='/opponents/:opponentId' render={(urlData) => <OpponentPage id={urlData.match.params.opponentId} currentOpponent={this.currentOpponent} editOpponentInDatabase={this.props.editOpponentInDatabase}/>}/>
          <Route path='/opponents' render={() => <Opponents opponents={this.props.opponents}/>} />
          <Route exact path='/profile/edit' render={() => <ProfilePage currentUser={this.props.currentUser} updateCurrentUserInDatabase={this.props.updateCurrentUserInDatabase} updateCurrentUserPasswordInDatabase={this.props.updateCurrentUserPasswordInDatabase} deleteCurrentUserFromDatabase={this.props.deleteCurrentUserFromDatabase}/>}/>
          <Route path='/home' render={() => <HomePage currentUser={this.props.currentUser} updateCurrentUserInDatabase={this.props.updateCurrentUserInDatabase} getCurrentUser={this.props.getCurrentUser}/>}/>
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
