import React from 'react';
import { NavLink } from 'react-router-dom'

const WelcomeWindow = () => {

  return (
    <div className="welcome-window">
      <NavLink className="close-window-button" to={`/stats`}>x</NavLink>
      <h2>Welcome To Tennis Journal!</h2>
      <div className="welcome-window-text">
        <p>
          This app designed to help you keep track of tournaments, matches, and stats.
        </p>
        <p>
          Add a new tournament by clicking the tournaments link in the side bar.
        </p>
        <p>
          Add a new match to that tournament using the Add Match link.
        </p>
        <p>
          The All Matches and All Opponents lists will automatically populate when new matches are created
        </p>
        <p>
          Click the stats link to see a summary of all your stats. Record and Points will update when tournaments and matches are updated or created
        </p>
        <p>
          To view your profile, click your name in the top left corner
        </p>
      </div>
    </div>
  )
}

export default WelcomeWindow
