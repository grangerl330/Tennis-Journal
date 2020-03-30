import React from 'react'

const GoalsDisplay = (props) => {
  return (
    <div id="Goals-Display" className="container border rounded shadow-green bg-white">
      <div className="row mt-3 justify-content-center">
        <h4 className="mx-auto text-green">My Goals</h4>
        <span data-toggle="tooltip" data-placement="top" title="Edit Goals">
          <i className="fas fa-pencil-alt pr-2 my-auto fa-s text-green" data-toggle="modal" data-target="#goalsModal"></i>
        </span>
      </div>
      <div className="row mt-3">
        <div className="col">
          <div className="row">
            <div className="col-5">
              <span>Short Term Goal:</span>
            </div>
            <div className="col-7">
              <span className="goals-text">{props.currentUser.short_term_goal}</span>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-5">
              <span>Mid Term Goal:</span>
            </div>
            <div className="col-7">
              <span className="goals-text">{props.currentUser.mid_term_goal}</span>
            </div>
          </div>
          <div className="row my-3">
            <div className="col-5">
              <span>Long Term Goal:</span>
            </div>
            <div className="col-7">
              <span className="goals-text">{props.currentUser.long_term_goal}</span>
            </div>
          </div>
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
