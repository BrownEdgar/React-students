import { useState } from 'react'
import Child from './Child'

export default function App() {
  const [food, setFood] = useState([
    {
      id: 1,
      name: '🍔',
      price: 30,
      amount: 10,
    },
    {
      id: 2,
      name: '🍨',
      price: 20,
      amount: 3,
    },
    {
      id: 3,
      name: '🍿',
      price: 10,
      amount: 5,
    },
    {
      id: 4,
      name: '🍵',
      price: 5,
      amount: 9,
    },
  ])

  const delById = (id) => {
    const result = food.concat().filter(e => e.id !== id)
    setFood(result)
  }

  return (
    <div>
      <Child data={food} delById={delById} />
    </div>
  )
}
