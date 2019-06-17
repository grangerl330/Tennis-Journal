import React from 'react'

const Logout = ({ logout }) => {
  const handleOnSubmit = event => {
    event.preventDefault()

    logout()
  }

  return (
    <div className="logout">
      <form onSubmit={handleOnSubmit}>
        <input type="submit" value="Log Out" />
      </form>
    </div>
  )
}

export default Logout
