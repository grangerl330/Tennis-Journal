export default (state = true, action) => {
  switch(action.type) {
    case 'WELCOME_OFF':
      return false
    case 'WELCOME_ON':
      return true
    default:
      return state
  }
}
