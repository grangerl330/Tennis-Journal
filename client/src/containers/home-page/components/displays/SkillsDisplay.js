import React from 'react'

const SkillsDisplay = (props) => {
  return (
    <div id="Skills-Display" className="container border rounded shadow-green bg-white">
      <div className="row justify-content-center mt-3">
        <h4 className="text-green mx-auto">My Skills</h4>
        <span data-toggle="tooltip" data-placement="top" title="Edit Skills">
          <i className="fas fa-pencil-alt pr-2 my-auto fa-s text-green" data-toggle="modal" data-target="#skillsModal"></i>
        </span>
      </div>
      <div className="row mt-2">
        <div className="col-6 text-center">
          <span className="mb-0">Strengths</span>
        </div>
        <div className="col-6 text-center">
          <span className="mb-0">Weaknesses</span>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-6 text-center">
          <div className="row justify-content-center">
            <div className="col-9">
              <ul className="p-0">
                {arrayDisplay(props.currentUser.strengths)}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-6 text-center">
          <div className="row justify-content-center">
            <div className="col-9">
              <ul className="p-0">
                {arrayDisplay(props.currentUser.weaknesses)}
              </ul>
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
      <li className="skills-li mt-2" key={index+1}>{item}</li>
    )
  )

  return result
}

export default SkillsDisplay


// <div className="row mt-2">
//   <div className="col-6 text-center">
//     <div className="row justify-content-center mb-3">
//       <span className="mb-0">Strengths</span>
//     </div>
//     <div className="row justify-content-center">
      // <ul className="mr-5">
      //   {arrayDisplay(props.currentUser.strengths)}
      // </ul>
//     </div>
//   </div>
//   <div className="col-6 text-center">
//     <div className="row justify-content-center mb-3">
//       <div className="col text-center">
//         <span className="mb-0">Weaknesses</span>
//       </div>
//     </div>
//     <div className="row justify-content-center">
//       <div className="col text-center">
        // <ul className="p-0">
        //   {arrayDisplay(props.currentUser.weaknesses)}
        // </ul>
//       </div>
//     </div>
//   </div>
