import React from 'react';
import { welcomeOff, welcomeOn, increasePosition, decreasePosition, resetPosition } from '../actions/welcomeWindow'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

const WelcomeWindow = (props) => {

  const renderedText = () => {
    switch(props.welcomeWindow.position){
      case 1:
        return <span>This app is designed to help you keep track of tournaments, matches, and stats.</span>
      case 2:
        return <span>Add a new tournament by clicking the Tournaments link in the side bar.</span>
      case 3:
        return <span>After a Tournament has been created, view that tournament by clicking its link.</span>
      case 4:
        return <span>Add a new match to that tournament using the Add Match link.</span>
      case 5:
        return <span>The All Matches and All Opponents lists will automatically populate when new matches are created.</span>
      case 6:
        return <span>Click the stats link to see a summary of all your stats. Record and Points will update when tournaments and matches are updated or created.</span>
      case 7:
        return <span>To view your profile, click your name in the top right corner.</span>
      case 8:
        return <span>Get started by adding a new Tournament.</span>
      default:
        return ""
    }
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
    } else if(props.welcomeWindow.position < 7) {
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
      <div className="welcome-window-background">
      </div>
      <div className="welcome-window">
        <NavLink className="close-window-button" to={`/tournaments`}>x</NavLink>
        <h2>Welcome To Tennis Journal!</h2>
        <div className="welcome-window-text">
          <p>{renderedText()}</p>
        </div>
        {buttonDisplay()}
      </div>
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
    welcomeOff: () => dispatch(welcomeOff()),
    welcomeOn: () => dispatch(welcomeOn()),
    increasePosition: () => dispatch(increasePosition()),
    decreasePosition: () => dispatch(decreasePosition()),
    resetPosition: () => dispatch(resetPosition())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeWindow)
