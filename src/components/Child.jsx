import { useDispatch, useSelector } from 'react-redux'
import { addCount } from '../features/counterSlice'


export default function Child() {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => dispatch(addCount())}>count</button>
    </div>
  )
}
