import { useReducer } from 'react';
import reducer, { initialState } from './reducer';



export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleClick = () => {
    dispatch({
      type: 'change-title', payload: {
        id: 13,
        title: "new title for id 13"
      }
    })
  }

  return (
    <div>
      <h1>Use reducer hook</h1>
      <button onClick={handleClick}>delete user</button>
      <button onClick={() => dispatch({ type: 'deluser', payload: { id: 3 } })}>del user 1</button>
      <h1 className='json'>
        {
          JSON.stringify(state, null, 1)
        }
      </h1>

    </div>
  )
}
