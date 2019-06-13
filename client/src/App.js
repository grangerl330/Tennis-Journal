import React, {Component} from 'react';
import Matches from './components/Matches'
import MatchService from './services/MatchService'
import AddMatch from './components/AddMatch'
import Navbar from './components/Navbar'
import './App.css';

class App extends Component {
  state = {
    matches: []
  }

  componentDidMount() {
    MatchService.fetchMatches()
    .then(matches => this.setState({ matches: matches }))
  }

  addMatch = match => {
    MatchService.createMatch(match).then(match => this.setState({
      matches: [...this.state.matches, match]
    }))
  }

  render() {
    return (
      <div className="App">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="sidebar">
          <Matches matches={this.state.matches} />
        </div>
        <div className="main-content">
          <AddMatch addMatch={this.addMatch} />
        </div>
      </div>
    )
  }
}

export default App;
