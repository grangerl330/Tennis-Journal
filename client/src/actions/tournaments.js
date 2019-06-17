// Synchronous Action Creators
export const setTournaments = tournaments => {
  return {
    type: 'SET_TOURNAMENTS',
    tournaments
  }
}

export const addTournamentToStore = tournament => {
  return {
    type: 'ADD_TOURNAMENT',
    tournament
  }
}

export const deleteTournamentFromStore = tournamentId => {
  return {
    type: 'DELETE_TOURNAMENT',
    tournamentId
  }
}

// Asynchronous Action Creators
export const fetchTournaments = () => {
  return dispatch => {
    return fetch('/tournaments')
    .then(response => response.json())
    .then(tournaments => dispatch(setTournaments(tournaments)))
    .catch(console.log)
  }
}

export const addTournamentToDatabase = tournament => {
  const request = {
    method: 'POST',
    body: JSON.stringify({
      tournament: tournament
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  return dispatch => {
    return fetch('/tournaments', request)
    .then(response => response.json())
    .then(tournament => dispatch(addTournamentToStore(tournament)))
  }
}

export const deleteTournamentFromDatabase = tournamentId => {
  const request = {
    method: 'DELETE',
    body: JSON.stringify({
      tournamentId: tournamentId
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  return dispatch => {
    return fetch(`/tournaments/${tournamentId}`, request)
    .then(response => response.json())
    .then(response => {
      console.log(response.notice)
      dispatch(deleteTournamentFromStore(response.tournamentId))
      window.location.href = '/tournaments/add_tournament' //Need to figure out how to redirect to /matches/add_match and make react re-render
    })
  }
}
