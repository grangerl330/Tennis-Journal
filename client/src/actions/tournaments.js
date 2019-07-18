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

export const updateTournamentInStore = tournament => {
  return {
    type: 'UPDATE_TOURNAMENT',
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

export const editTournamentInDatabase = tournament => {
  const request = {
    method: 'PATCH',
    body: JSON.stringify({
      tournament: tournament
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  return dispatch => {
    return fetch('/tournaments/update', request)
    .then(response => response.json())
    .then(tournament => dispatch(updateTournamentInStore(tournament)))
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
    })
  }
}
