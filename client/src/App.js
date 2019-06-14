import React, {Component} from 'react';
import MainContent from './components/MainContent'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Login from './containers/Login'
import Logout from './containers/Logout'
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
          <Logout />
          <Navbar />
          <Sidebar />
          <MainContent />
        </div>
      )
    } else {
      return (
        <div className="App">
          <Login />
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
