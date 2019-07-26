const initialState = {
  position: 1,
  on: true
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'WELCOME_OFF':
      return {...state, on: false}
    case 'WELCOME_ON':
      return {...state, on: true }
    case 'INCREASE_POSITION':
      return {...state, position: state.position + 1}
    case 'DECREASE_POSITION':
      return {...state, position: state.position - 1}
    case 'RESET_POSITION':
      return {...state, position: 1}
    default:
      return state
  }
}
