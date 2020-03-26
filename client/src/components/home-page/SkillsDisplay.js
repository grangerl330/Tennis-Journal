import React from 'react'

const SkillsDisplay = (props) => {
  return (
    <div id="Skills-Display" className="container border rounded pb-4 mt-5 mb-4">
      <div className="row justify-content-center text-white bg-secondary">
        <h1>My Skills</h1>
      </div>
      <div className="row mt-4">
        <div className="col-6 text-center">
          <div className="row justify-content-center mb-3">
            <h3 className="mb-0">Strengths</h3>
          </div>
          <div className="row justify-content-center">
            <ul className="mr-5">
              {arrayDisplay(props.currentUser.strengths)}
            </ul>
          </div>
          <div className="row justify-content-center mt-3 text-center">
            <div className="col-md-4">
              <button className="btn btn-info btn-block" data-toggle="modal" data-target="#strengthsModal">
                <i className="fas fa-edit"></i> Edit Strengths
              </button>
            </div>
          </div>
        </div>
        <div className="col-6 text-center">
          <div className="row justify-content-center mb-3">
            <h3 className="mb-0">Weaknesses</h3>
          </div>
          <div className="row justify-content-center text-center">
            <ul className="mr-5">
              {arrayDisplay(props.currentUser.weaknesses)}
            </ul>
          </div>
          <div className="row justify-content-center mt-3 text-center">
            <div className="col-md-5">
              <button className="btn btn-info btn-block" data-toggle="modal" data-target="#weaknessesModal">
                <i className="fas fa-edit"></i> Edit Weaknesses
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const arrayDisplay = (array) => {
  const result = []

  array.forEach((item, index) =>
    result.push(
      <li key={index+1}>{item}</li>
    )
  )

  return result
}

export default SkillsDisplay
