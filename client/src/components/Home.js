import React from 'react'

const Home = (props) => {
  return (
    <div className="main-content-text">
      <h2>Home Page</h2>
      <p>First Name: {props.currentUser.first_name}</p>
      <p>Last Name: {props.currentUser.last_name}</p>
      <p>Record: <i>user's record</i></p>
      <p>Current Ranking: <i>user's record</i></p>
      <p>UTR: <i>user's UTR</i></p>
    </div>
  )
}

export default Home
