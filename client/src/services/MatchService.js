const MatchService = {
  fetchMatches() {
    return fetch('/matches')
    .then(response => response.json())
  }
}

export default MatchService
