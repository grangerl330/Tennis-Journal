import React from 'react'
import MatchForm from '../containers/MatchForm'
import TournamentForm from '../containers/TournamentForm'

const MainContent = () => {
  return(
    <div className="main-content">
      <MatchForm />
      <TournamentForm />
    </div>
  )
}

export default MainContent
