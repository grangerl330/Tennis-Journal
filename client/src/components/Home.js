import React, { Component } from 'react'
import AllStatsModal from './modals/Stats/AllStatsModal'
import GoalsModal from './modals/Stats/GoalsModal'
import StatsUTRModal from './modals/Stats/StatsUTRModal'
import StrengthsModal from './modals/Stats/StrengthsModal'
import WeaknessesModal from './modals/Stats/WeaknessesModal'
import NotesModal from './modals/Stats/NotesModal'
import tennisBallIcon from '../images/tennis-ball-filled-icon.png'

class Home extends Component {
  componentDidMount(){
    this.props.getCurrentUser()
  }

  currentRankingDisplay = () => {
    if(!this.props.currentUser.ranking) {
      return <span className="card-title font-weight-bold ml-1">* Enter Your Current Ranking by clicking here</span>
    } else {
      return <h5 className="card-title">{this.props.currentUser.ranking}</h5>
    }
  }

  utrDisplay = () => {
    if(!this.props.currentUser.utr) {
      return <span className="card-title font-weight-bold ml-1">* Enter your UTR by clicking here</span>
    } else {
      return <h5 className="card-title">{this.props.currentUser.utr}</h5>
    }
  }

  arrayDisplay = (array) => {
    const result = []

    array.forEach((item, index) =>
      result.push(
        <div className="col-auto px-0 mb-3" key={index+1}>
          <div className="card card-tournament border border-secondary">
            <div className="card-body text-center">
              <p className="card-text">{item}</p>
            </div>
          </div>
        </div>
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
              <button className="btn w-100 shadow-none" data-toggle="modal" data-target="#statsRankingModal">
                <div className="row justify-content-center">
                  <div className="col-5">
                    <i className="fas fa-list-ol fa-3x home-icon"></i>
                  </div>
                  <div className="col-7">
                    <div className="row">
                      <h6 className="font-italic text-info">Ranking</h6>
                    </div>
                    <div className="row">
                      {this.currentRankingDisplay()}
                    </div>
                  </div>
                </div>
              </button>
            </div>
            <div className="col-md-3 pl-5">
              <button className="btn w-100 shadow-none" data-toggle="modal" data-target="#statsUTRModal">
                <div className="row justify-content-center">
                  <div className="col-5">
                    <img src={tennisBallIcon} alt="utr-icon"/>
                  </div>
                  <div className="col-7">
                    <div className="row">
                      <h6 className="font-italic text-info">UTR</h6>
                    </div>
                    <div className="row">
                      {this.utrDisplay()}
                    </div>
                  </div>
                </div>
              </button>
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
            <h1>My Game</h1>
          </div>
          <div className="row mt-4">
            <div className="col-6 text-center">
              <div className="row justify-content-center mb-3">
                <h3 className="mb-0">Strengths</h3>
              </div>
              <div className="row justify-content-center text-center">
                <div className="card-deck mt-4 d-flex justify-content-center">
                  {this.arrayDisplay(this.props.currentUser.strengths)}
                </div>
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
                <div className="card-deck mt-4 d-flex justify-content-center">
                  {this.arrayDisplay(this.props.currentUser.weaknesses)}
                </div>
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
            <div className="col">
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
        <StatsUTRModal currentUser={this.props.currentUser} updateCurrentUserInDatabase={this.props.updateCurrentUserInDatabase} />
        <StrengthsModal currentUser={this.props.currentUser} updateCurrentUserInDatabase={this.props.updateCurrentUserInDatabase} />
        <WeaknessesModal currentUser={this.props.currentUser} updateCurrentUserInDatabase={this.props.updateCurrentUserInDatabase} />
        <NotesModal currentUser={this.props.currentUser} updateCurrentUserInDatabase={this.props.updateCurrentUserInDatabase} />
      </section>
    )
  }
}

export default Home
