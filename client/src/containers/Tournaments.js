import React, { Component } from 'react';
import { fetchTournaments } from '../actions/tournaments'
import { connect } from 'react-redux'

class Tournaments extends Component {

  componentDidMount() {
    this.props.fetchTournaments()
  }

  render() {
    const renderTournaments = this.props.tournaments.map(tournament =>
      <div key={tournament.id}>
        <p>{tournament.title}</p>
      </div>
    )

    return (
      <div>
        <h2>Tournaments</h2>
        {renderTournaments}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    tournaments: state.tournaments
  }
}

export default connect(mapStateToProps, { fetchTournaments })(Tournaments)
