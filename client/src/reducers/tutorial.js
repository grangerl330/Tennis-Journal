const initialState = {
  position: 1
}

export default (state = initialState, action) => {
  switch(action.type) {
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
