import React, {Component} from 'react';
import Matches from './components/Matches'
import AddMatch from './components/AddMatch'
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
          <AddMatch addMatch={this.addMatch} />
        </div>
      </div>
    )
  }
}


export default App;
