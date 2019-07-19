// Synchronous Action Creators
export const setCurrentUser = user => {
  return {
    type: 'SET_CURRENT_USER',
    user
  }
}

export const clearCurrentUser = () => {
  return {
    type: 'CLEAR_CURRENT_USER'
  }
}

// Asynchronous Action Creators
export const login = credentials => {
  console.log("credentials are", credentials)
  return dispatch => {
    return fetch('/login', {
      credentials: 'include',
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

export const logout = () => {
  return dispatch => {
    dispatch(clearCurrentUser())
    return fetch('/logout', {
      credentials: 'include',
      method: 'DELETE'
    })
  }
}

export const getCurrentUser = () => {
  return dispatch => {
    return fetch('/get_current_user', {
      credentials: 'include',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(user => {
      if (user.error) {
        console.log(user.error)
      } else {
        dispatch(setCurrentUser(user))
      }
    })
    .catch(console.log)
  }
}

export const updateCurrentUserInDatabase = user => {
  const request = {
    method: 'PATCH',
    body: JSON.stringify({
      user: user
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  return dispatch => {
    return fetch('/users/update', request)
    .then(response => response.json())
    .then(user => dispatch(setCurrentUser(user)))
  }
}
