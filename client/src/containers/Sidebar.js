import React, { Component } from 'react';
import Matches from '../components/Matches'
import { fetchMatches } from '../actions/matches'
import Tournaments from '../components/Tournaments'
import { fetchTournaments } from '../actions/tournaments'
import Opponents from '../components/Opponents'
import { fetchOpponents } from '../actions/opponents'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

class Sidebar extends Component {

  componentDidMount() {
    this.props.fetchMatches()
    this.props.fetchTournaments()
    this.props.fetchOpponents()
  }

  render() {
    return (
      <div className="sidebar">
        <Switch>
          <Route path='/matches' render={() => <Matches matches={this.props.matches}/>}/>
          <Route path='/tournaments' render={() => <Tournaments tournaments={this.props.tournaments}/>}/>
          <Route exact path='/opponents' render={() => <Opponents opponents={this.props.opponents}/>}/>
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    matches: state.matches,
    tournaments: state.tournaments,
    opponents: state.opponents
  }
}

export default connect(mapStateToProps, { fetchMatches, fetchTournaments, fetchOpponents })(Sidebar)
