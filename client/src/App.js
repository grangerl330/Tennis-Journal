import React, {Component} from 'react';
import MainContent from './containers/MainContent'
import Sidebar from './containers/Sidebar'
import Topbar from './containers/Topbar'
import LoginPage from './containers/LoginPage'
import Tutorial from './components/Tutorial'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser'
import './css/App.css'
import './css/Topbar.css'
import './css/Tutorial.css'
import './css/Sidebar.css'
import './css/MainContent.css'
import './css/Forms.css'
import './css/LoginPage.css'


class App extends Component {

  componentDidMount(){
    this.props.getCurrentUser()
  }

  render() {
    if (this.props.currentUser) {
      return (
        <div className="App">
          <Route path='/tutorial' render={() => <Tutorial />}/>
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
