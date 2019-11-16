const initialState = {
  email: "",
  password: "",
  passwordIsValid: null
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'UPDATE_LOGIN_FORM':
      return action.formData
    case 'CLEAR_CURRENT_USER':
      return initialState
    default:
      return state
  }
}
