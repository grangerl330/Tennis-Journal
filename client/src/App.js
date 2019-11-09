import React, {Component} from 'react';
import MainContent from './containers/MainContent'
import Navbar from './containers/Navbar'
import LoginPage from './containers/LoginPage'
import Footer from './containers/Footer'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser'

class App extends Component {

  componentDidMount(){
    this.props.getCurrentUser()
  }

  render() {
    if (this.props.currentUser) {
      return (
        <>
        <div id="App">
          <Navbar />
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
