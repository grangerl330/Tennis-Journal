import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import Profile from '../components/Profile'
import Home from '../components/Home'

import Matches from '../components/Matches'
import MatchCard from '../components/MatchCard'
import { fetchMatches } from '../actions/matches'
import { addMatchToDatabase, editMatchInDatabase, deleteMatchFromDatabase } from '../actions/matches'

import Tournaments from '../components/Tournaments'
import TournamentCard from '../components/TournamentCard'
import { fetchTournaments } from '../actions/tournaments'
import { addTournamentToDatabase, editTournamentInDatabase, deleteTournamentFromDatabase } from '../actions/tournaments'

import Opponents from '../components/Opponents'
import OpponentCard from '../components/OpponentCard'
import { fetchOpponents } from '../actions/opponents'

class MainContent extends Component {
  constructor() {
    super();
    this.state = {currentTournament: (id) => {
      var selectedTournament = this.props.tournaments.find(tournament => {
        return tournament.id === id
      })

      return selectedTournament
    }, currentMatch: (id) => {
      var selectedMatch = this.props.matches.find(match => {
        return match.id === id
      })

      return selectedMatch
    }, currentOpponent: (id) => {
      var selectedOpponent = this.props.opponents.find(opponent => {
        return opponent.id === id
      })

      return selectedOpponent
    }}
  }

  componentDidMount() {
    this.props.fetchMatches()
    this.props.fetchTournaments()
    this.props.fetchOpponents()
  }

  // const currentTournament = (id) => {
  //   var selectedTournament = this.props.tournaments.find(tournament => {
  //     return tournament.id === id
  //   })
  //
  //   return selectedTournament
  // }

  // const currentMatch = (id) => {
  //   var selectedMatch = this.props.matches.find(match => {
  //     return match.id === id
  //   })
  //
  //   return selectedMatch
  // }

  render() {
    return(
      <div className="main-content">
        <Switch>
          <Route path='/tournaments/view/:tournamentId' render={(urlData) => <TournamentCard id={urlData.match.params.tournamentId} currentTournament={this.state.currentTournament} addMatchToDatabase={this.props.addMatchToDatabase} editTournamentInDatabase={this.props.editTournamentInDatabase} deleteTournamentFromDatabase={this.props.deleteTournamentFromDatabase} matches={tournamentMatches(this.props.matches, urlData.match.params.tournamentId)}/>}/>
          <Route path='/tournaments' render={() => <Tournaments tournaments={this.props.tournaments} addTournamentToDatabase={this.props.addTournamentToDatabase} />} />
          <Route path='/matches/view/:matchId' render={(urlData) => <MatchCard id={urlData.match.params.matchId} currentMatch={this.state.currentMatch} editMatchInDatabase={this.props.editMatchInDatabase} deleteMatchFromDatabase={this.props.deleteMatchFromDatabase}/>}/>
          <Route path='/matches' render={() => <Matches matches={this.props.matches} addMatchToDatabase={this.props.addMatchToDatabase}/>} />
          <Route exact path='/opponents' render={() => <Opponents opponents={this.props.opponents}/>} />
          <Route exact path='/opponents/:opponentId' render={(urlData) => <OpponentCard id={urlData.match.params.opponentId} currentOpponent={this.state.currentOpponent}/>}/>
          <Route exact path='/profile' render={() => <Profile currentUser={this.props.currentUser}/>}/>
          <Route exact path='/home' render={() => <Home currentUser={this.props.currentUser}/>}/>
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
    fetchMatches: () => {dispatch(fetchMatches())},
    fetchTournaments: () => {dispatch(fetchTournaments())},
    fetchOpponents: () => {dispatch(fetchOpponents())}
  }
}

const tournamentMatches = (matches, id) => {
  var filteredMatches = matches.filter(match => {
    return match.tournament_id === parseInt(id)
  })

  return filteredMatches
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContent)
