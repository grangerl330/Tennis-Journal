import React from 'react'
import Matches from '../components/Matches'
import Tournaments from '../components/Tournaments'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Matches />
      <Tournaments />
    </div>
  )
}

export default Sidebar
