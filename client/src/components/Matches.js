import React, {Component} from 'react';
import { fetchMatches } from '../actions/matches'
import { connect } from 'react-redux'

class Matches extends Component {

  componentDidMount() {
    this.props.fetchMatches()
  }

  render() {
    const renderMatches = this.props.matches.map(match =>
      <div key={match.id}>
        <p><b>Round of {match.round}</b></p>
        <p>Result: {match.result}</p>
        <p>Score: {match.score}</p>
      </div>
    )

    return (
      <div>
        <h2>Matches</h2>
        {renderMatches}
      </div>
    )
  }
}

// Takes data from the store and maps it to props to be used in this component
const mapStateToProps = state => {
  return {
    matches: state.matches
  }
}

export default connect(mapStateToProps, { fetchMatches })(Matches)
