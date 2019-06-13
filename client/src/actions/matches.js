// Synchronous Action Creators
export const setMatches = matches => {
  return {
    type: 'SET_MATCHES',
    matches
  }
}

export const addMatchToStore = match => {
  return {
    type: 'ADD_MATCH',
    match
  }
}

// Asynchronous Action Creators
export const fetchMatches = () => {
  return dispatch => {
    return fetch('/matches')
    .then(response => response.json())
    .then(matches => dispatch(setMatches(matches)))
    .catch(console.log)
  }
}
