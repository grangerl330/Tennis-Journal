export default (state = [], action) => {
  switch(action.type) {
    case 'SET_OPPONENTS':
      return action.opponents
    case 'UPDATE_OPPONENT':
      return [...state.filter(opponent => opponent.id !== action.opponent.id), action.opponent]
    default:
      return state
  }
}
