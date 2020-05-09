import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser';

// App Layout Containers
import Navbar from './pages/Navbar';
import MainContent from './pages/MainContent';
import Footer from './pages/Footer';

// Login Components
import LoginPage from './pages/LoginPage';

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
            <MainContent currentUser={this.props.currentUser} getCurrentUser={this.props.getCurrentUser} />
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
