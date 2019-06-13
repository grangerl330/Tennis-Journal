import React, {Component} from 'react';
import MainContent from './components/MainContent'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Sidebar />
        <MainContent />
      </div>
    )
  }
}

export default App;
