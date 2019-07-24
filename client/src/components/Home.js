import React, { Component } from 'react'
import StatsForm from './StatsForm'
import { NavLink, Route } from 'react-router-dom'

class Home extends Component {
  componentDidMount(){
    this.props.getCurrentUser()
  }

  render() {
    return (
      <div className="main-content-text">
        <p>Record: {this.props.currentUser.match_record}</p>
        <p>Current Ranking: {this.props.currentUser.ranking}</p>
        <p>UTR: {this.props.currentUser.utr}</p>
        <NavLink to={`/home/edit_stats`}>Edit Stats</NavLink>
        <Route path='/home/edit_stats' render={() => <StatsForm currentUser={this.props.currentUser} updateCurrentUserInDatabase={this.props.updateCurrentUserInDatabase}/>} />
      </div>
    )
  }
}

export default Home
