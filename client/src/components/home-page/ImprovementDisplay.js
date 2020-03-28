import React from 'react'

const ImprovementDisplay = (props) => {
  return (
    <div id="Improvement-Display" className="container border rounded">
      <div className="row justify-content-center text-white bg-secondary">
          <h3>Things To Improve</h3>
          <i className="fas fa-edit ml-2 my-auto fa-xs" data-toggle="modal" data-target="#notesModal"></i>
      </div>
      <div className="row mt-1">
        <div className="col text-center">
          {props.currentUser.notes}
        </div>
      </div>
    </div>
  )
}

export default ImprovementDisplay
