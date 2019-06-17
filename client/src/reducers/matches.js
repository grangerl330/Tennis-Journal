export default (state = [], action) => {
  switch(action.type) {
    case 'SET_MATCHES':
      return action.matches
    case 'ADD_MATCH':
      return [...state, action.match]
    case 'DELETE_MATCH':
      return state.filter(match => match.id !== action.matchId)
    default:
      return state
  }
}
