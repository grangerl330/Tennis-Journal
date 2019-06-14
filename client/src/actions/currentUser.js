// Synchronous Action Creators
export const setCurrentUser = user => {
  return {
    type: 'SET_CURRENT_USER',
    user
  }
}

// Asynchronous Action Creators
export const login = credentials => {
  return dispatch => {
    return fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
  }
}
