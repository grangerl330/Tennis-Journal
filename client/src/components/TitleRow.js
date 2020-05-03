import React from 'react'

const TitleRow = (props) => {
  return (
    <div className="row py-4 background-light-grey text-green">
      <div className="col-10 px-0 mx-auto">
        <div className="row">
          <div className="col-1 ml-3 ml-md-0 px-0 text-center">
            <img className="icon" src={props.icon} alt={`${props.title}`} />
          </div>
          <div className="col-5 px-0 ml-5 ml-md-2 mr-auto my-auto">
            <h2 className="text-green">{props.title}</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TitleRow
