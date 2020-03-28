import React, { Component } from 'react'

// Display Components
import PageTitleBar from '../../../components/PageTitleBar'
import StatsOverviewDisplay from '../../../components/home-page/StatsOverviewDisplay'
import AllMatchStatsDisplay from '../../../components/home-page/AllMatchStatsDisplay'
import GoalsDisplay from '../../../components/home-page/GoalsDisplay'
import SkillsDisplay from '../../../components/home-page/SkillsDisplay'
import ImprovementDisplay from '../../../components/home-page/ImprovementDisplay'
import RankingsHistoryDisplay from '../../../components/home-page/RankingsHistoryDisplay'

// Modal Components
import AllStatsModal from '../../../components/modals/Home/AllStatsModal'
import GoalsModal from '../../../components/modals/Home/GoalsModal'
import StrengthsModal from '../../../components/modals/Home/StrengthsModal'
import SkillsModal from '../../../components/modals/Home/SkillsModal'
import NotesModal from '../../../components/modals/Home/NotesModal'

class HomePage extends Component {
  componentDidMount(){
    this.props.getCurrentUser()
  }

  render() {
    return (
      <div id="home-page" className="container-fluid mt-5 px-0">
        <div className="row">
          <div id="home-page-left" className="col-7 mr-4 ml-auto">
            <div className="row">
              <StatsOverviewDisplay currentUser={this.props.currentUser} />
            </div>
            <div className="row mt-5">
              <RankingsHistoryDisplay currentUser={this.props.currentUser} />
            </div>
            <div className="row mt-3">
              <AllMatchStatsDisplay currentUser={this.props.currentUser} />
            </div>
          </div>
          <div id="home-page-right" className="col-4 mr-auto">
            <div className="row">
              <GoalsDisplay currentUser={this.props.currentUser} />
            </div>
            <div className="row mt-3">
              <SkillsDisplay currentUser={this.props.currentUser} />
            </div>
            <div className="row mt-3">
              <ImprovementDisplay currentUser={this.props.currentUser} />
            </div>
          </div>
        </div>

        {/* Modals */}
        <AllStatsModal currentUser={this.props.currentUser} updateCurrentUserInDatabase={this.props.updateCurrentUserInDatabase} />
        <GoalsModal currentUser={this.props.currentUser} updateCurrentUserInDatabase={this.props.updateCurrentUserInDatabase} />
        <StrengthsModal currentUser={this.props.currentUser} updateCurrentUserInDatabase={this.props.updateCurrentUserInDatabase} />
        <SkillsModal currentUser={this.props.currentUser} updateCurrentUserInDatabase={this.props.updateCurrentUserInDatabase} />
        <NotesModal currentUser={this.props.currentUser} updateCurrentUserInDatabase={this.props.updateCurrentUserInDatabase} />
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
// <AllStatsModal currentUser={this.props.currentUser} updateCurrentUserInDatabase={this.props.updateCurrentUserInDatabase} />
// <GoalsModal currentUser={this.props.currentUser} updateCurrentUserInDatabase={this.props.updateCurrentUserInDatabase} />
// <StrengthsModal currentUser={this.props.currentUser} updateCurrentUserInDatabase={this.props.updateCurrentUserInDatabase} />
// <SkillsModal currentUser={this.props.currentUser} updateCurrentUserInDatabase={this.props.updateCurrentUserInDatabase} />
// <NotesModal currentUser={this.props.currentUser} updateCurrentUserInDatabase={this.props.updateCurrentUserInDatabase} />
