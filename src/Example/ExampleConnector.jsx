import { connect } from 'react-redux'
import Example from './Example'

// 3. The function 'connect' gets the object 'state' and the function 'dispatch' from the store, and gives them to the two functions 'mapStateToProps' and 'mapDispatchToProps'
// This way, React components may use state and dispatch indirectly through its props.

const mapStateToProps = (state) => {
  return {
    message: state.exampleMessage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    append: (toAppend) => dispatch({ type: 'EXAMPLE_APPEND', payload: toAppend })
  }
}

const ExampleConnector = connect(mapStateToProps, mapDispatchToProps)(Example)

export default ExampleConnector