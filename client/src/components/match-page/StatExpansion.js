import React from 'react'

const StatExpansion = (props) => {
  const renderStatRows = () => {
    const result = [];

    for(let stat of props.stats) {
      result.push(
        <div className="row mt-2">
          <div className="col-9 ml-3">
            <span className="font-italic">{stat.name}</span>
          </div>
          <div className="col-2 text-right pr-0">
            <span>{stat.value}</span>
          </div>
        </div>
      )
    }

    return result
  }

  return (
    <div className="row justify-content-center collapse" id={props.expansionId}>
      <div className="col-9 pb-3 text-white">
        {renderStatRows()}
      </div>
    </div>
  )
}

export default StatExpansion
