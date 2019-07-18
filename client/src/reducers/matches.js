export default (state = [], action) => {
  switch(action.type) {
    case 'SET_MATCHES':
      return action.matches
    case 'ADD_MATCH':
      return [...state, action.match]
    case 'UPDATE_MATCH':
      return [...state.filter(match => match.id !== action.match.id), action.match]
    case 'UPDATE_TOURNAMENT':
      const newState = state.map(match => {
        if(match.tournament.id === action.tournament.id){
          match.tournament = action.tournament
        }

        return match
      })
      return newState
    case 'DELETE_MATCH':
      return state.filter(match => match.id !== action.matchId)
    default:
      return state
  }
}
