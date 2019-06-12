import React, {Component} from 'react';
import Matches from './components/Matches'
import './App.css';

class App extends Component {
  state = {
    matches: []
  }

  componentDidMount() {
    fetch('/matches')
    .then(response => response.json())
    .then(matches => this.setState({ matches }))
  }

  render() {
    console.log(this.state.matches)
    return (
      <div className="App">
        <div className="matches">
          <Matches matches={this.state.matches} />
        </div>
      </div>
    )
  }
}

export default App;
