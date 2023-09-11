import { useState } from 'react'
import Child from './Child'

export default function App() {
  const [user] = useState([{
    id: 1,
    first_name: "Sebastian",
    last_name: "Rogriges",
    address: {
      street: "Halabyan",
      house: 54,
      city: "Yerevan"
    },
    age: 25,
    salary: 560_000,
    bestFriend: "Jhon"
  }])
  return (
    <div>
      <Child data={user} />
    </div>
  )
}
