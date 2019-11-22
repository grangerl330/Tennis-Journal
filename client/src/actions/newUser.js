import { setCurrentUser } from './currentUser'
import $ from 'jquery'

// Asynchronous Action Creators
export const signup = newUserInfo => {
  return dispatch => {
    return fetch('/api/signup', {
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
        $('.form-control.email-signup').addClass('is-invalid')
        $('.invalid-feedback.email-signup').text('An account already exists with this email address')
      } else {
        dispatch(setCurrentUser(user))
      }
    })
    .catch(console.log)
  }
}
