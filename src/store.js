import { createStore, applyMiddleware } from 'redux'
import MainReducer from './MainReducer'

const initialState = {
  exampleMessage: 'Example message I'
}

// 1. The reducer and initial state are given to the store upon store creation.

const store = createStore(
  MainReducer, 
  initialState,
  // applyMiddleware(...) // *
)

export default store

// *
// Uncomment if you want to apply middleware, such as redux-logger or redux-thunk