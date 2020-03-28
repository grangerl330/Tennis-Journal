import React from 'react'

const SkillsDisplay = (props) => {
  return (
    <div id="Skills-Display" className="container border rounded">
      <div className="row justify-content-center text-white bg-secondary">
        <h3>My Skills</h3>
        <i className="fas fa-edit ml-2 my-auto fa-xs" data-toggle="modal" data-target="#skillsModal"></i>
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
