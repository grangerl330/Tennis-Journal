import React from 'react'

const Home = (props) => {
  return (
    <div className="main-content-text">
      <h2>Home Page</h2>
      <p><b>{props.currentUser.first_name} {props.currentUser.last_name}</b></p>
      <p>Record: {props.currentUser.record}</p>
      <p>Current Ranking: {props.currentUser.ranking}</p>
      <p>UTR: {props.currentUser.utr}</p>
    </div>
  )
}

export default Home
