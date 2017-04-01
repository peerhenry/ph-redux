
// 2. The purpose of the reducer is to change the state whenever an action is dispatched.
// The reducer will only receive actions via the store's function 'dispatch'.

const MainReducer = (state, action) => {
  switch(action.type){
    case 'EXAMPLE_APPEND':
      const newMessage = state.exampleMessage + action.payload
      return {...state, exampleMessage: newMessage }
    default:
      return state
  }
}

export default MainReducer