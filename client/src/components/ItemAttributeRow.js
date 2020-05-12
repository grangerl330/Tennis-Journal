import React from 'react'
import { NavLink } from 'react-router-dom'

const ItemAttributeRow = (props) => {
  const renderValue = () => {
    if(props.link) {
      return (
        <NavLink to={props.link} className="text-black"><span>{props.value}</span></NavLink>
      )
    } else {
      return (
        <span>{props.value}</span>
      )
    }
  }

  if(props.date) {
    return (
      <div className="row mt-3 ml-3 ml-md-5 pr-0 justify-content-start">
        <div className='col-6 col-md-4 text-green'>
          <span>{props.name}</span>
        </div>
        <div className='col-6 col-md-3 p-md-0 text-black'>
          <span>{props.value}</span>
        </div>
      </div>
    )
  } else {
    return (
      <div className="row mt-3 ml-3 ml-md-5 pr-0 justify-content-start">
        <div className='col-4 col-md-2 text-grey'>
          <span>{props.name}</span>
        </div>
        <div className='col-6 col-md-3 text-black'>
          {renderValue()}
        </div>
      </div>
    )
  }
}

export default ItemAttributeRow
