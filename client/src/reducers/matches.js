export default (state = [], action) => {
  switch(action.type) {
    case 'SET_MATCHES':
      return action.matches
    case 'ADD_MATCH':
      return [...state, action.match]
    default:
      return state
  }
}
