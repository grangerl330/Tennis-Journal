// Synchronous Action Creators
export const setOpponents = opponents => {
  debugger
  return {
    type: 'SET_OPPONENTS',
    opponents
  }
}

// Asynchronous Action Creators
export const fetchOpponents = () => {
  return dispatch => {
    return fetch('/opponents')
    .then(response => response.json())
    .then(opponents => dispatch(setOpponents(opponents)))
    .catch(console.log)
  }
}
