import React, { Component } from 'react'
import StatsRankingModal from './modals/Stats/StatsRankingModal'
import StatsUTRModal from './modals/Stats/StatsUTRModal'
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

  pointsDisplay = () => {
    if(!this.props.currentUser.points) {
      return <span className="card-title font-weight-bold ml-1">* Points will update automatically when a tournament is added</span>
    } else {
      return <h5 className="card-title">{this.props.currentUser.points}</h5>
    }
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

        <div className="container px-4 pb-3 border-bottom">
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
                    {this.pointsDisplay()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-4">
          <div className="row mt-3">
            <div className="col-4 text-center">
              <h3 className="mb-0">Short Term Goal</h3>
              <small className="font-italic">1-3 months</small>
              <p className="mt-3">{this.props.currentUser.short_term_goal}</p>
            </div>
            <div className="col-4 text-center">
              <h3 className="mb-0">Mid Term Goal</h3>
              <small className="font-italic">3-6 months</small>
              <p className="mt-3">{this.props.currentUser.mid_term_goal}</p>
            </div>
            <div className="col-4 text-center">
              <h3 className="mb-0">Long Term Goal</h3>
              <small className="font-italic">6 months +</small>
              <p className="mt-3">{this.props.currentUser.long_term_goal}</p>
            </div>
          </div>
        </div>
        <StatsRankingModal currentUser={this.props.currentUser} updateCurrentUserInDatabase={this.props.updateCurrentUserInDatabase} />
        <StatsUTRModal currentUser={this.props.currentUser} updateCurrentUserInDatabase={this.props.updateCurrentUserInDatabase} />
      </section>
    )
  }
}

export default Home
