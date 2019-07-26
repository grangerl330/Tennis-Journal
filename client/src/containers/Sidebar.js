import React from 'react';
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <p><NavLink to="/tournaments" className="navlink">Tournaments</NavLink></p>
      <p><NavLink to="/matches" className="navlink">All Matches</NavLink></p>
      <p><NavLink to="/opponents" className="navlink">All Opponents</NavLink></p>
      <p><NavLink to="/stats" className="navlink">My Stats</NavLink></p>
    </div>
  )
}

export default Sidebar
