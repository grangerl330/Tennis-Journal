import React from 'react'
import MatchForm from '../components/MatchForm'
import { addMatchToStore, addMatchToDatabase } from '../actions/matches'
import TournamentForm from '../components/TournamentForm'
import { addTournamentToStore, addTournamentToDatabase } from '../actions/tournaments'
import { connect } from 'react-redux'


const MainContent = (props) => {
  return(
    <div className="main-content">
      <MatchForm addMatchToStore={props.addMatchToStore} addMatchToDatabase={addMatchToDatabase}/>
      <TournamentForm addTournamentToStore={props.addTournamentToStore} addTournamentToDatabase={addTournamentToDatabase} />
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
