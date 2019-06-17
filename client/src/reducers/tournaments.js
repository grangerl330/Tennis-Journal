export default (state = [], action) => {
  switch(action.type) {
    case 'SET_TOURNAMENTS':
      return action.tournaments
    case 'ADD_TOURNAMENT':
      return [...state, action.tournament]
      case 'DELETE_MATCH':
        return state.filter(tournament => tournament.id !== action.tournamentId)
    default:
      return state
  }
}
