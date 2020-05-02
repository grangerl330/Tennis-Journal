import React from "react"
import LoginWindow from './LoginWindow'
import classNames from 'classnames'
import logo from "../../images/Logo-Dark.svg"

const LoginPageRight = (props) => {
  const classes = classNames('col-md-8 d-md-flex flex-column',
    { 'd-none': props.hideOnMobile }
  );

  return (
    <div className={classes}>
      <div className="row justify-content-end mt-4 d-md-none">
        <i className="fa fa-times fa-lg text-green mr-4" onClick={props.toggleShowOnlyLogin}></i>
      </div>
      <div className="row mt-5 mt-md-3 mb-0">
        <div className="col-1 p-0 text-md-right ml-auto">
          <img className="align-middle logo" src={logo} alt="logo" />
        </div>
        <div className="col-7 col-md-5 col-xl-3 p-0 text-left ml-3 mr-auto mr-md-1 mr-xl-5">
          <h2 className="text-green">Tennis Journal</h2>
        </div>
      </div>
      <div className="row justify-content-center my-auto">
        <div className="col-md-8 text-center">
          <LoginWindow login={props.login}/>
        </div>
      </div>
    </div>
  )
}

export default LoginPageRight
