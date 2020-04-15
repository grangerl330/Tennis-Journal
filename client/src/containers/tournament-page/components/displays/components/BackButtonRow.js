import React from 'react'

const BackButtonRow = (props) => {
  return (
    <div className="row mt-5 justify-content-start ml-5">
      <div className="col-1">
        <button className="border-0">
          <i className="fas fa-chevron-left fa-2x text-green" onClick={props.goBack}></i>
        </button>
      </div>
    </div>
  )
}

export default BackButtonRow
