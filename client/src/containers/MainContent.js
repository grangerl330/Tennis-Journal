import React from 'react'
import MatchForm from '../components/MatchForm'
import TournamentForm from '../components/TournamentForm'

const MainContent = () => {
  return(
    <div className="main-content">
      <MatchForm />
      <TournamentForm />
    </div>
  )
}

export default MainContent
