import React from 'react'
import RankingCard from './RankingCard'

const RankingsHistoryDisplay = (props) => {
  return (
    <div id="Rankings-History-Display" className="container bg-info border rounded my-5">
      <div className="row justify-content-center text-white bg-secondary">
        <h1>Rankings History</h1>
      </div>
      <div className="row text-center justify-content-center align-self-center">
        <div className="col">
          <div className="card-deck-scrollable flex-nowrap overflow-auto">
            <RankingCard ranking={props.currentUser.ranking}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RankingsHistoryDisplay
