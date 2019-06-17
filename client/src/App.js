import React, {Component} from 'react';
import MainContent from './containers/MainContent'
import Sidebar from './containers/Sidebar'
import Navbar from './containers/Navbar'
import WelcomePage from './containers/WelcomePage'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser'
import { Switch, Route } from 'react-router-dom'
import './App.css';

class App extends Component {

  componentDidMount(){
    this.props.getCurrentUser()
  }

  render() {
    if (this.props.currentUser) {
      return (
        <div className="App">
          <Navbar />
          <Sidebar />
          <MainContent />
        </div>
      )
    } else {
      return (
        <div className="App">
          <WelcomePage />
        </div>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, { getCurrentUser })(App);
