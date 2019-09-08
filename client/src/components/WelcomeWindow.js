import React from 'react';
import { increasePosition, decreasePosition, resetPosition } from '../actions/welcomeWindow'
import tutorial2 from '../images/tutorial2.png'
import tutorial3 from '../images/tutorial3.png'
import welcomeWindow4 from '../images/WelcomeWindow4.png'
import welcomeWindow5 from '../images/WelcomeWindow5.png'
import welcomeWindow6 from '../images/WelcomeWindow6.png'
import closeWindowImg from '../images/close-window.png'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

const WelcomeWindow = (props) => {

  const renderedText = () => {
    switch(props.welcomeWindow.position){
      case 1:
        return (
          <div className="tutorial-text tutorial-1">
            {tutorialCloseButton()}
            <h2>Welcome To Tennis Journal!</h2>
            <p>This app is designed to help you keep track of tournaments, matches, and stats.</p>
            {buttonDisplay()}
          </div>
        )
      case 2:
        return (
          <>
            <img src={tutorial2} alt="tutorial window 2" className="tutorial-2-image"/>
            <div className="tutorial-text tutorial-2">
              {tutorialCloseButton()}
              <p>Add a new tournament by clicking the Tournaments link in the side bar.</p>
              {buttonDisplay()}
            </div>
          </>
        )
      case 3:
        return (
          <>
            <img src={tutorial3} alt="tutorial window 2" className="tutorial-3-image"/>
            <div className="tutorial-text tutorial-3">
              {tutorialCloseButton()}
              <p>After a Tournament has been created, view that tournament by clicking its link.</p>
              {buttonDisplay()}
            </div>
          </>
        )
      case 4:
        return (
          <>
            <p>Add a new match to that tournament using the Add Match link.</p>
            <img src={welcomeWindow4} className="logo-image" alt="logo"/>
          </>
        )
      case 5:
        return <p>The All Matches and All Opponents lists will automatically populate when new matches are created.</p>
      case 6:
        return (
          <>
            <p>Click the My Stats link to see a summary of all your stats. Record and Points will update when tournaments and matches are updated or created.</p>
            <img src={welcomeWindow5} className="logo-image" alt="logo"/>
          </>
        )
      case 7:
        return (
          <>
            <p>To view your profile, click your name in the top right corner.</p>
            <img src={welcomeWindow6} className="logo-image" alt="logo"/>
          </>
        )
      case 8:
        return <p>Get started by adding a new Tournament.</p>
      default:
        return ""
    }
  }

  const tutorialCloseButton = () => {
    return <NavLink className="close-window-button" to={`/tournaments`}><img src={closeWindowImg} alt="Close Window"/></NavLink>
  }

  const handleOnClickNext = event => {
    event.preventDefault()

    props.increasePosition()
  }

  const handleOnClickBack = event => {
    event.preventDefault()

    props.decreasePosition()
  }

  const handleOnClickLink = event => {
    props.resetPosition()
  }

  const buttonDisplay = () => {
    if(props.welcomeWindow.position === 1) {
      return <button onClick={handleOnClickNext} className="button">Next</button>
    } else if(props.welcomeWindow.position < 8) {
      return (
        <>
          <button onClick={handleOnClickBack} className="button welcome-window-button">Back</button>
          <button onClick={handleOnClickNext} className="button">Next</button>
        </>
      )
    } else {
      return <NavLink to={'/tournaments'} className="button" onClick={handleOnClickLink}>Get started</NavLink>
    }
  }

  return (
    <div>
      <div className="tutorial-background">
      </div>
      {renderedText()}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    welcomeWindow: state.welcomeWindow
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increasePosition: () => dispatch(increasePosition()),
    decreasePosition: () => dispatch(decreasePosition()),
    resetPosition: () => dispatch(resetPosition())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeWindow)
