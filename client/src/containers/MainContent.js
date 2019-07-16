import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import Profile from '../components/Profile'

import Matches from '../components/Matches'
import MatchCard from '../components/MatchCard'
import MatchForm from '../components/MatchForm'
import { fetchMatches } from '../actions/matches'
import { addMatchToDatabase, deleteMatchFromDatabase } from '../actions/matches'

import Tournaments from '../components/Tournaments'
import TournamentCard from '../components/TournamentCard'
import TournamentForm from '../components/TournamentForm'
import { fetchTournaments } from '../actions/tournaments'
import { addTournamentToDatabase, deleteTournamentFromDatabase } from '../actions/tournaments'

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
        return opponent.id == id
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
          <Route exact path='/tournaments' render={() => <Tournaments tournaments={this.props.tournaments}/>} />
          <Route exact path='/tournaments/add_tournament' render={() => <TournamentForm addTournamentToDatabase={this.props.addTournamentToDatabase}/>}/>
          <Route exact path='/tournaments/:tournamentId' render={(urlData) => <TournamentCard id={urlData.match.params.tournamentId} currentTournament={this.state.currentTournament} deleteTournamentFromDatabase={this.props.deleteTournamentFromDatabase}/>}/>
          <Route exact path='/matches' render={() => <Matches matches={this.props.matches}/>} />
          <Route exact path='/matches/:matchId' render={(urlData) => <MatchCard id={urlData.match.params.matchId} currentMatch={this.state.currentMatch} deleteMatchFromDatabase={this.props.deleteMatchFromDatabase}/>}/>
          <Route exact path='/matches/add_match' render={() => <MatchForm addMatchToDatabase={this.props.addMatchToDatabase}/>}/>
          <Route exact path='/opponents' render={() => <Opponents opponents={this.props.opponents}/>} />
          <Route exact path='/opponents/:opponentId' render={(urlData) => <OpponentCard id={urlData.match.params.opponentId} currentOpponent={this.state.currentOpponent}/>}/>
          <Route exact path='/profile' render={() => <Profile currentUser={this.props.currentUser}/>}/>
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
    addMatchToDatabase: match => dispatch(addMatchToDatabase(match)),
    deleteMatchFromDatabase: matchId => dispatch(deleteMatchFromDatabase(matchId)),
    deleteTournamentFromDatabase: tournamentId => dispatch(deleteTournamentFromDatabase(tournamentId)),
    fetchMatches: () => {dispatch(fetchMatches())},
    fetchTournaments: () => {dispatch(fetchTournaments())},
    fetchOpponents: () => {dispatch(fetchOpponents())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContent)
