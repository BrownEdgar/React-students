import { useEffect, useMemo, useState, useTransition, memo, useCallback } from 'react'
import Coments from './Coments'
import './App.css'

const comentsFilter = (coments, search) => coments.filter(item => item.title.includes(search))

export default function App() {
  const [coments, setComents] = useState([])
  const [search, setSearch] = useState('')
  const [count, setCount] = useState(1e6)
  const [isPending,
    startTransition] = useTransition() // 1

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos`)
      .then(response => response.json())
      .then(setComents)
  }, [])

  const handleSearch = useCallback((event) => {
    const { value } = event.target;
    startTransition(() => setSearch(value)) // 2

  }, [],)

  // const total = useMemo(() => <Total count={count} />, [count])
  return (
    <div className='container'>
      <h1>
        useTransition hook
      </h1>
      <form>
        <input type="text" onChange={handleSearch} />
      </form>
      <MemoTotal count={count} handleSearch={handleSearch} /> {isPending && <h1>Pending....</h1>}
      <Coments data={comentsFilter(coments, search)} />
    </div>
  )
}

const MemoTotal = memo(function Total({ count }) {
  console.log("total")
  let sum = 0;
  for (let i = 0; i <= count; i++) {
    sum += i
  }
  return <h1>Total: {sum}</h1>
})