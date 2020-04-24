import React from 'react'

const TournamentAttributeRow = (props) => {
  if(props.date) {
    return (
      <div className="row mt-3 ml-3 ml-md-5 pr-0 justify-content-start">
        <div className='col-6 col-md-3 text-green'>
          <span>{props.name}</span>
        </div>
        <div className='col-6 col-md-3 text-black'>
          <span>{props.value}</span>
        </div>
      </div>
    )
  } else {
    return (
      <div className="row mt-3 ml-3 ml-md-5 pr-0 justify-content-start">
        <div className='col-6 col-md-2 text-grey'>
          <span>{props.name}</span>
        </div>
        <div className='col-6 col-md-3 text-black'>
          <span>{props.value}</span>
        </div>
      </div>
    )
  }
}

export default TournamentAttributeRow
