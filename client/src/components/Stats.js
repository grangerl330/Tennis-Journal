import React, { Component } from 'react'
import StatsForm from './StatsForm'
import { NavLink, Route } from 'react-router-dom'

class Stats extends Component {
  componentDidMount(){
    this.props.getCurrentUser()
  }

  render() {
    return (
      <div className="main-content-text">
        <p>Record: {this.props.currentUser.match_record}</p>
        <p>Current Ranking: {this.props.currentUser.ranking}</p>
        <p>UTR: {this.props.currentUser.utr}</p>
        <p>Points: {this.props.currentUser.points}</p>
        <NavLink to={`/stats/edit`} className="button">Edit</NavLink>
        <Route path='/stats/edit' render={() => <StatsForm currentUser={this.props.currentUser} updateCurrentUserInDatabase={this.props.updateCurrentUserInDatabase}/>} />
      </div>
    )
  }
}

export default Stats
