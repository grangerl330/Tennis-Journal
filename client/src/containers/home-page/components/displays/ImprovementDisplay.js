import React from 'react'
import editIcon from '../../../../images/edit.svg'

const ImprovementDisplay = (props) => {
  return (
    <div id="Improvement-Display" className="container border rounded shadow-light-green border-white bg-white">
      <div className="row mt-3 justify-content-center">
          <h4 className="mx-auto text-green">Things To Improve</h4>
          <span data-toggle="tooltip" data-placement="top" title="Edit Things To Improve" style={{position: 'absolute', left: '85%'}}>
            <img src={editIcon} className="mr-3" alt="edit" data-toggle="modal" data-target="#notesModal" />
          </span>
      </div>
      <div className="row my-3 vh-45">
        <div className="col text-center">
          {props.currentUser.notes}
        </div>
      </div>
    </div>
  )
}

export default ImprovementDisplay
