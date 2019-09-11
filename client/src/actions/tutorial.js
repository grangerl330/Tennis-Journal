// Synchronous Action Creators

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
