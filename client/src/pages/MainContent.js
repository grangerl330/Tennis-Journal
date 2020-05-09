import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

// Profile Page Components
import ProfilePage from './ProfilePage';
import { updateCurrentUserInDatabase, updateCurrentUserPasswordInDatabase, deleteCurrentUserFromDatabase } from '../actions/currentUser';

// Home Page Components
import HomePage from './HomePage';

import ListPage from './ListPage';

// Matches Components
import MatchPage from './MatchPage';
import MatchForm from '../components/match-page/MatchForm';
import { fetchMatches } from '../actions/matches';
import { addMatchToDatabase, editMatchInDatabase, deleteMatchFromDatabase } from '../actions/matches';
import matchesIcon from '../images/matches-icon.svg';

// Tournaments Components
import TournamentPage from './TournamentPage';
import { fetchTournaments } from '../actions/tournaments';
import { addTournamentToDatabase, editTournamentInDatabase, deleteTournamentFromDatabase } from '../actions/tournaments';
import tournamentIcon from '../images/tournament-icon.svg'

// Opponents Components
import OpponentPage from './OpponentPage';
import { fetchOpponents, editOpponentInDatabase } from '../actions/opponents';
import opponentsIcon from '../images/opponents.svg';

class MainContent extends Component {
  componentDidMount(props){
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

  render(){
    return (
      <div id="main-content">
        <Switch>
          <Route exact path="/" render={() => (
              <Redirect to="/home"/>
          )}/>
          <Route path='/tournaments/:tournamentId' render={(urlData) => <TournamentPage id={urlData.match.params.tournamentId} currentTournament={this.currentTournament} addMatchToDatabase={this.props.addMatchToDatabase} editTournamentInDatabase={this.props.editTournamentInDatabase} deleteTournamentFromDatabase={this.props.deleteTournamentFromDatabase} matches={this.findTournamentMatches(this.props.matches, urlData.match.params.tournamentId)}/>}/>
          <Route path='/tournaments' render={() => <ListPage title="tournaments" content={this.props.tournaments} icon={tournamentIcon} addTournamentToDatabase={this.props.addTournamentToDatabase} fetchContent={this.props.fetchTournaments} />} />
          <Route path='/matches/:matchId' render={(urlData) => <MatchPage id={urlData.match.params.matchId} currentMatch={this.currentMatch} matches={this.props.matches} editMatchInDatabase={this.props.editMatchInDatabase} deleteMatchFromDatabase={this.props.deleteMatchFromDatabase} findTournamentMatches={this.findTournamentMatches}/>}/>
          <Route path='/matches' render={() => <ListPage title="matches" content={this.props.matches} icon={matchesIcon} addMatchToDatabase={this.props.addMatchToDatabase} fetchContent={this.props.fetchMatches}/>} />
          <Route path='/opponents/:opponentId' render={(urlData) => <OpponentPage id={urlData.match.params.opponentId} currentOpponent={this.currentOpponent} editOpponentInDatabase={this.props.editOpponentInDatabase}/>}/>
          <Route path='/opponents' render={() => <ListPage title="opponents" content={this.props.opponents} icon={opponentsIcon} fetchContent={this.props.fetchOpponents}/>} />
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
    opponents: state.opponents
  }
}

export default connect(mapStateToProps, { addTournamentToDatabase, editTournamentInDatabase, deleteTournamentFromDatabase, addMatchToDatabase, editMatchInDatabase, deleteMatchFromDatabase, editOpponentInDatabase, fetchMatches, fetchTournaments, fetchOpponents, updateCurrentUserInDatabase, updateCurrentUserPasswordInDatabase, deleteCurrentUserFromDatabase })(MainContent);
