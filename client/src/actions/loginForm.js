// Synchronous Action Creators
export const updateLoginForm = (formData) => {
  return {
    type: 'UPDATE_LOGIN_FORM',
    formData
  }
}

// Asynchronous Action Creators
export const authenticatePassword = (email, password) => {
  return dispatch => {
    return fetch('/api/authenticate_password', {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
    .then(response => response.json())
    .then(response => {
      return response.isValid
    })
    .catch(console.log)
  }
}
