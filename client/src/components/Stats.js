import React, { Component } from 'react'
import StatsForm from './StatsForm'
import { NavLink, Route } from 'react-router-dom'

class Stats extends Component {
  componentDidMount(){
    this.props.getCurrentUser()
  }

  instructions = () => {
    if(!this.props.currentUser.ranking && !this.props.currentUser.utr){
      return <span className="instructions-display">* Enter your Current Ranking and UTR by clicking Edit</span>
    } else if(!this.props.currentUser.ranking){
      return <span className="instructions-display">* Enter your Current Ranking by clicking Edit</span>
    } else if(!this.props.currentUser.utr){
      return <span className="instructions-display">* Enter your UTR by clicking Edit</span>
    }
  }

  render() {
    return (
      <div className="main-content-text">
        <p>Record: {this.props.currentUser.match_record}</p>
        <p>Current Ranking: {this.props.currentUser.ranking}</p>
        <p>UTR: {this.props.currentUser.utr}</p>
        <p>Points: {this.props.currentUser.points}</p>
        <p>{this.instructions()}</p>
        <NavLink to={`/stats/edit`} className="button">Edit</NavLink>
        <Route path='/stats/edit' render={() => <StatsForm currentUser={this.props.currentUser} updateCurrentUserInDatabase={this.props.updateCurrentUserInDatabase}/>} />
      </div>
    )
  }
}

export default Stats
