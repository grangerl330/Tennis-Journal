import React, { Component } from 'react'
import AllStatsModal from './modals/Home/AllStatsModal'
import GoalsModal from './modals/Home/GoalsModal'
import StrengthsModal from './modals/Home/StrengthsModal'
import WeaknessesModal from './modals/Home/WeaknessesModal'
import NotesModal from './modals/Home/NotesModal'
import tennisBallIcon from '../images/tennis-ball-filled-icon.png'

class Home extends Component {
  componentDidMount(){
    this.props.getCurrentUser()
  }

  currentRankingDisplay = () => {
    if(!this.props.currentUser.ranking) {
      return <span className="card-title font-weight-bold ml-1">* Enter Your Current Ranking and UTR by clicking the Edit Stats button</span>
    } else {
      return <h5 className="card-title">{this.props.currentUser.ranking}</h5>
    }
  }

  messageDisplay = () => {
    if(!this.props.currentUser.utr || !this.props.currentUser.ranking) {
      return (
        <div id="home-message" className="row mt-3">
          <div className="col text-center">
            <p className="card-title font-weight-bold ml-1">* Enter Your Current Ranking and UTR by clicking the Edit Stats button.</p>
            <p className="card-title font-weight-bold ml-1">The Record and Points categories will update automatically when a Tournament or Match is added</p>
          </div>
        </div>
      )
    }
  }

  arrayDisplay = (array) => {
    const result = []

    array.forEach((item, index) =>
      result.push(
        <li key={index+1}>{item}</li>
      )
    )

    return result
  }

  render() {
    return (
      <section id="home-page">
        <div className="container-fluid py-2 bg-info text-white mb-4">
          <div className="row">
            <div className="col text-center">
              <h1>Home</h1>
            </div>
          </div>
        </div>

        <div className="container px-4">
          <div className="row justify-content-center mt-2">
            <div className="col-md-3 pl-5">
              <div className="row justify-content-center">
                <div className="col-5">
                  <i className="fas fa-clipboard-list fa-3x home-icon"></i>
                </div>
                <div className="col-7">
                  <div className="row">
                    <h6 className="font-italic text-info">Record</h6>
                  </div>
                  <div className="row">
                    <h5>{this.props.currentUser.match_record}</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 pl-5">
              <div className="row justify-content-center">
                <div className="col-5">
                  <i className="fas fa-list-ol fa-3x home-icon"></i>
                </div>
                <div className="col-7">
                  <div className="row">
                    <h6 className="font-italic text-info">Ranking</h6>
                  </div>
                  <div className="row">
                    <h5 className="card-title">{this.props.currentUser.ranking}</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 pl-5">
              <div className="row justify-content-center">
                <div className="col-5">
                  <img src={tennisBallIcon} alt="utr-icon"/>
                </div>
                <div className="col-7">
                  <div className="row">
                    <h6 className="font-italic text-info">UTR</h6>
                  </div>
                  <div className="row">
                    <h5 className="card-title">{this.props.currentUser.utr}</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 pl-5">
              <div className="row justify-content-center">
                <div className="col-5">
                  <i className="far fa-dot-circle fa-3x home-icon"></i>
                </div>
                <div className="col-7">
                  <div className="row">
                    <h6 className="font-italic text-info">Points</h6>
                  </div>
                  <div className="row">
                    <h5 className="card-title">{this.props.currentUser.points}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          {this.messageDisplay()}
          <div className="row mt-3 mb-3 justify-content-center">
            <div className="col-md-3">
              <button className="btn btn-info btn-block" data-toggle="modal" data-target="#allStatsModal">
                <i className="fas fa-edit"></i> Edit Stats
              </button>
            </div>
          </div>
        </div>

        <div className="container border rounded pb-4 my-5">
          <div className="row justify-content-center text-white bg-secondary">
            <h1>My Goals</h1>
          </div>
          <div className="row mt-5">
            <div className="col-4 text-center">
              <h3 className="mb-0">Short Term Goal</h3>
              <small className="font-italic text-info">1-3 months</small>
              <p className="mt-3">{this.props.currentUser.short_term_goal}</p>
            </div>
            <div className="col-4 text-center">
              <h3 className="mb-0">Mid Term Goal</h3>
              <small className="font-italic text-info">3-6 months</small>
              <p className="mt-3">{this.props.currentUser.mid_term_goal}</p>
            </div>
            <div className="col-4 text-center">
              <h3 className="mb-0">Long Term Goal</h3>
              <small className="font-italic text-info">6 months +</small>
              <p className="mt-3">{this.props.currentUser.long_term_goal}</p>
            </div>
          </div>
          <div className="row mt-3 mb-3 justify-content-center">
            <div className="col-md-3">
              <button className="btn btn-info btn-block" data-toggle="modal" data-target="#goalsModal">
                <i className="fas fa-edit"></i> Edit Goals
              </button>
            </div>
          </div>
        </div>

        <div className="container border rounded pb-4 mt-5 mb-4">
          <div className="row justify-content-center text-white bg-secondary">
            <h1>My Skills</h1>
          </div>
          <div className="row mt-4">
            <div className="col-6 text-center">
              <div className="row justify-content-center mb-3">
                <h3 className="mb-0">Strengths</h3>
              </div>
              <div className="row justify-content-center">
                <ul className="mr-5">
                  {this.arrayDisplay(this.props.currentUser.strengths)}
                </ul>
              </div>
              <div className="row justify-content-center mt-3 text-center">
                <div className="col-md-4">
                  <button className="btn btn-info btn-block" data-toggle="modal" data-target="#strengthsModal">
                    <i className="fas fa-edit"></i> Edit Strengths
                  </button>
                </div>
              </div>
            </div>
            <div className="col-6 text-center">
              <div className="row justify-content-center mb-3">
                <h3 className="mb-0">Weaknesses</h3>
              </div>
              <div className="row justify-content-center text-center">
                <ul className="mr-5">
                  {this.arrayDisplay(this.props.currentUser.weaknesses)}
                </ul>
              </div>
              <div className="row justify-content-center mt-3 text-center">
                <div className="col-md-5">
                  <button className="btn btn-info btn-block" data-toggle="modal" data-target="#weaknessesModal">
                    <i className="fas fa-edit"></i> Edit Weaknesses
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container border rounded pb-4 mt-5 mb-4">
          <div className="row justify-content-center bg-secondary mb-4">
            <div className="col text-center text-white">
              <h1>Things To Improve</h1>
            </div>
          </div>
          <div className="row mt-1">
            <div className="col text-center">
              {this.props.currentUser.notes}
            </div>
          </div>
          <div className="row mt-5 mb-3 justify-content-center">
            <div className="col-md-3">
              <button className="btn btn-info btn-block" data-toggle="modal" data-target="#notesModal">
                <i className="fas fa-edit"></i> Edit Notes
              </button>
            </div>
          </div>
        </div>

        <AllStatsModal currentUser={this.props.currentUser} updateCurrentUserInDatabase={this.props.updateCurrentUserInDatabase} />
        <GoalsModal currentUser={this.props.currentUser} updateCurrentUserInDatabase={this.props.updateCurrentUserInDatabase} />
        <StrengthsModal currentUser={this.props.currentUser} updateCurrentUserInDatabase={this.props.updateCurrentUserInDatabase} />
        <WeaknessesModal currentUser={this.props.currentUser} updateCurrentUserInDatabase={this.props.updateCurrentUserInDatabase} />
        <NotesModal currentUser={this.props.currentUser} updateCurrentUserInDatabase={this.props.updateCurrentUserInDatabase} />
      </section>
    )
  }
}

export default Home
