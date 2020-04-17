import React, { Component } from 'react'
import RankingsChart from './RankingsChart'
import leftArrow from '../../../../images/left-arrow-green.svg'
import rightArrow from '../../../../images/right-arrow-green.svg'

class RankingsHistoryDisplay extends Component {

  constructor(props){
    super(props)

    this.state = {
      chartDate: new Date().getFullYear().toString(),
      dataExists: props.currentUser.rankings.some(rank => rank.year === new Date().getFullYear().toString())
    }
  }

  setChartData = () => {
    const filteredRankings = this.props.currentUser.rankings.filter(rank => rank.year === this.state.chartDate)

    const data = filteredRankings.map(rank =>
      Object.create({month: rank.month, Rank: rank.rank})
    )

    return data
  }

  updateYear = event => {
    event.preventDefault()

    let currentYear = parseInt(this.state.chartDate)

    if(event.target.classList.contains("right")) {
      this.setState({
        chartDate: (currentYear + 1).toString(),
        dataExists: this.props.currentUser.rankings.some(rank => rank.year === (currentYear + 1).toString())
      })
    } else if(event.target.classList.contains("left")) {
      this.setState({
        chartDate: (currentYear - 1).toString(),
        dataExists: this.props.currentUser.rankings.some(rank => rank.year === (currentYear - 1).toString())
      })
    }
  }

  renderChart = () => {
    if(this.state.dataExists){
      return (
        <RankingsChart currentUser={this.props.currentUser} data={this.setChartData()} />
      )
    } else {
      return (
        <div className="rankings-chart-message d-flex">
          <h2 className="my-auto">* No Data Exists For This Year</h2>
        </div>
      )
    }
  }

 render() {
   return (
     <div id="Rankings-History-Display" className="container shadow-light-green">
       <div className="row justify-content-center border rounded-top text-white background-dark py-2">
        <h4>Rankings History</h4>
       </div>
       <div className="row mt-2">
         <button className="ml-auto mr-3 rankings-chart-button" onClick={this.updateYear}>
           <img className="left mt-auto mb-1" src={leftArrow} alt="previous year" />
         </button>
         <span className="text-green">{this.state.chartDate}</span>
         <button className="mr-auto ml-3 rankings-chart-button" onClick={this.updateYear}>
           <img className="right mt-auto mb-1" src={rightArrow} alt="next year" />
         </button>
       </div>
       <div className="row w-100 h-100 text-center justify-content-center align-self-center">
         {this.renderChart()}
       </div>
     </div>
   )
 }
}

export default RankingsHistoryDisplay
