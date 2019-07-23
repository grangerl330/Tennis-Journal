import React, {Component} from 'react';
import MainContent from './containers/MainContent'
import Sidebar from './containers/Sidebar'
import Topbar from './containers/Topbar'
import LoginPage from './containers/LoginPage'
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
          <Topbar />
          <Sidebar />
          <MainContent />
        </div>
      )
    } else {
      return (
        <div className="App">
          <LoginPage />
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
