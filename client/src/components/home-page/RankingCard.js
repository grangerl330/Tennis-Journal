import React from 'react'

const RankingCard = (props) => {
  return (
    <div className="card">
      <div className="card-title mt-5 mt-5">
        <h1>January</h1>
        <h5>2019</h5>
      </div>
      <div className="card-body mb-5">
        <h3>{props.ranking}</h3>
      </div>
    </div>
  )
}

export default RankingCard
