import React, { Component } from 'react'

// Display Components
import PageTitleBar from '../../../components/PageTitleBar'
import StatsOverviewDisplay from '../../../components/home-page/StatsOverviewDisplay'
import GoalsDisplay from '../../../components/home-page/GoalsDisplay'
import SkillsDisplay from '../../../components/home-page/SkillsDisplay'
import ImprovementDisplay from '../../../components/home-page/ImprovementDisplay'

// Modal Components
import AllStatsModal from '../../../components/modals/Home/AllStatsModal'
import GoalsModal from '../../../components/modals/Home/GoalsModal'
import StrengthsModal from '../../../components/modals/Home/StrengthsModal'
import WeaknessesModal from '../../../components/modals/Home/WeaknessesModal'
import NotesModal from '../../../components/modals/Home/NotesModal'

class HomePage extends Component {
  componentDidMount(){
    this.props.getCurrentUser()
  }

  render() {
    return (
      <section id="home-page">
        <PageTitleBar pageTitle="Home" />

        {/* Home Page Displays */}
        <StatsOverviewDisplay matchRecord={this.props.currentUser.match_record} ranking={this.props.currentUser.ranking} utr={this.props.currentUser.utr} points={this.props.currentUser.points} />
        <GoalsDisplay shortTermGoal={this.props.currentUser.short_term_goal} midTermGoal={this.props.currentUser.mid_term_goal} longTermGoal={this.props.currentUser.long_term_goal} />
        <SkillsDisplay strengths={this.props.currentUser.strengths} weaknesses={this.props.currentUser.weaknesses} />
        <ImprovementDisplay notes={this.props.currentUser.notes} />

        {/* Modals */}
        <AllStatsModal currentUser={this.props.currentUser} updateCurrentUserInDatabase={this.props.updateCurrentUserInDatabase} />
        <GoalsModal currentUser={this.props.currentUser} updateCurrentUserInDatabase={this.props.updateCurrentUserInDatabase} />
        <StrengthsModal currentUser={this.props.currentUser} updateCurrentUserInDatabase={this.props.updateCurrentUserInDatabase} />
        <WeaknessesModal currentUser={this.props.currentUser} updateCurrentUserInDatabase={this.props.updateCurrentUserInDatabase} />
        <NotesModal currentUser={this.props.currentUser} updateCurrentUserInDatabase={this.props.updateCurrentUserInDatabase} />
      </section>
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
