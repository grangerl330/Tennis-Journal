import React, { Component } from 'react'
import $ from 'jquery'

// Display Components
import StatsOverviewDisplay from '../components/home-page/StatsOverviewDisplay'
import AllMatchStatsDisplay from '../components/home-page/AllMatchStatsDisplay'
import GoalsDisplay from '../components/home-page/GoalsDisplay'
import SkillsDisplay from '../components/home-page/SkillsDisplay'
import ImprovementDisplay from '../components/home-page/ImprovementDisplay'
import RankingsHistoryDisplay from '../components/home-page/RankingsHistoryDisplay'

// Modal Components
import StatsOverviewModal from '../components/home-page/StatsOverviewModal'
import GoalsModal from '../components/home-page/GoalsModal'
import ImprovementModal from '../components/home-page/ImprovementModal'

class HomePage extends Component {
  componentDidMount(){
    this.props.getCurrentUser()
    $('[data-toggle="tooltip"]').tooltip();
  }

  render() {
    return (
      <div id="home-page" className="container-fluid px-0">
        <div className="row mx-auto">
          <div id="home-page-left" className="col col-xl-8">
            <div className="row pt-5 px-0 px-xl-5">
              <StatsOverviewDisplay currentUser={this.props.currentUser} />
            </div>
            <div className="row mt-4 mt-xl-3 mb-5 px-3 px-xl-5">
              <RankingsHistoryDisplay currentUser={this.props.currentUser} />
            </div>
            <div className="row mt-3 mb-5 px-3 px-xl-5">
              <AllMatchStatsDisplay currentUser={this.props.currentUser} />
            </div>
          </div>
          <div id="home-page-right" className="col col-xl-4 background-light-grey">
            <div className="row">
              <div className="col px-4 mt-5">
                <GoalsDisplay currentUser={this.props.currentUser} />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col px-4 mt-5">
                <SkillsDisplay currentUser={this.props.currentUser} updateCurrentUserInDatabase={this.props.updateCurrentUserInDatabase}/>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col px-4 my-5">
                <ImprovementDisplay currentUser={this.props.currentUser} />
              </div>
            </div>
          </div>
        </div>

        {/* Modals */}
        <StatsOverviewModal currentUser={this.props.currentUser} updateCurrentUserInDatabase={this.props.updateCurrentUserInDatabase} />
        <GoalsModal currentUser={this.props.currentUser} updateCurrentUserInDatabase={this.props.updateCurrentUserInDatabase} />
        <ImprovementModal currentUser={this.props.currentUser} updateCurrentUserInDatabase={this.props.updateCurrentUserInDatabase} />
      </div>
    )
  }
}

export default HomePage


// currentRankingDisplay = () => {
//   if(!this.props.currentUser.ranking) {
//     return <span className="card-title font-weight-bold ml-1">* Enter Your Current Ranking and UTR by clicking the Edit Stats button</span>
//   } else {
//     return <h5 className="card-title">{this.props.currentUser.ranking}</h5>
//   }
// }
//
// messageDisplay = () => {
//   if(!this.props.currentUser.utr || !this.props.currentUser.ranking) {
//     return (
//       <div id="home-message" className="row mt-3">
//         <div className="col text-center">
//           <p className="card-title font-weight-bold ml-1">* Enter Your Current Ranking and UTR by clicking the Edit Stats button.</p>
//           <p className="card-title font-weight-bold ml-1">The Record and Points categories will update automatically when a Tournament or Match is added</p>
//         </div>
//       </div>
//     )
//   }
// }

// {/* Home Page Displays */}
// <AllMatchStatsDisplay currentUser={this.props.currentUser} />
// <RankingsHistoryDisplay currentUser={this.props.currentUser} />
// <GoalsDisplay currentUser={this.props.currentUser} />
// <SkillsDisplay currentUser={this.props.currentUser} />
// <ImprovementDisplay currentUser={this.props.currentUser} />
//
// {/* Modals */}
// <StatsOverviewModal currentUser={this.props.currentUser} updateCurrentUserInDatabase={this.props.updateCurrentUserInDatabase} />
// <GoalsModal currentUser={this.props.currentUser} updateCurrentUserInDatabase={this.props.updateCurrentUserInDatabase} />
// <StrengthsModal currentUser={this.props.currentUser} updateCurrentUserInDatabase={this.props.updateCurrentUserInDatabase} />
// <SkillsModal currentUser={this.props.currentUser} updateCurrentUserInDatabase={this.props.updateCurrentUserInDatabase} />
// <ImprovementModal currentUser={this.props.currentUser} updateCurrentUserInDatabase={this.props.updateCurrentUserInDatabase} />
