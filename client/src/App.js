import React, {Component} from 'react';
import MainContent from './containers/MainContent'
import Navbar from './containers/Navbar'
import LoginPage from './containers/LoginPage'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser'
// import './stylesheets/App.css'
// import './stylesheets/Topbar.css'
// import './stylesheets/Tutorial.css'
// import './stylesheets/Sidebar.css'
// import './stylesheets/MainContent.css'
// import './stylesheets/Forms.css'
// import './stylesheets/LoginPage.css'


class App extends Component {

  componentDidMount(){
    this.props.getCurrentUser()
  }

  render() {
    if (this.props.currentUser) {
      return (
        <div id="App">
          <Navbar />
          <MainContent />
        </div>
      )
    } else {
      return (
        <div id="App">
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
