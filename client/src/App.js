import React, {Component} from 'react';
import Matches from './components/Matches'
import './App.css';

let matches = [
  {round: 128, id: 1, result: "won", score: "6-1, 6-1" },
  {round: 64, id: 2, result: "won", score: "6-3, 6-4"},
  {round: 32, id: 3, result: "lost", score: "7-5, 6-3"}
]

class App extends Component {
  state = {
    matches: []
  }


  componentDidMount() {

  }

  render() {
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
