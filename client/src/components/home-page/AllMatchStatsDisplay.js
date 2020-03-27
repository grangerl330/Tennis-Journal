import React from 'react'

const AllMatchStatsDisplay = (props) => {
  return (
    <div id="Advanced-Stats-Display" className="container border rounded pb-4 my-5">
      <div className="row justify-content-center text-white bg-secondary">
        <h1>All Match Stats</h1>
      </div>
      <div className="row mt-4 justify-content-center">
        <div className="col-3 text-center">
          <h5>Matches Played: </h5>
        </div>
        <div className="col-3 text-center">
          <h5>Total Winners:</h5>
        </div>
        <div className="col-3 text-center">
          <h5>Total Forced Errors:</h5>
        </div>
        <div className="col-3 text-center">
          <h5>Total Unforced Errors:</h5>
        </div>
      </div>
      <div className="row mt-5 justify-content-center">
        <div className="col-3 text-center">
          <h5>Total Aces:</h5>
        </div>
        <div className="col-3 text-center">
          <h5>Total Service Winners:</h5>
        </div>
        <div className="col-3 text-center">
          <h5>Total Double Faults:</h5>
        </div>
        <div className="col-3 text-center">
          <h5>Somethings...</h5>
        </div>
      </div>
    </div>
  )
}

export default AllMatchStatsDisplay