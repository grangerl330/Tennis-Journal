import React from 'react'

const RankingCard = (props) => {
  return (
    <div key={props.ranking.id} className="card ranking-card">
      <div className="card-title mt-5 mt-5">
        <h1>{props.ranking.month}</h1>
        <h5>{props.ranking.year}</h5>
      </div>
      <div className="card-body mb-5">
        <h3>{props.ranking.rank}</h3>
      </div>
    </div>
  )
}

export default RankingCard
