import React from 'react';
import moment from 'moment'
import { NavLink, Route } from 'react-router-dom'
import MatchForm from './MatchForm'

const Matches = (props) => {
  const sortedMatches = props.matches.sort(function(a,b) {return moment(a.date) - moment(b.date)})

  const match_round_display = (match) => {
    if(match.round > 8){
      return `Round of ${match.round}`
    } else if(match.round === 8){
      return "Quarterfinal"
    } else if(match.round === 4){
      return "Semifinal"
    } else if(match.round === 2){
      return "Final"
    }
  }

  const renderMatches = sortedMatches.map(match =>
    <div key={match.id}>
      <p><NavLink className="main-content-link" to={`/matches/view/${match.id}`}>{match_round_display(match)} - {match.tournament.title} - {match.result}</NavLink></p>
    </div>
  )

  const message = () => {
    if(!props.matches.length > 0){
      return <span className="message-display">* This list will populate automatically when a new match is added</span>
    }
  }

  return (
    <div className="main-content-text">
      {renderMatches}
      {message()}
      <Route exact path='/matches/add_match' render={() => <MatchForm sendMatchToDatabase={props.addMatchToDatabase} add="add"/>}/>
    </div>
  )
}

export default Matches
