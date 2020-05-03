import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser';
import { Switch, Route, Redirect } from 'react-router-dom';

// App Layout Containers
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';

// Login Components
import LoginPage from './pages/LoginPage';

// Profile Page Components
import ProfilePage from './pages/ProfilePage';
import { updateCurrentUserInDatabase, updateCurrentUserPasswordInDatabase, deleteCurrentUserFromDatabase } from './actions/currentUser';

// Home Page Components
import HomePage from './pages/HomePage';

// Matches Components
import MatchesPage from './pages/MatchesPage';
import MatchPage from './pages/MatchPage';
import MatchForm from './components/match-page/MatchForm';
import { fetchMatches } from './actions/matches';
import { addMatchToDatabase, editMatchInDatabase, deleteMatchFromDatabase } from './actions/matches';

// Tournaments Components
import TournamentsPage from './pages/TournamentsPage';
import TournamentPage from './pages/TournamentPage';
import TournamentForm from './components/tournament-page/TournamentForm';
import { fetchTournaments } from './actions/tournaments';
import { addTournamentToDatabase, editTournamentInDatabase, deleteTournamentFromDatabase } from './actions/tournaments';

// Opponents Components
import OpponentPage from './pages/OpponentPage';
import OpponentsPage from './pages/OpponentsPage';
import { fetchOpponents, editOpponentInDatabase } from './actions/opponents';

class App extends Component {

  componentDidMount(){
    this.props.getCurrentUser()
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
    if (this.props.currentUser && !this.props.currentUser.error) {
      return (
        <>
          <div id="App">
            <Navbar isLogin={false} currentUser={this.props.currentUser} />
            <div id="main-content">
              <Switch>
                <Route exact path="/" render={() => (
                    <Redirect to="/home"/>
                )}/>
                <Route exact path='/tournaments/add' render={() => <TournamentForm sendTournamentToDatabase={this.props.addTournamentToDatabase} add="add"/>} />
                <Route exact path='/tournaments/:tournamentId/add-match' render={(urlData) => <MatchForm tournamentId={urlData.match.params.tournamentId} tournament={this.currentTournament(urlData.match.params.tournamentId)} addMatchToDatabase={this.props.addMatchToDatabase} matches={this.findTournamentMatches(this.props.matches, urlData.match.params.tournamentId)}/>}/>
                <Route path='/tournaments/:tournamentId' render={(urlData) => <TournamentPage id={urlData.match.params.tournamentId} currentTournament={this.currentTournament} addMatchToDatabase={this.props.addMatchToDatabase} editTournamentInDatabase={this.props.editTournamentInDatabase} deleteTournamentFromDatabase={this.props.deleteTournamentFromDatabase} matches={this.findTournamentMatches(this.props.matches, urlData.match.params.tournamentId)}/>}/>
                <Route path='/tournaments' render={() => <TournamentsPage tournaments={this.props.tournaments} addTournamentToDatabase={this.props.addTournamentToDatabase} />} />
                <Route path='/matches/:matchId' render={(urlData) => <MatchPage id={urlData.match.params.matchId} currentMatch={this.currentMatch} matches={this.props.matches} editMatchInDatabase={this.props.editMatchInDatabase} deleteMatchFromDatabase={this.props.deleteMatchFromDatabase} findTournamentMatches={this.findTournamentMatches}/>}/>
                <Route path='/matches' render={() => <MatchesPage matches={this.props.matches} addMatchToDatabase={this.props.addMatchToDatabase}/>} />
                <Route path='/opponents/:opponentId' render={(urlData) => <OpponentPage id={urlData.match.params.opponentId} currentOpponent={this.currentOpponent} editOpponentInDatabase={this.props.editOpponentInDatabase}/>}/>
                <Route path='/opponents' render={() => <OpponentsPage opponents={this.props.opponents}/>} />
                <Route exact path='/profile/edit' render={() => <ProfilePage currentUser={this.props.currentUser} updateCurrentUserInDatabase={this.props.updateCurrentUserInDatabase} updateCurrentUserPasswordInDatabase={this.props.updateCurrentUserPasswordInDatabase} deleteCurrentUserFromDatabase={this.props.deleteCurrentUserFromDatabase}/>}/>
                <Route path='/home' render={() => <HomePage currentUser={this.props.currentUser} updateCurrentUserInDatabase={this.props.updateCurrentUserInDatabase} getCurrentUser={this.props.getCurrentUser}/>}/>
              </Switch>
            </div>
          </div>
          <Footer />
        </>
      )
    } else {
      return (
        <div id="App">
          <LoginPage />
        </div>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    tournaments: state.tournaments,
    matches: state.matches,
    opponents: state.opponents
  }
}

export default connect(mapStateToProps, { addTournamentToDatabase, editTournamentInDatabase, deleteTournamentFromDatabase, addMatchToDatabase, editMatchInDatabase, deleteMatchFromDatabase, editOpponentInDatabase, fetchMatches, fetchTournaments, fetchOpponents, updateCurrentUserInDatabase, updateCurrentUserPasswordInDatabase, deleteCurrentUserFromDatabase, getCurrentUser })(App);
