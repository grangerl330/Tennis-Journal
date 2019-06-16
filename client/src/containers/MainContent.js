import React from 'react'
import MatchForm from '../components/MatchForm'
import { addMatchToDatabase } from '../actions/matches'
import TournamentForm from '../components/TournamentForm'
import { addTournamentToDatabase } from '../actions/tournaments'
import TournamentCard from '../components/TournamentCard'
import MatchCard from '../components/MatchCard'
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
        <Route exact path='/matches/add-match' render={() => <MatchForm addMatchToDatabase={props.addMatchToDatabase}/>}/>
        <Route exact path='/tournaments/add-tournament' render={() => <TournamentForm addTournamentToDatabase={props.addTournamentToDatabase}/>}/>

        <Route exact path='/tournaments/:tournamentId' render={(props) => <TournamentCard id={props.match.params.tournamentId} currentTournament={currentTournament}/>}/>
        <Route exact path='/matches/:matchId' render={(props) => <MatchCard id={props.match.params.matchId} currentMatch={currentMatch}/>}/>
      </Switch>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    tournaments: state.tournaments,
    matches: state.matches
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTournamentToDatabase: tournament => dispatch(addTournamentToDatabase(tournament)),
    addMatchToDatabase: match => dispatch(addMatchToDatabase(match))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContent)
