import React, { Component } from 'react'
import StatsFormModal from './StatsFormModal'

class Stats extends Component {
  componentDidMount(){
    this.props.getCurrentUser()
  }

  currentRankingDisplay = () => {
    if(!this.props.currentUser.ranking) {
      return <span>* Enter your Current Ranking by clicking the edit icon</span>
    } else {
      return <span>{this.props.currentUser.ranking}</span>
    }
  }

  utrDisplay = () => {
    if(!this.props.currentUser.utr) {
      return <span>* Enter your UTR by clicking the edit icon</span>
    } else {
      return <span>{this.props.currentUser.utr}</span>
    }
  }

  pointsDisplay = () => {
    if(!this.props.currentUser.points) {
      return <span>* Points will update automatically when a tournament is added.</span>
    } else {
      return <span>{this.props.currentUser.points}</span>
    }
  }

  render() {
    return (
      <section id="home-page">
        <div className="container-fluid py-2 bg-info text-white mb-4">
          <div className="row">
            <div className="col text-center">
              <h1>
                <i className="fas fa-home"></i> Home
              </h1>
            </div>
          </div>
        </div>

        <div className="container-fluid px-4">
          <div className="row justify-content-center">
            <div className="col-md-5">
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-1">
              <h3>Stats</h3>
              <button className="btn btn-block" data-toggle="modal" data-target="#editStatsModal">
                <i className="fas fa-edit"></i>
              </button>
            </div>
            <div className="col-md-2">
              <p><b>Record:</b> {this.props.currentUser.match_record}</p>
            </div>
            <div className="col-md-3">
              <p><b>Current Ranking:</b> {this.currentRankingDisplay()}</p>
            </div>
            <div className="col-md-3">
              <p><b>UTR:</b> {this.utrDisplay()}</p>
            </div>
            <div className="col-md-3">
              <p><b>Points:</b> {this.pointsDisplay()}</p>
            </div>
          </div>
        </div>
        <StatsFormModal currentUser={this.props.currentUser} />
      </section>
    )
  }
}

export default Stats
