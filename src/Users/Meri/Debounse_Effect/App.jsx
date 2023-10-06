import React, { useCallback, useMemo, useState} from 'react'
import Products from './Products';

let count = 0

export default function App() {
const [value, setValue] = useState(1000)
const [intervalId, setIntervalId] = useState(null)
const [data, setData] = useState(
  () => {
    const result = Array(1000).fill().map((_, i) => {
      const random = Math.floor(Math.random() * (1e5 - 1e3) + 1e3);
      return { id: random * Math.floor(Math.random() * 1000), name: `Product N${++i}`, price: random };
    });
    return result;
  }
);

const handleChange = (e) => {
  if(intervalId){
    clearTimeout(intervalId)
  }

  const sto = setTimeout(() => {
    setValue(e.target.value)
  }, 1000)

  setIntervalId(sto)
}

const filterProduct = useCallback(
  () => {
  return data.filter(product => product.price >= value)
  }, [value])

  const memoProduct = useMemo(() => <Products filterProduct={filterProduct}/>, [value])

  return (
    <div>
      <h1>Value: {value}</h1>
      <input type="range" min={1000} max={1e5} step={1000} onChange={handleChange}/>
      {memoProduct}
    </div>
  )
}
