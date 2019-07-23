import { setCurrentUser } from './currentUser'

// Asynchronous Action Creators
export const signup = newUserInfo => {
  return dispatch => {
    return fetch('/signup', {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: newUserInfo
      })
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
