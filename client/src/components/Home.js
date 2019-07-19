import React from 'react'

const Home = (props) => {
  return (
    <div className="main-content-text">
      <p>Record: {props.currentUser.match_record}</p>
      <p>Current Ranking: {props.currentUser.ranking}</p>
      <p>UTR: {props.currentUser.utr}</p>
    </div>
  )
}

export default Home
