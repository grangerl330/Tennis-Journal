import React, {Component} from 'react';
import MainContent from './components/MainContent'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Login from './containers/Login'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
        <Navbar />
        <Sidebar />
        <MainContent />
      </div>
    )
  }
}

export default App;
