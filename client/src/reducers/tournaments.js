export default (state = [], action) => {
  switch(action.type) {
    case 'SET_TOURNAMENTS':
      return action.tournaments
    case 'ADD_TOURNAMENT':
      return [...state, action.tournament]
    default:
      return state
  }
}
