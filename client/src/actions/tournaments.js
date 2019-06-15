// Synchronous Action Creators
export const setTournaments = tournaments => {
  return {
    type: 'SET_TOURNAMENTS',
    tournaments
  }
}

export const addMatchToStore = match => {
  return {
    type: 'ADD_TOURNAMENT',
    match
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
