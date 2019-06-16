import React from 'react'
import MatchForm from '../components/MatchForm'
import { addMatchToStore, addMatchToDatabase } from '../actions/matches'
import TournamentForm from '../components/TournamentForm'
import { addTournamentToStore, addTournamentToDatabase } from '../actions/tournaments'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'


const MainContent = (props) => {
  return(
    <div className="main-content">
      <Switch>
        <Route exact path='/matches/add-match' render={() => <MatchForm addMatchToStore={props.addMatchToStore} addMatchToDatabase={addMatchToDatabase}/>}/>
        <Route exact path='/tournaments/add-tournament' render={() => <TournamentForm addTournamentToStore={props.addTournamentToStore} addTournamentToDatabase={addTournamentToDatabase}/>}/>
      </Switch>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    addTournamentToStore: tournament => dispatch(addTournamentToStore(tournament)),
    addMatchToStore: match => dispatch(addMatchToStore(match))
  }
}

export default connect(null, mapDispatchToProps)(MainContent)
