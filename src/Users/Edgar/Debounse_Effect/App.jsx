import React, { useCallback, useEffect, useMemo, useState } from 'react'
import Products from './Products';
import axios from 'axios';



export default function App() {
  const [value, setValue] = useState(1);
  const [intervalId, setIntervalId] = useState(null)

  const [data, setData] = useState([])


  useEffect(() => {
    console.log("useEffect run...")
    axios("https://jsonplaceholder.typicode.com/posts")
      .then(res => setData(res.data))
  }, [value])


  const handleChnage = (e) => {

    if (intervalId) {
      clearTimeout(intervalId)
    }

    const sto = setTimeout(() => {
      console.log('value is changed')
      setValue(e.target.value)
    }, 1000)
    setIntervalId(sto)
  }

  const filteredProduct = useCallback(
    () => {
      return data.filter(product => product.userId == value)
    },
    [value],
  )

  return (
    <div>
      <h1>Current Value: {value}</h1>

      <input type="range" min={1} max={10} step={1} onChange={handleChnage} />
      <Products filteredProduct={filteredProduct} />
    </div>
  )
}
