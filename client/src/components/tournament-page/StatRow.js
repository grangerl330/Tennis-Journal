import React from 'react';

const StatRow = (props) => {

  return (
    <div className="row justify-content-center">
      <div className="col-8 border-bottom py-3 pl-0">
        <span className="text-white">{props.name}</span>
      </div>
      <div className="col-1 border-bottom py-3">
        <span className="text-white">{props.value}</span>
      </div>
    </div>
  )
}

export default StatRow
