import React from 'react'

const GoalsDisplay = (props) => {
  return (
    <div id="Goals-Display" className="container border rounded">
      <div className="row justify-content-center text-white bg-secondary">
        <h1>My Goals</h1>
      </div>
      <div className="row mt-3">
        <div className="col-6">
          <h5>Short Term Goal:</h5>
        </div>
        <div className="col-6">
          {props.currentUser.short_term_goal}
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-6">
          <h5>Mid Term Goal:</h5>
        </div>
        <div className="col-6">
          {props.currentUser.mid_term_goal}
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-6">
          <h5>Long Term Goal:</h5>
        </div>
        <div className="col-6">
          {props.currentUser.long_term_goal}
        </div>
      </div>
    </div>
  )
}

export default GoalsDisplay

// <div className="row mt-5">
//   <div className="col-4 text-center">
//     <h3 className="mb-0">Short Term Goal</h3>
//     <small className="font-italic text-info">1-3 months</small>
//     <p className="mt-3">{props.currentUser.short_term_goal}</p>
//   </div>
//   <div className="col-4 text-center">
//     <h3 className="mb-0">Mid Term Goal</h3>
//     <small className="font-italic text-info">3-6 months</small>
//     <p className="mt-3">{props.currentUser.mid_term_goal}</p>
//   </div>
//   <div className="col-4 text-center">
//     <h3 className="mb-0">Long Term Goal</h3>
//     <small className="font-italic text-info">6 months +</small>
//     <p className="mt-3">{props.currentUser.long_term_goal}</p>
//   </div>
// </div>
// <div className="row mt-3 mb-3 justify-content-center">
//   <div className="col-md-2">
//     <button className="btn btn-info btn-block" data-toggle="modal" data-target="#goalsModal">
//       <i className="fas fa-edit"></i> Edit Goals
//     </button>
//   </div>
// </div>
