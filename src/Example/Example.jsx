import React from 'react'

const Example = ({message, append}) => (
  <div>
    <h2>Example</h2>
    <p>{message}</p>
    <button onClick={event => append('I')}>Append something</button>
  </div>
)

export default Example