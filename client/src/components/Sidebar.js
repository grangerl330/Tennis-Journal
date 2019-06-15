import React from 'react'
import Matches from '../containers/Matches'
import Tournaments from '../containers/Tournaments'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Matches />
      <Tournaments />
    </div>
  )
}

export default Sidebar
