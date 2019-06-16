import React from 'react'

const Logout = ({ logout }) => {
  const handleOnSubmit = event => {
    event.preventDefault()

    logout()
  }

  return (
    <form onSubmit={handleOnSubmit} className="navlink">
      <input type="submit" value="Log Out" />
    </form>
  )
}

export default Logout
