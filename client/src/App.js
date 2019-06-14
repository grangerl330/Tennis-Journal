import React, {Component} from 'react';
import MainContent from './components/MainContent'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import WelcomePage from './components/WelcomePage'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser'
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
