import React from "react"
import LoginWindow from './LoginWindow'
import logo from "../../../images/Logo-Dark.svg"

const LoginPageRight = (props) => {
  return (
    <div className="col-8 d-flex flex-column">
      <div className="row mt-3">
        <div className="col-1 p-0 text-right ml-auto">
          <img className="align-middle logo" src={logo} alt="logo" />
        </div>
        <div className="col-3 p-0 text-left ml-3 mr-5">
          <h2 className="text-green">Tennis Journal</h2>
        </div>
      </div>
      <div className="row justify-content-center my-auto">
        <div className="col-8 text-center">
          <LoginWindow login={props.login}/>
        </div>
      </div>
    </div>
  )
}

export default LoginPageRight
