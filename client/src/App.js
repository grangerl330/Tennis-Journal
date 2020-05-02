import React, { Component } from 'react';

// App Layout Containers
import MainContent from './pages/MainContent'
import Navbar from './pages/Navbar'
import Footer from './pages/Footer'

// Login Components and Functions
import LoginPage from './pages/LoginPage'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser'

class App extends Component {

  componentDidMount(){
    this.props.getCurrentUser()
  }

  render() {
    if (this.props.currentUser && !this.props.currentUser.error) {
      return (
        <>
          <div id="App">
            <Navbar isLogin={false} currentUser={this.props.currentUser} />
            <MainContent />
          </div>
          <Footer />
        </>
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
