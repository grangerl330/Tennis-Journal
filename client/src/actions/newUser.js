import { setCurrentUser } from './currentUser'

// Asynchronous Action Creators
export const signup = newUserInfo => {
  console.log("New User info is", newUserInfo)

  return dispatch => {
    return fetch('/signup', {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUserInfo)
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
