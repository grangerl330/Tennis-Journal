import React, { Component } from 'react'
import StatsForm from './StatsForm'
import editPencil from '../images/edit-pencil.png'
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
        <h1>Stats</h1>
        <p><b>Record:</b> {this.props.currentUser.match_record}</p>
        <p><b>Current Ranking:</b> {this.props.currentUser.ranking}</p>
        <p><b>UTR:</b> {this.props.currentUser.utr}</p>
        <p><b>Points:</b> {this.props.currentUser.points}</p>
        <p>{this.instructions()}</p>
        <NavLink to={`/stats/edit`}><img src={editPencil} alt="Edit Stats"/></NavLink>
        <Route path='/stats/edit' render={() => <StatsForm currentUser={this.props.currentUser} updateCurrentUserInDatabase={this.props.updateCurrentUserInDatabase}/>} />
      </div>
    )
  }
}

export default Stats
