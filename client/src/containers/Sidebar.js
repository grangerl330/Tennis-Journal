import React, { Component } from 'react';
import Matches from '../components/Matches'
import { fetchMatches } from '../actions/matches'
import Tournaments from '../components/Tournaments'
import { fetchTournaments } from '../actions/tournaments'

import { connect } from 'react-redux'

class Sidebar extends Component {

  componentDidMount() {
    this.props.fetchMatches()
    this.props.fetchTournaments()
  }

  render() {
    return (
      <div className="sidebar">
        <Matches matches={this.props.matches}/>
        <Tournaments tournaments={this.props.tournaments} />
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
