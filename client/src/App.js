import React, { Component } from 'react';

// App Layout Containers
import MainContent from './containers/global/MainContent'
import NavbarContainer from './containers/global/navbar/NavbarContainer'
import Footer from './containers/global/Footer'

// Login Components and Functions
import LoginPageContainer from './containers/login-page/LoginPageContainer'
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
            <NavbarContainer isLogin={false} currentUser={this.props.currentUser} />
            <MainContent />
          </div>
          <Footer />
        </>
      )
    } else {
      return (
        <div id="App">
          <LoginPageContainer />
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
