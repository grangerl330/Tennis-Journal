import React, { Component } from 'react';
import Matches from '../components/Matches'
import { fetchMatches } from '../actions/matches'
import Tournaments from '../components/Tournaments'
import { fetchTournaments } from '../actions/tournaments'
import { Switch, Route } from 'react-router-dom'

import { connect } from 'react-redux'

class Sidebar extends Component {

  componentDidMount() {
    this.props.fetchMatches()
    this.props.fetchTournaments()
  }

  render() {
    return (
      <div className="sidebar">
        <Switch>
          <Route path='/matches' render={() => <Matches matches={this.props.matches}/>}/>
          <Route path='/tournaments' render={() => <Tournaments tournaments={this.props.tournaments}/>}/>
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    matches: state.matches,
    tournaments: state.tournaments
  }
}

export default connect(mapStateToProps, { fetchMatches, fetchTournaments })(Sidebar)
