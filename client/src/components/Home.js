import React from 'react'
import UserStatsForm from './UserStatsForm'
import { NavLink, Route } from 'react-router-dom'

const Home = (props) => {
  return (
    <div className="main-content-text">
      <p>Record: {props.currentUser.match_record}</p>
      <p>Current Ranking: {props.currentUser.ranking}</p>
      <p>UTR: {props.currentUser.utr}</p>
      <NavLink to={`/home/edit_stats`}>Edit Stats</NavLink>
      <Route path='/home/edit_stats' render={() => <UserStatsForm currentUser={props.currentUser} updateCurrentUserInDatabase={props.updateCurrentUserInDatabase}/>} />
    </div>
  )
}

export default Home
