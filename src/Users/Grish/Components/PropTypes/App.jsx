import { useState } from 'react'
import Child from './Child/Child'

import "./App.css"


export default function App() {
    const [ userData ] = useState([
        {
          id: 1,
          firt_name: "Sebastian",
          last_name: "Rogriges",
          addres: {
            street: "Halabyan",
            house: 54,
            city:"Yerevan"
          },
          age: 25,
          salary: 560_000,
          bestFriend: "Jhon"
        }
    ])

  return (
    <div className='App'>
        <h1>Data in user</h1>
        <Child data={userData} />
    </div>
  )
}
