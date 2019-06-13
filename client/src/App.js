import React, {Component} from 'react';
import Matches from './containers/Matches'
import MatchForm from './containers/MatchForm'
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
          <MatchForm />
        </div>
      </div>
    )
  }
}

export default App;
