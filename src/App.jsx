import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import ExampleConnector from './Example/ExampleConnector'

const App = ({}) => (
  <div>
    <h1>Hello says PH-Redux!</h1>
    <Provider store={store}>
      <ExampleConnector/>
    </Provider>
  </div>
)

export default App