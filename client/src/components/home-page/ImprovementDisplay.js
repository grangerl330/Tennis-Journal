import React from 'react'

const ImprovementDisplay = (props) => {
  return (
    <div id="Improvement-Display" className="container border rounded pb-4 mt-5 mb-4">
      <div className="row justify-content-center bg-secondary mb-4">
        <div className="col text-center text-white">
          <h1>Things To Improve</h1>
        </div>
      </div>
      <div className="row mt-1">
        <div className="col text-center">
          {props.notes}
        </div>
      </div>
      <div className="row mt-5 mb-3 justify-content-center">
        <div className="col-md-2">
          <button className="btn btn-info btn-block" data-toggle="modal" data-target="#notesModal">
            <i className="fas fa-edit"></i> Edit Notes
          </button>
        </div>
      </div>
    </div>
  )
}

export default ImprovementDisplay
