import React from 'react'
import Child from './Child'

export default function App() {
  return (
    <div>
      <Child age={65} gender="male" todo={{ id: 2, title: 'HJ' }} />
    </div>
  )
}
