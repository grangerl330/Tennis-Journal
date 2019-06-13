import React, {Component} from 'react';
import Matches from './components/Matches'
import MatchForm from './components/MatchForm'
import Navbar from './components/Navbar'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="sidebar">
          <Matches />
        </div>
        <div className="main-content">
          <MatchForm addMatch={this.addMatch} />
        </div>
      </div>
    )
  }
}

export default App;
