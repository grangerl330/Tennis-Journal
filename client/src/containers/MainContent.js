import React, { Component } from 'react'
import MatchForm from '../components/MatchForm'
import { addMatchToDatabase, deleteMatchFromDatabase } from '../actions/matches'
import TournamentForm from '../components/TournamentForm'
import { addTournamentToDatabase, deleteTournamentFromDatabase } from '../actions/tournaments'
import TournamentCard from '../components/TournamentCard'
import MatchCard from '../components/MatchCard'
import Profile from '../components/Profile'
import Matches from '../components/Matches'
import { fetchMatches } from '../actions/matches'
import Tournaments from '../components/Tournaments'
import { fetchTournaments } from '../actions/tournaments'
import Opponents from '../components/Opponents'
import { fetchOpponents } from '../actions/opponents'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'


class MainContent extends Component {

  componentDidMount() {
    this.props.fetchMatches()
    this.props.fetchTournaments()
    this.props.fetchOpponents()
  }

  render() {
    return(
      <div className="main-content">
        <Switch>
          <Route exact path='/tournaments' render={() => <Tournaments tournaments={this.props.tournaments}/>} />
          <Route exact path='/matches' render={() => <Matches matches={this.props.matches}/>} />
          <Route exact path='/opponents' render={() => <Opponents opponents={this.props.opponents}/>} />
          <Route exact path='/matches/add_match' render={() => <MatchForm addMatchToDatabase={this.props.addMatchToDatabase}/>}/>
          <Route exact path='/tournaments/add_tournament' render={() => <TournamentForm addTournamentToDatabase={this.props.addTournamentToDatabase}/>}/>
          <Route exact path='/tournaments/:tournamentId' render={(urlData) => <TournamentCard id={urlData.match.params.tournamentId} currentTournament={currentTournament} deleteTournamentFromDatabase={this.props.deleteTournamentFromDatabase}/>}/>
          <Route exact path='/matches/:matchId' render={(urlData) => <MatchCard id={urlData.match.params.matchId} currentMatch={currentMatch} deleteMatchFromDatabase={this.props.deleteMatchFromDatabase}/>}/>
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

const currentTournament = (id) => {
  var selectedTournament = this.props.tournaments.find(tournament => {
    return tournament.id === id
  })

  return selectedTournament
}

const currentMatch = (id) => {
  var selectedMatch = this.props.matches.find(match => {
    return match.id === id
  })

  return selectedMatch
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContent)
