import React, {Component} from 'react';
import Matches from './components/Matches'
import MatchService from './services/MatchService'
import AddMatch from './components/AddMatch'
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
    MatchService.createMatch(match).then(match => console.log("created match:", match))
    // MatchService.createMatch(match).then(match => this.setState({
    //   matches: [...this.state.matches, match]
    // }))
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
          <AddMatch addMatch={this.addMatch} />
        </div>
      </div>
    )
  }
}

export default App;
