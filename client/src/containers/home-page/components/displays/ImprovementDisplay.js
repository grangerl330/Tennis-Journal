import React from 'react'

const ImprovementDisplay = (props) => {
  return (
    <div id="Improvement-Display" className="container border rounded shadow-green bg-white">
      <div className="row mt-3 justify-content-center">
          <h4 className="mx-auto text-green">Things To Improve</h4>
          <span data-toggle="tooltip" data-placement="top" title="Edit Things To Improve">
            <i className="fas fa-pencil-alt pr-2 my-auto fa-s text-green" data-toggle="modal" data-target="#notesModal"></i>
          </span>
      </div>
      <div className="row mb-3 vh-50">
        <div className="col text-center">
          {props.currentUser.notes}
        </div>
      </div>
    </div>
  )
}

export default ImprovementDisplay
