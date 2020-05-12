import React from 'react'

const NotesRow = (props) => {
  return (
    <div className="row mt-3 ml-3 ml-md-5 pr-0 justify-content-start">
      <div className='col-3 col-md-2 text-grey'>
        <span>{props.name}</span>
      </div>
      <div className='col-8 col-md-9 text-black'>
        <span>{props.value}</span>
      </div>
    </div>
  )
}

export default NotesRow
