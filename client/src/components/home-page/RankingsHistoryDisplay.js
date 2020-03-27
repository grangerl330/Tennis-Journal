import React from 'react'
import RankingCard from './RankingCard'
import RankingsChart from './RankingsChart'

const RankingsHistoryDisplay = (props) => {

  const data = props.currentUser.rankings.map(rank =>
    Object.create({month: rank.month, Rank: rank.rank})
  )

  return (
    <div id="Rankings-History-Display" className="container border rounded my-5">
      <div className="row justify-content-center text-white bg-secondary">
        <h1>Rankings History</h1>
      </div>
      <div className="row w-100 h-100 text-center justify-content-center align-self-center">
        <RankingsChart currentUser={props.currentUser} data={data}/>
      </div>
    </div>
  )
}



export default RankingsHistoryDisplay
