const MatchService = {
  fetchMatches() {
    return fetch('/matches')
    .then(response => response.json())
  },

  createMatch(match){
    const request = {
      method: 'POST',
      body: JSON.stringify({
        match: match
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }

    return fetch('/matches', request)
    .then(response => response.json())
  }
}



export default MatchService
