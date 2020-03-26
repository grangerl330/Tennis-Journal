import React from 'react'

const PageTitleBar = (props) => {
  return (
    <div className="container-fluid py-2 bg-info text-white mb-4">
      <div className="row">
        <div className="col text-center">
          <h1>{props.pageTitle}</h1>
        </div>
      </div>
    </div>
  )
}

export default PageTitleBar
