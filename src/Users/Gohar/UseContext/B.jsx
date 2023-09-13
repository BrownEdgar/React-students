import { useContext } from 'react'
import { MyContext } from './App'

export default function B() {
  const patet = useContext(MyContext)

  return (
    <div>
      <h3>Component B</h3>
      <p>{patet.names.join('-')}</p>
      <button onClick={patet.sortNames}>Sort Names</button>
    </div>
  )
}
