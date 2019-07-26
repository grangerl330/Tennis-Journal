// Synchronous Action Creators

export const welcomeOff = () => {
  return {
    type: 'WELCOME_OFF'
  }
}

export const welcomeOn = () => {
  return {
    type: 'WELCOME_ON'
  }
}

export const increasePosition = () => {
  return {
    type: 'INCREASE_POSITION'
  }
}

export const decreasePosition = () => {
  return {
    type: 'DECREASE_POSITION'
  }
}

export const resetPosition = () => {
  return {
    type: 'RESET_POSITION'
  }
}
