import React, {Component} from 'react';
import Matches from './components/Matches'
import MatchService from './services/MatchService'
import './App.css';

class App extends Component {
  state = {
    matches: []
  }

  componentDidMount() {
    MatchService.fetchMatches()
    .then(matches => this.setState({ matches: matches }))
  }

  render() {
    console.log(this.state.matches)
    return (
      <div className="App">
        <div className="navbar">
          <h2>Navbar</h2>
        </div>
        <div className="sidebar">
          <Matches matches={this.state.matches} />
        </div>
        <div className="main-content">
          <h2>Main Content</h2>
        </div>
      </div>
    )
  }
}

export default App;
