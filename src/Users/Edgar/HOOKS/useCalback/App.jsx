import React, { useMemo, useState } from 'react'
import Child from './Child'

export default function App() {
  const [value, setValue] = useState('')
  const [count, setcount] = useState(10000)

  const myFunction = () => {
    console.log(111)
    let sum = 0;
    for (let i = 0; i < count; i++) {
      sum += i;
    }
    return sum;
  }
  const child = useMemo(() => <Child myFunction={myFunction} />, [count])

  return (
    <div>
      <h1>Value: {value}</h1>
      {child}
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => setcount(54000)}>change count</button>
    </div>
  )
}
