// Synchronous Action Creators
export const setMatches = matches => {
  return {
    type: 'SET_MATCHES',
    matches
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
