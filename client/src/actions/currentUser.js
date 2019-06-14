// Synchronous Action Creators
export const setCurrentUser = user => {
  return {
    type: 'SET_CURRENT_USER',
    user
  }
}

// Asynchronous Action Creators
export const login = credentials => {
  console.log("credentials are", credentials)
  return dispatch => {
    return fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
    .then(response => response.json())
    .then(user => {
      if (user.error) {
        alert(user.error)
      } else {
        dispatch(setCurrentUser(user))
      }
    })
    .catch(console.log)
  }
}

export const getCurrentUser = () => {
  console.log("DISPATCHING GET CURRENT USER")
  return dispatch => {
    return fetch('/get_current_user', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(user => {
      if (user.error) {
        alert(user.error)
      } else {
        dispatch(setCurrentUser(user))
      }
    })
    .catch(console.log)
  }
}
