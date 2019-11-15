// Synchronous Action Creators
export const setOpponents = opponents => {
  return {
    type: 'SET_OPPONENTS',
    opponents
  }
}

export const updateOpponentInStore = opponent => {
  return {
    type: 'UPDATE_OPPONENT',
    opponent
  }
}

// Asynchronous Action Creators
export const fetchOpponents = () => {
  return dispatch => {
    return fetch('/api/opponents')
    .then(response => response.json())
    .then(opponents => dispatch(setOpponents(opponents)))
    .catch(console.log)
  }
}

export const editOpponentInDatabase = opponent => {
  const request = {
    method: 'PATCH',
    body: JSON.stringify({
      opponent: opponent
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  return dispatch => {
    return fetch('/api/opponents/update', request)
    .then(response => response.json())
    .then(opponent => dispatch(updateOpponentInStore(opponent)))
  }
}
