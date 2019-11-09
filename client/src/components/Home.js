import React, { Component } from 'react'
import StatsFormModal from './StatsFormModal'
import utrIcon from '../images/utr-icon.jpg'

class Home extends Component {
  componentDidMount(){
    this.props.getCurrentUser()
  }

  currentRankingDisplay = () => {
    if(!this.props.currentUser.ranking) {
      return <span className="font-italic">* Enter your Current Ranking by clicking the edit icon</span>
    } else {
      return <span className="font-bold">{this.props.currentUser.ranking}</span>
    }
  }

  utrDisplay = () => {
    if(!this.props.currentUser.utr) {
      return <span className="font-italic">* Enter your UTR by clicking the edit icon</span>
    } else {
      return <span className="font-bold">{this.props.currentUser.utr}</span>
    }
  }

  pointsDisplay = () => {
    if(!this.props.currentUser.points) {
      return <span className="font-italic">* Points will update automatically when a tournament is added.</span>
    } else {
      return <span className="font-bold">{this.props.currentUser.points}</span>
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

        <div className="container-fluid px-4">
          <div className="row justify-content-center mt-2">
            <div className="col-md-3">
              <div className="card card-stats text-center border-0">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-4 pb-0 pt-2">
                      <i className="fas fa-clipboard-list fa-3x"></i>
                    </div>
                    <div className="col-md-3 mx-0 px-0 text-center">
                      <h3 className="card-title">{this.props.currentUser.match_record}</h3>
                      <p className="card-text font-italic">Record</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card card-stats text-center border-0">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-4 pb-0 pt-2">
                      <i className="fas fa-list-ol fa-3x"></i>
                    </div>
                    <div className="col-md-5 mx-0 px-0 text-center">
                      <h3 className="card-title">{this.currentRankingDisplay()}</h3>
                      <p className="card-text font-italic">Current Ranking</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card card-stats text-center border-0">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-4 mx-0 px-0">
                      <img src={utrIcon} alt="utr-icon"/>
                    </div>
                    <div className="col-md-3 mx-0 px-0 text-center">
                      <h3 className="card-title">{this.utrDisplay()}</h3>
                      <p className="card-text font-italic">UTR</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card card-stats text-center border-0">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-4 mx-0 pb-0 pt-2">
                      <i className="far fa-dot-circle fa-3x"></i>
                    </div>
                    <div className="col-md-3 mx-0 px-0 text-center">
                      <h3 className="card-title">{this.pointsDisplay()}</h3>
                      <p className="card-text font-italic">Points</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-4 mx-0 px-0">
              <button className="btn" data-toggle="modal" data-target="#editStatsModal">
                <i className="fas fa-edit"></i><p className="ml-2 font-italic">Edit Stats</p>
              </button>
            </div>
          </div>
        </div>

        <StatsFormModal currentUser={this.props.currentUser} />
      </section>
    )
  }
}

export default Home
