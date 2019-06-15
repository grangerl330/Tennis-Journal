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

  return fetch('/tournaments', request)
  .then(response => response.json())
  .then(tournament => console.log(tournament))
}
