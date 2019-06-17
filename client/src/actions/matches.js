// Synchronous Action Creators
export const setMatches = matches => {
  return {
    type: 'SET_MATCHES',
    matches
  }
}

export const addMatchToStore = match => {
  return {
    type: 'ADD_MATCH',
    match
  }
}

export const deleteMatchFromStore = matchId => {
  return {
    type: 'DELETE_MATCH',
    matchId
  }
}

// Asynchronous Action Creators
export const fetchMatches = () => {
  return dispatch => {
    return fetch('/matches')
    .then(response => response.json())
    .then(matches => dispatch(setMatches(matches)))
    .catch(console.log)
  }
}

export const addMatchToDatabase = match => {
  const request = {
    method: 'POST',
    body: JSON.stringify({
      match: match
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  return dispatch => {
    return fetch('/matches', request)
    .then(response => response.json())
    .then(match => dispatch(addMatchToStore(match)))
  }
}

export const deleteMatchFromDatabase = matchId => {
  const request = {
    method: 'DELETE',
    body: JSON.stringify({
      matchId: matchId
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  return dispatch => {
    return fetch(`/matches/${matchId}`, request)
    .then(response => response.json())
    .then(response => {
      console.log(response.notice)
      dispatch(deleteMatchFromStore(response.matchId))
      window.location.href = '/matches/add_match' //Need to figure out how to redirect to /matches/add_match and make react re-render 
    })
  }
}
