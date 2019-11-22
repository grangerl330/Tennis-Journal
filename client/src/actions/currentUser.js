import $ from 'jquery'

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
  return dispatch => {
    return fetch('/api/login', {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
    .then(response => response.json())
    .then(user => {
      if(user.error) {
        $('.form-control.email-login').addClass('is-invalid')
        $('.invalid-feedback.email-login').text('An account with this email does not exist')
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
    return fetch('/api/logout', {
      credentials: 'include',
      method: 'DELETE'
    })
  }
}

export const getCurrentUser = () => {
  return dispatch => {
    return fetch('/api/get_current_user', {
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
    return fetch('/api/users/update', request)
    .then(response => response.json())
    .then(user => dispatch(setCurrentUser(user)))
  }
}

export const updateCurrentUserPasswordInDatabase = (user, newPassword) => {
  const request = {
    method: 'PATCH',
    body: JSON.stringify({
      user: user,
      newPassword: newPassword
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  return dispatch => {
    return fetch('/api/users/update_password', request)
    .then(response => response.json())
    .then(user => dispatch(setCurrentUser(user)))
  }
}

export const deleteCurrentUserFromDatabase = user => {
  const request = {
    method: 'DELETE',
    body: JSON.stringify({
      user: user
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  return dispatch => {
    dispatch(clearCurrentUser())
    return fetch('/api/users/delete', request)
    .then(response => response.json())
    .then(response => console.log(response.notice))
  }
}
