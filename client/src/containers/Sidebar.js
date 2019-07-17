import React from 'react';
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <p><NavLink to="/home" className="navlink">Home</NavLink></p>
      <p><NavLink to="/tournaments" className="navlink">Tournaments</NavLink></p>
      <p><NavLink to="/matches" className="navlink">Matches</NavLink></p>
      <p><NavLink to="/opponents" className="navlink">Opponents</NavLink></p>
    </div>
  )
}

export default Sidebar
