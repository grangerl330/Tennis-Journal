import React from 'react'
import notesImage from '../../../images/notes.svg'
import goalsImage from '../../../images/goals.svg'
import rankImage from '../../../images/rank.svg'

const LoginPageLeft = (props) => {
  return (
    <div className="col-4 background-green d-flex flex-column">
      <div className="row mt-auto justify-content-center">
        <div className="col-9 text-center">
          <h2 className="text-white">Get started with Tennis Journal!</h2>
        </div>
      </div>
      <div className="row mt-4 justify-content-center">
        <div className="col-2 p-0 ml-auto mr-3">
          <img className="mx-auto icon" src={notesImage} alt="notes" />
        </div>
        <div className="col-6 p-0 mr-auto">
          <span className="text-white signup-text">Keep detailed notes on each match and opponent to help you analyze and improve your game.</span>
        </div>
      </div>
      <div className="row mt-5 justify-content-center">
        <div className="col-2 p-0 ml-auto mr-3">
          <img className="mx-auto icon" src={goalsImage} alt="goals" />
        </div>
        <div className="col-6 p-0 mr-auto">
          <span className="text-white signup-text">Set and keep track of goals to help motivate you to succeed.</span>
        </div>
      </div>
      <div className="row mt-5 d-flex">
        <div className="col-2 p-0 ml-auto mr-3">
          <img className="mx-auto icon" src={rankImage} alt="rank" />
        </div>
        <div className="col-6 p-0 mr-auto">
          <span className="text-white signup-text">Track advanced statistics like unforced errors, winners, double faults, and more!</span>
        </div>
      </div>
      <div className="row mt-5 mb-auto justify-content-center">
        <div className="col-7 text-center">
          <button className="btn w-100 btn-signup" onClick={props.toggleSignUp}>Signup</button>
        </div>
      </div>
    </div>
  )
}

export default LoginPageLeft
