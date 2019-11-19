import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="container p-0 mt-5">
        <div className="row">
          <div className="col text-center pt-2">
          <small>
            <h6 className="font-bold">Tennis Journal</h6>
            <p>Copyright &copy; <span id="year">{new Date().getFullYear()}</span></p>
          </small>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
