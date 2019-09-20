import React from 'react';
import { increasePosition, decreasePosition, resetPosition } from '../actions/tutorial'
import tutorial2 from '../images/tutorial2.png'
import tutorial3 from '../images/tutorial3.png'
import tutorial4 from '../images/tutorial4.png'
import tutorial5 from '../images/tutorial5.png'
import tutorial6 from '../images/tutorial6.png'
import tutorial7 from '../images/tutorial7.png'
import tutorial8 from '../images/tutorial8.png'
import closeWindowImg from '../images/close-window.png'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

const Tutorial = (props) => {

  const renderedText = () => {
    switch(props.tutorial.position){
      case 1:
        return (
          <div className="tutorial-text tutorial-1-text">
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
            <div className="tutorial-text tutorial-2-text">
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
            <div className="tutorial-text tutorial-3-text">
              {tutorialCloseButton()}
              <p>After a Tournament has been created, view that tournament by clicking its link.</p>
              {buttonDisplay()}
            </div>
          </>
        )
      case 4:
        return (
          <>
            <img src={tutorial4} alt="tutorial window 4" className="tutorial-4-image"/>
            <div className="tutorial-text tutorial-4-text">
              {tutorialCloseButton()}
              <p>Add a new match to that tournament by clicking the plus icon on the tournament view page.</p>
              {buttonDisplay()}
            </div>
          </>
        )
      case 5:
        return (
          <>
            <img src={tutorial5} alt="tutorial window 5" className="tutorial-5-image"/>
            <div className="tutorial-text tutorial-5-text">
              {tutorialCloseButton()}
              <p>The All Matches and All Opponents lists will automatically populate when new matches are created.</p>
              {buttonDisplay()}
            </div>
          </>
        )
      case 6:
        return (
          <>
            <img src={tutorial6} alt="tutorial window 6" className="tutorial-6-image"/>
            <div className="tutorial-text tutorial-6-text">
              {tutorialCloseButton()}
              <p>Click the My Stats link to see a summary of all your stats.</p>
              {buttonDisplay()}
            </div>
          </>
        )
      case 7:
        return (
          <>
            <img src={tutorial7} alt="tutorial window 7" className="tutorial-7-image"/>
            <div className="tutorial-text tutorial-7-text">
              {tutorialCloseButton()}
              <p>Record and Points will update automatically when matches and tournaments are added or updated</p>
              {buttonDisplay()}
            </div>
          </>
        )
      case 8:
        return (
          <>
            <img src={tutorial8} alt="tutorial window 8" className="tutorial-8-image"/>
            <div className="tutorial-text tutorial-8-text">
              {tutorialCloseButton()}
              <p>To view your profile, click your name in the top right corner.</p>
              {buttonDisplay()}
            </div>
          </>
        )
      case 9:
        return (
          <>
            <div className="tutorial-text tutorial-9-text">
              {tutorialCloseButton()}
              <p>Get started by adding a new Tournament.</p>
              {buttonDisplay()}
            </div>
          </>
        )
      default:
        return ""
    }
  }

  const tutorialCloseButton = () => {
    return <NavLink className="close-window-button" to={`/tournaments`} onClick={handleOnClickLink}><img src={closeWindowImg} alt="Close Window"/></NavLink>
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
    if(props.tutorial.position === 1) {
      return <button onClick={handleOnClickNext} className="button">Next</button>
    } else if(props.tutorial.position < 9) {
      return (
        <>
          <button onClick={handleOnClickBack} className="button welcome-window-button">Back</button>
          <button onClick={handleOnClickNext} className="button">Next</button>
        </>
      )
    } else {
      return (
        <>
          <button onClick={handleOnClickBack} className="button welcome-window-button">Back</button>
          <NavLink to={'/tournaments'} className="button" onClick={handleOnClickLink}>Get started</NavLink>
        </>
      )
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
    tutorial: state.tutorial
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increasePosition: () => dispatch(increasePosition()),
    decreasePosition: () => dispatch(decreasePosition()),
    resetPosition: () => dispatch(resetPosition())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tutorial)
