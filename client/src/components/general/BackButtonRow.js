import React from 'react'
import backArrow from '../../images/back-arrow.svg'

const BackButtonRow = (props) => {
  return (
    <div className="row mt-5 justify-content-start ml-2 ml-md-5">
      <div className="col-1">
        <button className="border-0 bg-white" onClick={props.goBack}>
          <img src={backArrow} alt="back arrow" />
        </button>
      </div>
    </div>
  )
}

export default BackButtonRow
