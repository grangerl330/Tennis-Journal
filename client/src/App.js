import React, {Component} from 'react';
import MainContent from './components/MainContent'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Login from './containers/Login'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser'
import './App.css';

class App extends Component {

  componentDidMount(){
    this.props.getCurrentUser()
  }

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

export default connect(null, { getCurrentUser })(App);
