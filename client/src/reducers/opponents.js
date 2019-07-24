export default (state = [], action) => {
  switch(action.type) {
    case 'SET_OPPONENTS':
      return action.opponents
    case 'ADD_MATCH':
      var opponent = action.match.opponent
      opponent.tournament = action.match.tournament
      return [...state, opponent]
    case 'DELETE_MATCH':
      return state.filter(opponent => opponent.id !== action.opponentId)
    case 'UPDATE_OPPONENT':
      return [...state.filter(opponent => opponent.id !== action.opponent.id), action.opponent]
    default:
      return state
  }
}
